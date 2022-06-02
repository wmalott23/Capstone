import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const DepNotesCreate = (props) => {

    const [user, token] = useAuth();
    const [commentMessage, setCommentMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        let reqList = {
            comment_message: commentMessage,
            step_id: props.stepId
        };
        postDepNote(reqList);
    }

    async function postDepNote(reqList){
        let response = await axios.post(`http://127.0.0.1:8000/api/notes/notes/`, reqList, {
            headers: {
                Authorization: "Bearer " + token,
            },
        
        });
        if(response.status === 201){
            props.fetchNotes()
        }
      }


    return ( 
        
        <form className="modal-body p-1 d-flex flex-column align-content-end border-primary rounded" onSubmit={handleSubmit}>
            {console.log(props.stepId)}
            <div className="d-flex flex-column align-content-end p-1">
                <textarea className="form-control form-control" type='text' placeholder="Comment Message:" onChange={(event) => setCommentMessage(event.target.value)}></textarea>
            </div>
            <button className="btn bg-primary col-md-5 align-self-center text-white" >Submit</button>
        </form>

     );
}
 
export default DepNotesCreate;