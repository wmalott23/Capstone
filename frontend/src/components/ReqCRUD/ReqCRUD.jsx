import React, { useState } from 'react';
import ReqCreate from './ReqCreate/ReqCreate';
import ReqUpdate from './ReqUpdate/ReqUpdate';
import ReqDelete from './ReqDelete/ReqDelete';

const ReqCRUD = (props) => {

    

  return (
    <div className="container">
        <ReqCreate />
        <ReqUpdate/>
        <ReqDelete/>
    </div>
  );
};
 
export default ReqListCRUD;