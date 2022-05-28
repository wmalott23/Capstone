import React, { useState } from 'react';
import StepCreate from './StepCreate/StepCreate'
import StepDelete from './StepDelete/StepDelete';
import StepUpdate from './StepUpdate/StepUpdate';

const StepsCRUD = (props) => {

    

  return (
    <div className="container">
        <StepCreate />
        <StepUpdate/>
        <StepDelete/>
    </div>
  );
};
 
export default StepsCRUD;