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
        steps.map((el) => {
            tempReqs.push(el.requirement)
        })
        setReqs(tempReqs)
        }
    const fetchReqsByList = () => {
        let reqsListToBePutIntoList = []
        let reqsByListList = []
        reqsList.map((el) => {
            for(let i=0; i<reqs.length; i++){
                if(reqs[i].requirement_list.id === el.id){
                    reqsListToBePutIntoList.push(reqs[i])
                }}
            reqsByListList.push(reqsListToBePutIntoList)
            reqsListToBePutIntoList = []
        })
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
        setStepsByList(stepsByListList)
    }


    return ( 
        <div>
            {loading ? <p>LOADING</p> : 
            reqsList && reqsList.map((el, index) => {
                let reqsByListMap = reqsByList[index].map((el) => {
                    return (`Requirement Id: ${el.id} Requirement Title: ${el.name}`)})
                let distinctReqsByList = [...new Set(reqsByListMap)]
                let distinctReqsByListDivs = distinctReqsByList.map((el) => {return(<div>{el}</div>)})
                let reqsByListSpread = [...distinctReqsByListDivs]
                let stepsByListMap = stepsByList[index].map((el) => {
                    return (<div>
                                <p>{`Step Id: ${el.id}`}</p> 
                                <p>{`Step Title: ${el.name}`}</p>
                                <p>{`Part of Requirement: ${el.requirement.name}`}</p>
                            </div>)})
                let stepsByListSpread =[...stepsByListMap]
                return (
                    <div key={index}>
                        <div>
                        <p>{`Requirement List ID: ${el.id}
                            Requirement List Title: ${el.name}\n`}</p>
                        </div>
                        <div>
                            {reqsByListSpread}
                        </div>
                        <div>
                            {stepsByListSpread}
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default ReqBreakOut;