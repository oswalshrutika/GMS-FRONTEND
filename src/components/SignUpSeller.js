import { useState } from 'react';
import { emailurl, url } from '../common/constants';
import axios from 'axios';
import {useHistory,useLocation } from 'react-router-dom'
import web1 from './gifs/basket.gif'
import { validCompanyEmail, validCompanyName, validcompanyPhone, validPassword } from '../common/Regex';


const SellerSignUp = () => {

  const [sellerId ,setSellerId] = useState(0)
  const [companyName, setCompanyName] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [password, setPassword] = useState('')
  const [companyPhone, setCompanyPhone] = useState('')
  const [companyAddress, setCompanyAddress]=useState('')
  const [gstin, setGstin] = useState('')
  // const [role, setRole] = useState('')

  
  const [companyNameErr, setCompanyNameErr] = useState(false)
  const [companyNameErrMsg, setCompanyNameErrMsg] = useState('')
  const [companyEmailErr, setCompanyEmailErr] = useState(false)
  const [companyEmailErrMsg, setCompanyEmailErrMsg] = useState('')
  const [passwordErr, setPasswordErr] = useState(false)
  const [passwordErrMsg, setPasswordErrMsg] = useState('')
  const [companyPhoneErr, setCompanyPhoneErr] = useState(false)
  const [companyPhoneErrMsg, setCompanyPhoneErrMsg] = useState('')
  const [companyAddressErr, setCompanyAddressErr]=useState(false)
  const [companyAddressErrMsg, setCompanyAddressErrMsg]=useState('')
  const [gstinErr, setGstinErr] = useState(false)
  const [gstinErrMsg, setGstinErrMsg] = useState('')




  const history = useHistory()

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   //console.log(email, password);
  //   // clearing the values
  //   // setEmail("");
  //   // setPassword("");

  //   console.log(this.email.value);

  //   // clearing the values
  //   this.email.value = "";

  // };



  const sellerSignUp = (() => {

    if(companyName.length==0){
      setCompanyNameErr(true)
      setCompanyNameErrMsg("Enter Company Name")
    }

    else if(!validCompanyName.test(companyName)){
      setCompanyNameErr(true)
      setCompanyNameErrMsg("Enter valid Company Name")
    }

    else if(companyEmail.length==0){
      setCompanyEmailErr(true)
      setCompanyEmailErrMsg("Enter Company Email")
    }
    else if(!validCompanyEmail.test(companyEmail)){
      setCompanyEmailErr(true)
      setCompanyEmailErrMsg("Enter valid Company Email")
    }
    else if (password.length == 0) {
      setPasswordErr(true);
      setPasswordErrMsg("enter password")
    }
    else if (!validPassword.test(password)) {
      setPasswordErr(true);
      setPasswordErrMsg("Your password is not strong enough")
    }
    else if (companyPhone.length == 0) {
      setCompanyPhoneErr(true);
      setCompanyPhoneErrMsg("Enter phone number")
    }
    else if (!validcompanyPhone.test(companyPhone)) {
      setCompanyPhoneErr(true);
      setCompanyPhoneErrMsg("Enter valid phone number")
    }

    else if (companyAddress.length == 0) {
      setCompanyAddressErr(true)
      setCompanyAddressErrMsg("Enter Address")
    }
    
      const body = { sellerId: sellerId,companyName: companyName, companyEmail:companyEmail, password: password, companyPhone: companyPhone, companyAddress:companyAddress,  gstin:gstin }

    console.log("body :"+ body)

      axios.post(url + `/seller/signup`, body).then(response => {
        const result = response.data;
        if (result){
          alert('succcess')
          console.log(result)
          //history.push('/sellerSignin')
        }
        else {
          alert('error')
        }
      })
    


  




axios.post(emailurl +`/send-email/${companyEmail}` ).then(response =>{
  const result=response.data;
  if(result){
    alert('email sent successfully ! ')
    console.log(result)
  }
  else {
    alert('error')
  }
})

//  axios.get(emailurl +`/send-email`).then(response =>{
//     const result=response.data;
//     if(result){
//       alert('succcess')
//       console.log(result)
//     }
//     else {
//       alert('error')
//     }
//   })

  })



  return (

    <div div className="container-fluid">
      <div className="row">
        <div className="customer_border col-lg-5 col-sm-12 border-end border-4 p-5">
          <h1>SignUp</h1>
           <input
            onChange={(e) => {
              setSellerId(e.target.value)
            }}
            className="form-control" type="hidden" required style={{ width: "400px" }}/>

         Company Name: <input
            onChange={(e) => {
              setCompanyName(e.target.value)
            }}
            className="form-control" type="text" required style={{ width: "400px" }}/>

         Comapny Email: <input
            onChange={(e) => {
              setCompanyEmail(e.target.value)
            }}
            className="form-control" type="text" required style={{ width: "400px" }}/>

          password: <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control" type="password" required style={{ width: "400px" }}/>

          Phone Number: <input
            onChange={(e) => {
              setCompanyPhone(e.target.value)
            }}
            className="form-control" type="text" required style={{ width: "400px" }}/>

          company Address: <input
            onChange={(e) => {
              setCompanyAddress(e.target.value)
            }}
            className="form-control" type="text" required style={{ width: "400px" }}/>

           GSTIN: <input
            onChange={(e) => {
              setGstin(e.target.value)
            }}
            className="form-control" type="text" required style={{ width: "400px" }}/>

           <br/>


          {/* Role: 
          <select

            onChange={(e) => {
              setRole(e.target.value)
            }}
          >
            <option value="CUSTOMER">CUSTOMER</option>
           
            <option value="SELLER">SELLER</option>
          </select> */}

          <br />
          
          <br />
          <button onClick={sellerSignUp} className="btn btn-success">Signup</button>
         
          {/* <button onClick={handleSubmit} className="btn btn-success">RESET</button> 
          <button onClick={resetInputField} className="btn btn-success">RESET</button> */}
        </div>
                      <div className="col-lg-7" >
                        <img src={web1} alt="web" style={{ paddingLeft: "200px" }}/>
                        <br/>
                        <blockquote className="blockquote mb-0" style={{ paddingLeft: "100px" }}>
                            <p className="text-center" >
                                {' '}
                                    <h2><i> Whoever said money can't buy happiness simply didn't know where to go shopping.</i></h2> {' '}
                            </p>
                    
                        </blockquote>
                    </div>
   
 
       
          </div>
        </div>
      
      
  )
}


export default SellerSignUp