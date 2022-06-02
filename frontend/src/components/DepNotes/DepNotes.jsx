import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import DepNotesCreate from './DepNoteCreate';

const DepNotes = ({stepId, stepName}) => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchNotes()
    }, [])

    const fetchNotes = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/notes/notes/${stepId}/`)
            setNotes(response.data)
          } catch (error) {
            console.log(error.message)
          }
        }
    //Modal Logic

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
        <button className="btn bg-primary p-1 text-white m-1" onClick={handleShow}>
            View Notes
        </button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton> Notes on {stepName} </Modal.Header>
        <Modal.Body>
            {notes.map((el, index) => {
                return(
                    <div className="d-flex m-2 flex-column bg-primary text-white border border-primary rounded" key={index}>
                        <div className="align-self-start p-1 m-1 bg-white text-primary border rounded">
                            {el.user.username}
                        </div>
                        <div className="p-1">
                            {el.comment_message}
                        </div>
                    </div>
                )
            })}       
            <DepNotesCreate stepId={stepId} fetchNotes={fetchNotes}/>     
        </Modal.Body>
        </Modal>
        </div>
     );
}
 
export default DepNotes;