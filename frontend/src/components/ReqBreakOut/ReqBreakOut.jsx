import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

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
                    return (`Requirement Id: ${el.id} Requirement Title: ${el.name}`
                    
                    )})
                let distinctReqsByList = [...new Set(reqsByListMap)]
                let distinctReqsByListDivs = distinctReqsByList.map((el) => {return(<div>{el}</div>)})
                let reqsByListSpread = [...distinctReqsByListDivs]
                let stepsByListMap = stepsByList[index].map((el) => {
                    return (<ListGroup.Item className="m-1">
                                <h6>Step Id:</h6> 
                                <h6>{el.id}</h6> 
                                <h6>Step Name:</h6>
                                <h6>{el.name}</h6>
                                <h6>Priority:</h6>
                                <h6>{el.priority}</h6>
                                <h6>Description:</h6>
                                <h6>{el.description}</h6>
                                <h6>Length:</h6>
                                <h6>{el.len}</h6>
                                <h6>Part of Requirement:</h6>
                                <h6>{el.requirement.name}</h6>
                            </ListGroup.Item>)})
                let stepsByListSpread =[...stepsByListMap]
                return (
                    <Row xs={1} md={2} className="g-4">
                        <Card bg="primary" text="white" className="m-4" style={{ width: '18rem' }} key={index}>
                            <Card.Title className="m-1">
                                   <h4>Requirement List Title:</h4>
                                   <h6>{el.name}</h6>
                                   <h4>Requirement List ID:</h4> 
                                   <h6>{el.id}</h6> 
                            </Card.Title>
                            <Card.Text> Requirements:
                            </Card.Text>
                            <ListGroupItem>
                                {reqsByListSpread}
                            </ListGroupItem>
                            <Card.Text> Steps:
                            </Card.Text>
                                {stepsByListSpread}
                        </Card>
                    </Row>
                )
            })}
        </div>
     );
}
 
export default ReqBreakOut;