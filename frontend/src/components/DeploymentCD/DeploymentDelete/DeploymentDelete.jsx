import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

const DeploymentDelete = () => {

    const [id, setId] = useState(0);

    function handleSubmit(event) {
        event.preventDefault()
        delDeployment();
    }

    async function delDeployment(){
        let response = await axios.delete(`http://127.0.0.1:8000/api/deployments/${id}`);
        if(response.status === 204){
            window.location.reload(false);
        }
      }

    //Modal Logic

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <div>
        <button className="btn bg-success text-white m-1" onClick={handleShow}>
            Delete Deployment
        </button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Deployment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modal-body p-1 d-flex flex-column align-content-end rounded" onSubmit={handleSubmit}>
                    <div className="d-flex flex-column align-content-end p-1">
                        <textarea className="form-control form-control" type='text' placeholder="Id:" onChange={(event) => setId(event.target.value)}></textarea>
                    </div>
                    <button className="btn bg-success col-md-5 align-self-center text-white" onClick={handleClose}>Submit</button>
                </form>
            </Modal.Body>
        </Modal>
        </div>
     );
}
 
export default DeploymentDelete;