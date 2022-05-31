import React, { useState } from 'react';
import StepCreate from './StepCreate/StepCreate'
import StepDelete from './StepDelete/StepDelete';
import StepUpdate from './StepUpdate/StepUpdate';

const StepsCRUD = (props) => {

    

  return (
    <div className="d-flex flex-row justify-content-center">
        <StepCreate />
        <StepUpdate/>
        <StepDelete/>
    </div>
  );
};
 
export default StepsCRUD;