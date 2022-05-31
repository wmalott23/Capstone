import React, { useState } from 'react';
import ReqListCreate from './ReqListCreate/ReqListCreate';
import ReqListUpdate from './ReqListUpdate/ReqListUpdate';
import ReqListDelete from './ReqListDelete/ReqListDelete';

const ReqListCRUD = (props) => {

    

  return (
    <div className="d-flex flex-row justify-content-center">
        <ReqListCreate />
        <ReqListUpdate/>
        <ReqListDelete/>
    </div>
  );
};
 
export default ReqListCRUD;