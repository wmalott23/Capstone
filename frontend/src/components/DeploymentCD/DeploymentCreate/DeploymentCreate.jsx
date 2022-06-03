import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

const DeploymentCreate = ({locationId}) => {

    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reqListId, setReqListId] = useState(0);

    function handleSubmit(event) {
        event.preventDefault()
        let reqList = {
            name: name,
            start_date: startDate,
            end_date: endDate,
            requirement_list_id: reqListId,
            location_id: locationId
        };
        console.log(reqList)
        postDeployment(reqList);
    }

    async function postDeployment(reqList){
        let response = await axios.post(`http://127.0.0.1:8000/api/deployments/`, reqList);
        if(response.status === 201){
            window.location.reload(false);
        }
      }

    //Modal Logic

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <div>
        <button className="btn bg-primary p-1 text-white m-1" onClick={handleShow}>
            Create Deployment
        </button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Deployment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modal-body p-1 d-flex flex-column align-content-end rounded" onSubmit={handleSubmit}>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Name:" onChange={(event) => setName(event.target.value)}></textarea>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <label>Start Date:</label>
                        <input type="date" name="birthday" placeholder="Start Date:" onChange={(event) => setStartDate(event.target.value)}/>                    
                    </div>
                    <div className="d-flex flex-column align-content-end p-1 mb-3">
                        <label>End Date:</label>
                        <input type="date" name="birthday" placeholder="Start Date:" onChange={(event) => setEndDate(event.target.value)}/>                    
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" placeholder="Requirement List Id" onChange={(event) => setReqListId(event.target.value)}></textarea>
                    </div>
                    <button className="btn bg-success col-md-5 align-self-center text-white" onClick={handleClose}>Submit</button>
                </form>
            </Modal.Body>
        </Modal>
        </div>
     );
}
 
export default DeploymentCreate;