import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

const ReqListUpdate = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [deploymentId, setDeploymentId] = useState(0);

    function handleSubmit(event) {
        event.preventDefault()
        let reqList = {
            name: name,
            deployment_id: deploymentId,
        };
        putReqList(reqList);
    }

    async function putReqList(reqList){
        let response = await axios.put(`http://127.0.0.1:8000/api/requirements_lists/${id}`, reqList);
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
            Update Requirement List
        </button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Requirement List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modal-body p-1 d-flex flex-column align-content-end rounded" onSubmit={handleSubmit}>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Id:" onChange={(event) => setId(event.target.value)}></textarea>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Name:" onChange={(event) => setName(event.target.value)}></textarea>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Deployment ID:" onChange={(event) => setDeploymentId(event.target.value)}></textarea>
                    </div>
                    <button className="btn bg-success col-md-5 align-self-center text-white" onClick={handleClose}>Submit</button>
                </form>
            </Modal.Body>
        </Modal>
        </div>
     );
}
 
export default ReqListUpdate;