import React, { useState } from 'react';
import {Form} from 'react-bootstrap';


const PIDisplay = (props) => {

    const data = props.data

    return ( 
        <Form className="border p-1 bg-primary border-primary col-md-12 rounded-3">
                <h1 className="text-white">Personal information</h1>
                <Form.Group className="bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder={data.first_name} disabled/>
                </Form.Group>
                <Form.Group className="bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder={data.last_name} disabled/>
                </Form.Group>
                <Form.Group className="bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="password" placeholder={data.email} />
                </Form.Group>
                <Form.Group className="bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="password" placeholder={data.address} />
                </Form.Group>
                <Form.Group className="bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="password" placeholder={data.phone_number} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Cac Expiration (YYYY-MM-DD)</Form.Label>
                    <Form.Control type="password" placeholder={data.cac_exp} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Passport Number</Form.Label>
                    <Form.Control type="password" placeholder={data.pass_num} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Passport Expiration  (YYYY-MM-DD)</Form.Label>
                    <Form.Control type="password" placeholder={data.pass_exp} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Visa Country of Origin</Form.Label>
                    <Form.Control type="password" placeholder={data.visa_name} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Visa Number</Form.Label>
                    <Form.Control type="password" placeholder={data.visa_id} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Visa Expiration  (YYYY-MM-DD)</Form.Label>
                    <Form.Control type="password" placeholder={data.visa_exp} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>CBTs</Form.Label>
                    <Form.Control type="password" placeholder={data.cbts} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Medical Requested On (YYYY-MM-DD)</Form.Label>
                    <Form.Control type="password" placeholder={data.med_requested} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Medical Scheduled for  (YYYY-MM-DD)</Form.Label>
                    <Form.Control type="password" placeholder={data.med_scheduled} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Medical Expires on  (YYYY-MM-DD)</Form.Label>
                    <Form.Control type="password" placeholder={data.med_exp} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Dental Scheduled for  (YYYY-MM-DD)</Form.Label>
                    <Form.Control type="password" placeholder={data.dent_scheduled} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>Dental Expires on  (YYYY-MM-DD)</Form.Label>
                    <Form.Control type="password" placeholder={data.dent_exp} />
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" controlId="formBasicPassword">
                    <Form.Label>LOA Expires on (YYYY-MM-DD)</Form.Label>
                    <Form.Control type="password" placeholder={data.loa_exp} />
                </Form.Group>
        </Form>
     );
    }
 
    export default PIDisplay;