import React, { useState } from 'react';
import DepCreate from './DepCreate/DepCreate';
import DepDelete from './DepDelete/DepDelete';
import DepUpdate from './DepUpdate/DepUpdate';

const LocCRUD = (props) => {

    

  return (
    <div className="d-flex flex-row justify-content-center">
        <DepCreate/>
        <DepUpdate/>
        <DepDelete/>
    </div>
  );
};
 
export default LocCRUD;