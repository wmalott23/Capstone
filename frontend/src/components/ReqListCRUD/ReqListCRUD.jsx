import React, { useState } from 'react';
import ReqListCreate from './ReqListCreate/ReqListCreate';
import ReqListUpdate from './ReqListUpdate/ReqListUpdate';
import ReqListDelete from './ReqListDelete/ReqListDelete';

const ReqListCRUD = (props) => {

    

  return (
    <div className="container">
        <ReqListCreate />
        <ReqListUpdate/>
        <ReqListDelete/>
    </div>
  );
};
 
export default ReqListCRUD;