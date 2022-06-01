import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

const ReqListCreate = (props) => {

    const [name, setName] = useState('');
    const [deploymentId, setDeploymentId] = useState(0);

    function handleSubmit(event) {
        event.preventDefault()
        let reqList = {
            name: name,
        };
        postReqList(reqList);
    }

    async function postReqList(reqList){
        let response = await axios.post(`http://127.0.0.1:8000/api/requirements_lists/`, reqList);
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
            Create Requirement List
        </button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Requirement List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modal-body p-1 d-flex flex-column align-content-end rounded" onSubmit={handleSubmit}>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Name:" onChange={(event) => setName(event.target.value)}></textarea>
                    </div>
                    <button className="btn bg-success col-md-5 align-self-center text-white" onClick={handleClose}>Submit</button>
                </form>
            </Modal.Body>
        </Modal>
        </div>
     );
}
 
export default ReqListCreate;