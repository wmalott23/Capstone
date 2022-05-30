import React, { useState } from 'react';
import LocCreate from './LocCreate/LocCreate';
import LocDelete from './LocDelete/LocDelete';
import LocUpdate from './LocUpdate/LocUpdate';

const LocCRUD = (props) => {

    

  return (
    <div className="container">
        <LocCreate/>
        <LocUpdate/>
        <LocDelete/>
    </div>
  );
};
 
export default LocCRUD;