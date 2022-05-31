import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Modal from 'react-bootstrap/Modal';

//Import Components
import StepsCRUD from '../../components/StepsCRUD/StepsCRUD';
import ReqBreakOut from '../../components/ReqBreakOut/ReqBreakOut';
import ReqCRUD from '../../components/ReqCRUD/ReqCRUD';
import ReqListCRUD from '../../components/ReqListCRUD/ReqListCRUD';
import axios from "axios";

const DepDetailsPage = () => {

    const [user, token] = useAuth();
    const [steps, setSteps] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true
        fetchSteps().then(() => {
            if(mounted) {
                setLoading(false)
            }})
        return function cleanup() {
            mounted = false
        }
    }, [])

    async function fetchSteps(){
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/steps/`)
          setSteps(response.data)
        } catch (error) {
          console.log(error.message)
        }
      }

    return ( loading ? <p>LOADING</p> :
    <div className="container d-flex flex-column p-3 col-md-12">
        <div className="left col-md-6 justify-content-center">
            <ReqBreakOut steps={steps}/>
        </div>
        <div className="col-md-5 m-6 align-self-end position-fixed">
            <ReqListCRUD/>
            <ReqCRUD/>
            <StepsCRUD/>
        </div>
    </div>     
    );
}
 
export default DepDetailsPage;