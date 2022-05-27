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
        let reqsByListList = []
        console.log(reqsList)
        reqsList.map((el) => {
            console.log(el)
            for(let i=0; i<reqs.length; i++){
                if(reqs[i].requirement_list.id === el.id){
                    reqsByListList.push(reqs[i])
                }}
        })
        console.log(reqsByListList)
        setReqsByList(reqsByListList)
        

    }
    const fetchStepsByList = () => {
        let stepsByListList = []
        reqsList.map((el) => {
            for(let i=0; i<reqs.length; i++)
                if(steps[i].requirement.requirement_list.id === el.id){
                    stepsByListList.push(steps[i])
                }
        })
        console.log(stepsByListList)
        setStepsByList(stepsByListList)
    }


    return ( 
        <div>
            {loading ? <p>LOADING</p> : reqsList && reqsList.map((el, index) => {
                console.log(reqsList, reqs, reqsByList, stepsByList)
                return (
                    <div key={index}>
                        <p>
                            {el.name}
                        </p>
                        <p>
                            {reqsByList[index].name}
                        </p>
                        <p>
                            {stepsByList[index].name}
                        </p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default ReqBreakOut;