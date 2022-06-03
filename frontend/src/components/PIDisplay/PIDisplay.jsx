import React, { useState } from 'react';
import {Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import axios from 'axios';


const PIDisplay = (props) => {

    const data = props.data
    const [depId, setDepId] = useState(data.deployment.id);
    const [firstName, setFirstName] = useState(data.first_name);
    const [lastName, setLastName] = useState(data.last_name);
    const [email, setEmail] = useState(data.email);
    const [address, setAddress] = useState(data.address);
    const [phoneNumber, setPhoneNumber] = useState(data.phone_number);
    const [cacExp, setCacExp] = useState(data.cac_exp);
    const [passNum, setPassNum] = useState(data.pass_num);
    const [passExp, setPassExp] = useState(data.pass_exp);
    const [visaName, setVisaName] = useState(data.visa_name);
    const [visaNum, setVisaNum] = useState(data.visa_id);
    const [visaExp, setVisaExp] = useState(data.visa_exp);
    const [medReq, setMedReq] = useState(data.med_requested);
    const [medSched, setMedSched] = useState(data.med_scheduled);
    const [medExp, setMedExp] = useState(data.med_exp);
    const [dentSched, setDentSched] = useState(data.dent_scheduled);
    const [dentExp, setDentExp] = useState(data.dent_exp);
    const [loaExp, setLoaExp] = useState(data.loa_exp);

    function handleSubmit(event) {
        event.preventDefault()
        let reqList = {
            deployment_id: depId,
            first_name: firstName,
            last_name: lastName,
            email: email,
            address: address,
            phone_number: phoneNumber,
            cac_exp: cacExp,
            pass_num: passNum,
            pass_exp: passExp,
            visa_name: visaName,
            visa_id: visaNum,
            visa_exp: visaExp,
            med_requested: medReq,
            med_scheduled: medSched,
            med_exp: medExp,
            dent_scheduled: dentSched,
            dent_exp: dentExp,
            loa_exp: loaExp
        };
        putDeployer(reqList);
    }

    async function putDeployer(reqList){
        let response = await axios.put(`http://127.0.0.1:8000/api/deployers/${data.id}/`, reqList);
        if(response.status === 201){
            window.location.reload(false);
        }
      }

    return ( 
        <Form className="border p-1 bg-primary border-primary col-md-12 rounded-3" onSubmit={handleSubmit}>
                <h1 className="text-white">Personal information</h1>
                <InputGroup className="bg-primary text-white">
                    <InputGroup.Text>First and Last Name</InputGroup.Text>
                    <FormControl aria-label="First name" placeholder={data.first_name} disabled/>
                    <FormControl aria-label="Last name" placeholder={data.last_name} disabled/>
                </InputGroup>
                <Form.Group className="bg-primary text-white" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder={data.email} onChange={(event) => setEmail(event.target.value)}/>
                </Form.Group>
                <Form.Group className="bg-primary text-white" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder={data.address} onChange={(event) => setAddress(event.target.value)}/>
                </Form.Group>
                <Form.Group className="bg-primary text-white" >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder={data.phone_number} onChange={(event) => setPhoneNumber(event.target.value)}/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" >
                    <Form.Label>CAC Expiration (YYYY-MM-DD)</Form.Label>
                    <Form.Control placeholder={data.cac_exp} onChange={(event) => setCacExp(event.target.value)}/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" >
                    <Form.Label>Passport Number</Form.Label>
                    <Form.Control placeholder={data.pass_num} onChange={(event) => setPassNum(event.target.value)}/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" >
                    <Form.Label>Passport Expiration  (YYYY-MM-DD)</Form.Label>
                    <Form.Control placeholder={data.pass_exp} onChange={(event) => setPassExp(event.target.value)}/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" >
                    <Form.Label>Visa Country of Origin</Form.Label>
                    <Form.Control placeholder={data.visa_name} onChange={(event) => setVisaName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" >
                    <Form.Label>Visa Number</Form.Label>
                    <Form.Control placeholder={data.visa_id} onChange={(event) => setVisaNum(event.target.value)}/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" >
                    <Form.Label>Visa Expiration  (YYYY-MM-DD)</Form.Label>
                    <Form.Control placeholder={data.visa_exp} onChange={(event) => setVisaExp(event.target.value)}/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" >
                    <Form.Label>CBTs   </Form.Label>
                    <input type="file" disabled/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" >
                    <Form.Label>Medical Requested On (YYYY-MM-DD)</Form.Label>
                    <Form.Control  placeholder={data.med_requested} onChange={(event) => setMedReq(event.target.value)}/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" >
                    <Form.Label>Medical Scheduled for  (YYYY-MM-DD)</Form.Label>
                    <Form.Control  placeholder={data.med_scheduled} onChange={(event) => setMedSched(event.target.value)}/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" >
                    <Form.Label>Medical Expires on  (YYYY-MM-DD)</Form.Label>
                    <Form.Control  placeholder={data.med_exp} onChange={(event) => setMedExp(event.target.value)}/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" >
                    <Form.Label>Dental Scheduled for  (YYYY-MM-DD)</Form.Label>
                    <Form.Control  placeholder={data.dent_scheduled} onChange={(event) => setDentSched(event.target.value)}/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white" >
                    <Form.Label>Dental Expires on  (YYYY-MM-DD)</Form.Label>
                    <Form.Control  placeholder={data.dent_exp} onChange={(event) => setDentExp(event.target.value)}/>
                </Form.Group>
                <Form.Group className="  p-1 bg-primary text-white">
                    <Form.Label>LOA Expires on (YYYY-MM-DD)</Form.Label>
                    <Form.Control  placeholder={data.loa_exp} onChange={(event) => setLoaExp(event.target.value)}/>
                </Form.Group>
                <Button className="btn bg-primary col-md-5 align-self-center text-white border-white" type="submit" onClick={handleSubmit}>Submit</Button>

        </Form>
     );
    }
 
    export default PIDisplay;