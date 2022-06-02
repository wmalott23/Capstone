import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import DepNotes from './DepNotes';

const DepNotesList = ({steps}) => {

    

    return ( 
        <Table className="mb-4 border border-primary border-3" striped bordered hover size="lg" style={{ width: '8rem' }}>
        <thead>
          <tr>
            <th>Step Name</th>
            <th>Step Description</th>
            <th>Step Notes</th>
          </tr>
        </thead>
        <tbody>
            {steps.map((el, index) => {
                return (
                    <tr key={index}>
                        <th>
                        {el.name}
                        </th>
                        <th>
                        {el.description}
                        </th>
                        <th>
                        <DepNotes stepId={el.id} stepName={el.name}/>
                        </th>
                  </tr>
                )
            })}
        </tbody>
      </Table>

     );
}
 
export default DepNotesList;