import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { Form, Modal } from 'react-bootstrap';

const StepCreate = (props) => {

    const [name, setName] = useState('');
    const [requirementId, setRequirementId] = useState(0);
    const [priority, setPriority] = useState(0);
    const [description, setDescription] = useState('');
    const [len, setLen] = useState(0);
    const [user, token] = useAuth();

    function handleSubmit(event) {
        event.preventDefault()
        let step = {
            name: name,
            requirement_id: requirementId,
            priority: priority,
            description: description,
            len: len
        };
        postStep(step);
    }

    async function postStep(step){
        try{
        let response = await axios.post(`http://127.0.0.1:8000/api/steps/post/`, step);
        if(response.status === 201){
            window.location.reload(false);
        }} catch (error) {
        console.log(error.message);
    }
      }

    //Modal Logic

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <div>
        <button className="btn bg-primary p-1 text-white m-1" onClick={handleShow}>
            Create Step
        </button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Step</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modal-body p-1 d-flex flex-column align-content-end rounded" onSubmit={handleSubmit}>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Name:" onChange={(event) => setName(event.target.value)}></textarea>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        
                        <input type="range" className="form-range" min="1" max="5" step="1"/>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Description:" onChange={(event) => setDescription(event.target.value)}></textarea>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Length:" onChange={(event) => setLen(event.target.value)}></textarea>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Requirement ID:" onChange={(event) => setRequirementId(event.target.value)}></textarea>
                    </div>

                    <button className="btn bg-success col-md-5 align-self-center text-white" onClick={handleClose}>Submit</button>
                </form>
            </Modal.Body>
        </Modal>
        </div>
     );
}
 
export default StepCreate;