import React, { useState } from 'react';
import axios from 'axios';
import { Form, Modal } from 'react-bootstrap';

const ReqCreate = (props) => {

    const [name, setName] = useState('');
    const [dependency, setDependency] = useState('');
    const [requirementListId, setRequirementListId] = useState(0);

    function handleSubmit(event) {
        event.preventDefault()
        let req = {
            name: name,
            dependency: dependency,
            requirement_list_id: requirementListId,
        };
        postReq(req);
    }

    async function postReq(req){
        let response = await axios.post(`http://127.0.0.1:8000/api/requirements/`, req);
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
            Create Requirement
        </button>
        <Modal show={show} className="" onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Requirement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modal-body p-1 d-flex flex-column align-content-end rounded" onSubmit={handleSubmit}>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Name:" onChange={(event) => setName(event.target.value)}></textarea>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <Form.Select aria-label="Select Dependency" className="form-control form-control" onChange={(event) => setDependency(event.target.value)}>
                            <option>Choose Dependency</option>
                            <option value="pass_exp">Passport validity</option>
                            <option value="visa_exp">Visa validity</option>
                            <option value="cac_exp">CAC validity</option>
                            <option value="med_exp">Medical Clearance</option>
                            <option value="dent_exp">Dental Clearance</option>
                        </Form.Select>
                    </div>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Requirement List ID:" onChange={(event) => setRequirementListId(event.target.value)}></textarea>
                    </div>
                    <button className="btn bg-success col-md-5 align-self-center text-white" onClick={handleClose}>Submit</button>
                </form>
            </Modal.Body>
        </Modal>
        </div>
     );
}
 
export default ReqCreate;