import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

//Import Components
import StepsCRUD from '../../components/StepsCRUD/StepsCRUD';
import ReqBreakOut from '../../components/ReqBreakOut/ReqBreakOut';
import ReqCRUD from '../../components/ReqCRUD/ReqCRUD';
import ReqListCRUD from '../../components/ReqListCRUD/ReqListCRUD';

const DepDetailsPage = () => {

    const [user, token] = useAuth();
    const [steps, setSteps] = useState([])

    useEffect(() => {
        fetchSteps()
    })

    const fetchSteps = async () => {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/steps/`)
          setSteps(response.data)
        } catch (error) {
          console.log(error.message)
        }
      }

    return ( 
    <div className="container">
        <ReqBreakOut steps={steps}/>
        <ReqListCRUD steps={steps}/>
        <ReqCRUD steps={steps}/>
        <StepsCRUD steps={steps}/>
    </div>     
    );
}
 
export default DepDetailsPage;