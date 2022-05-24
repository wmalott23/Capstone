import React, { useState } from 'react';

const DeploymentCD = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [cacExp, setCacExp] = useState('')
    const [passNumber, setPassNumber] = useState('')
    const [passExp, setPassExp] = useState('')
    const [visaCountry, setVisaCountry] = useState('')
    const [visaId, setVisaId] = useState('')
    const [visaExp, setVisaExp] = useState('')
    const [cbtListId, setCbtListId] = useState(0)
    const [medReq, setMedReq] = useState('')
    const [medSched, setMedSched] = useState('')
    const [medExp, setMedExp] = useState('')
    const [dentSched, setDentSched] = useState('')
    const [dentExp, setDentExp] = useState('')
    const [loaEnd, setLoaEnd] = useState('')

    const handleSubmit = async () => {
        const BASE_URL = "http://127.0.0.1:8000/api";
        try {
          let finalData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            address: address,
            phone_number: phoneNumber,
            cac_exp: cacExp,
            pass_num: passNumber,
            pass_exp: passExp,
            visa_name: visaCountry,
            visa_id: visaId,
            visa_exp: visaExp,
            cbts: cbtListId,
            med_requested: medReq,
            med_scheduled: medSched,
            med_exp: medExp,
            dent_scheduled: dentSched,
            dent_exp: dentExp,
            loa_exp: loaEnd
          };
          let response = await axios.post(`${BASE_URL}/deployers/reg/`, finalData);
          if (response.status === 201) {
            console.log("Successful created Deployer!");
            setIsServerError(false);
          }
        } catch (error) {
          console.log(error.response.data);
        }
      };

    return ( 
        <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          First name:{" "}
          <input
            type="text"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Address:{" "}
          <input
            type="text"
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
        <label>
          Phone Number:{" "}
          <input
            type="text"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
        <label>
          CAC Expiration:{" "}
          <input
            type="text"
            onChange={(event) => setCacExp(event.target.value)}
          />
        </label>
        <label>
          Passport Number:{" "}
          <input
            type="text"
            onChange={(event) => setPassNumber(event.target.value)}
          />
        </label>
        <label>
          Passport Expiration:{" "}
          <input
            type="text"
            onChange={(event) => setPassExp(event.target.value)}
          />
        </label>
        <label>
          Visa Country:{" "}
          <input
            type="text"
            onChange={(event) => setVisaCountry(event.target.value)}
          />
        </label>
        <label>
          visa Id:{" "}
          <input
            type="text"
            onChange={(event) => setVisaId(event.target.value)}
          />
        </label>
        <label>
          Visa Expiration:{" "}
          <input
            type="text"
            onChange={(event) => setVisaExp(event.target.value)}
          />
        </label>
        <label>
          Cbt List Id:{" "}
          <input
            type="int"
            onChange={(event) => setCbtListId(event.target.value)}
          />
        </label>
        <label>
          Medical Requested:{" "}
          <input
            type="text"
            onChange={(event) => setMedReq(event.target.value)}
          />
        </label>
        <label>
          Medical Scheduled:{" "}
          <input
            type="text"
            onChange={(event) => setMedSched(event.target.value)}
          />
        </label>
        <label>
          Medical Expiration:{" "}
          <input
            type="text"
            onChange={(event) => setMedExp(event.target.value)}
          />
        </label>
        <label>
          Dental Scheduled:{" "}
          <input
            type="text"
            onChange={(event) => setDentSched(event.target.value)}
          />
        </label>
        <label>
          Dental Expiration:{" "}
          <input
            type="text"
            onChange={(event) => setDentExp(event.target.value)}
          />
        </label>
        <label>
          Loa Expiration:{" "}
          <input
            type="text"
            onChange={(event) => setLoaEnd(event.target.value)}
          />
        </label>
        <button>Create Deployer!</button>
      </form>
    </div>
     );
}
 
export default DeploymentCD;