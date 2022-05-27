import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReqBreakOut = ({steps}) => {
    const [reqsList, setReqsList] = useState([])
    const [reqs, setReqs] = useState([])
    const [reqsByList, setReqsByList] = useState([])
    const [stepsByList, setStepsByList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true
        fetchReqsList().then(() => {
            if(mounted) {
                setLoading(false)
            }})
        return function cleanup() {
            mounted = false
        }
    }, [steps])

    useEffect(() => {
        fetchReqs()
        fetchReqsByList()
        fetchStepsByList()
    }, [reqsList])

    // useEffect(() => {
    //     fetchReqsByList()
    //     fetchStepsByList()
    // }, [reqs])


    const fetchReqsList = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/requirements_lists/`)
            setReqsList(response.data)
          } catch (error) {
            console.log(error.message)
          }
        }

    const fetchReqs = () => {
        let tempReqs = []
        console.log(steps)
        steps.map((el) => {
            tempReqs.push(el.requirement)
        })
        console.log(tempReqs)
        setReqs(tempReqs)
        }
    const fetchReqsByList = () => {
        let reqsListToBePutIntoList = []
        let reqsByListList = []
        reqsList.map((el) => {
            console.log(el)
            for(let i=0; i<reqs.length; i++){
                if(reqs[i].requirement_list.id === el.id){
                    reqsListToBePutIntoList.push(reqs[i])
                }}
            reqsByListList.push(reqsListToBePutIntoList)
            reqsListToBePutIntoList = []
        })
        console.log(reqsByListList)
        setReqsByList(reqsByListList)
        

    }
    const fetchStepsByList = () => {
        let stepsListToBePutIntoList = []
        let stepsByListList = []
        reqsList.map((el) => {
            for(let i=0; i<reqs.length; i++)
                if(steps[i].requirement.requirement_list.id === el.id){
                    stepsListToBePutIntoList.push(steps[i])
                }
            stepsByListList.push(stepsListToBePutIntoList)
            stepsListToBePutIntoList = []
        })
        console.log(stepsByListList)
        setStepsByList(stepsByListList)
    }


    return ( 
        <div>
            {loading ? <p>LOADING</p> : 
            reqsList && reqsList.map((el, index) => {
                let reqsByListMap = reqsByList[index].map((el) => `Requirement Id: ${el.id} Requirement Title: ${el.name}\n`)
                let distinctReqsByList = [...new Set(reqsByListMap)]
                let reqsByListSpread = [...distinctReqsByList]
                let stepsByListMap = stepsByList[index].map((el) => `Step Id: ${el.id} Step Title: ${el.name}\n Part of Requirement: ${el.requirement.name}\n`)
                let stepsByListSpread =[...stepsByListMap]
                console.log(reqsList, reqs, reqsByList, stepsByList)
                return (
                    <div key={index}>
                        <p>{`Requirement List ID: ${el.id}
                            Requirement List Title: ${el.name}\n`}</p>
                        <p>{reqsByListSpread}</p>
                        <p>{stepsByListSpread}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default ReqBreakOut;