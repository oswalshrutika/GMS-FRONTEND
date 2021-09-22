import { useState } from 'react';
import { emailurl, url } from '../common/constants';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom'
import web1 from './gifs/basket.gif'
import { validCompanyEmail, validCompanyName, validcompanyPhone, validGstin, validPassword } from '../common/Regex';


const SellerSignUp = () => {

  const [sellerId, setSellerId] = useState(0)
  const [companyName, setCompanyName] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [password, setPassword] = useState('')
  const [companyPhone, setCompanyPhone] = useState('')
  const [companyAddress, setCompanyAddress] = useState('')
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
  const [companyAddressErr, setCompanyAddressErr] = useState(false)
  const [companyAddressErrMsg, setCompanyAddressErrMsg] = useState('')
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

    setCompanyNameErr(false)
    setCompanyEmailErr(false)
    setPasswordErr(false);
    setCompanyPhoneErr(false);
    setCompanyAddressErr(false)
    setGstinErr(false);

    if (companyName.length == 0) {
      setCompanyNameErr(true)
      setCompanyNameErrMsg("Enter Company Name")
    }

    else if (!validCompanyName.test(companyName)) {
      setCompanyNameErr(true)
      setCompanyNameErrMsg("Enter valid Company Name")
    }

    else if (companyEmail.length == 0) {
      setCompanyEmailErr(true)
      setCompanyEmailErrMsg("Enter Company Email")
    }
    else if (!validCompanyEmail.test(companyEmail)) {
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

    else if (gstin.length == 0) {
      setGstinErr(true);
      setGstinErrMsg(" Enter GSTIN Number")
    }

    // else if (!validGstin.test(gstin)) {
    //   setGstinErr(true);
    //   setGstinErrMsg(" Enter valid GSTIN Number")
    // }

    else {
      const body = { sellerId: sellerId, companyName: companyName, companyEmail: companyEmail, password: password, companyPhone: companyPhone, companyAddress: companyAddress, gstin: gstin }

      console.log("body :" + body)

      axios.post(url + `/seller/signup`, body).then(response => {
        const result = response.data;
        if (result) {
          //alert('succcess')
          console.log(result)
          history.push('/sellerSignin')
        }
        else {
          alert('error')
        }
      })


      axios.post(emailurl + `/send-email/${companyEmail}`).then(response => {
        const result = response.data;
        if (result) {
          alert('email sent successfully ! ')
          console.log(result)
        }
        else {
          alert('error')
        }
      })
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





    return (
      <div>
  
        < form className="w-full max-w-lg" >
          <div className="flex flex-wrap -mx-3 mb-6">
          <input
              onChange={(e) => {
                setSellerId(e.target.value)
              }}
              className="form-control" type="hidden" required style={{ width: "400px" }} />


            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Company Name
              </label>
          
              <input
              onChange={(e) => {
                setCompanyName(e.target.value)
              }}className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              {companyNameErr && <p className="text-red-500 text-xs italic">{companyNameErrMsg}</p>}
            </div>
  
  
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
               Company Email
              </label>
              <input
              onChange={(e) => {
                setCompanyEmail(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="google@gmail.com" />
              {companyEmailErr && <p className="text-red-500 text-xs italic">{companyEmailErrMsg}</p>}
            </div>
          </div>


          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Password
              </label>
              <input onChange={(e) => {
                setPassword(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
              <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              {passwordErr && <p className="ext-red-500 text-xs italic">{passwordErrMsg}</p>}
            </div>
          </div>


          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
               Company Phone
              </label>
              <input
              onChange={(e) => {
                setCompanyPhone(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="+910000000" />
              {companyPhoneErr && <p className="text-danger text-xs italic">{companyPhoneErrMsg}</p>}
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
               company Address
              </label>
              <input onChange={(e) => {
               setCompanyAddress(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="eg: Pune" />
              {companyAddressErr && <p className="text-danger text-xs italic">{companyAddressErrMsg}</p>}
              
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                GSTIN
              </label>
              <input onChange={(e) => {
               setGstin(e.target.value)
              }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="415501" />
              {gstinErr && <p className="text-danger text-xs italic">{gstinErrMsg}</p>}
            </div>
  
            {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Role
              </label>
              <div class="relative">
                <select onChange={(e) => {
                  setRole(e.target.value)
                }} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option value="CUSTOMER">CUSTOMER</option>
                  <option value="SELLER">SELLER</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
              {roleErr && <p classNameName="text-danger">{roleErrMsg}</p>}
            </div> */}
          </div>
        </form>
  
        
        <button onClick={sellerSignUp} className="btn btn-success">Signup</button>
      </div >
  
    )
  }


export default SellerSignUp

























// import { useState } from 'react';
// import { emailurl, url } from '../common/constants';
// import axios from 'axios';
// import { useHistory, useLocation } from 'react-router-dom'
// import web1 from './gifs/basket.gif'
// import { validCompanyEmail, validCompanyName, validcompanyPhone, validGstin, validPassword } from '../common/Regex';


// const SellerSignUp = () => {

//   const [sellerId, setSellerId] = useState(0)
//   const [companyName, setCompanyName] = useState('')
//   const [companyEmail, setCompanyEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [companyPhone, setCompanyPhone] = useState('')
//   const [companyAddress, setCompanyAddress] = useState('')
//   const [gstin, setGstin] = useState('')
//   // const [role, setRole] = useState('')


//   const [companyNameErr, setCompanyNameErr] = useState(false)
//   const [companyNameErrMsg, setCompanyNameErrMsg] = useState('')
//   const [companyEmailErr, setCompanyEmailErr] = useState(false)
//   const [companyEmailErrMsg, setCompanyEmailErrMsg] = useState('')
//   const [passwordErr, setPasswordErr] = useState(false)
//   const [passwordErrMsg, setPasswordErrMsg] = useState('')
//   const [companyPhoneErr, setCompanyPhoneErr] = useState(false)
//   const [companyPhoneErrMsg, setCompanyPhoneErrMsg] = useState('')
//   const [companyAddressErr, setCompanyAddressErr] = useState(false)
//   const [companyAddressErrMsg, setCompanyAddressErrMsg] = useState('')
//   const [gstinErr, setGstinErr] = useState(false)
//   const [gstinErrMsg, setGstinErrMsg] = useState('')




//   const history = useHistory()

//   // function handleSubmit(e) {
//   //   e.preventDefault();
//   //   //console.log(email, password);
//   //   // clearing the values
//   //   // setEmail("");
//   //   // setPassword("");

//   //   console.log(this.email.value);

//   //   // clearing the values
//   //   this.email.value = "";

//   // };



//   const sellerSignUp = (() => {

//     if (companyName.length == 0) {
//       setCompanyNameErr(true)
//       setCompanyNameErrMsg("Enter Company Name")
//     }

//     else if (!validCompanyName.test(companyName)) {
//       setCompanyNameErr(true)
//       setCompanyNameErrMsg("Enter valid Company Name")
//     }

//     else if (companyEmail.length == 0) {
//       setCompanyEmailErr(true)
//       setCompanyEmailErrMsg("Enter Company Email")
//     }
//     else if (!validCompanyEmail.test(companyEmail)) {
//       setCompanyEmailErr(true)
//       setCompanyEmailErrMsg("Enter valid Company Email")
//     }
//     else if (password.length == 0) {
//       setPasswordErr(true);
//       setPasswordErrMsg("enter password")
//     }
//     else if (!validPassword.test(password)) {
//       setPasswordErr(true);
//       setPasswordErrMsg("Your password is not strong enough")
//     }
//     else if (companyPhone.length == 0) {
//       setCompanyPhoneErr(true);
//       setCompanyPhoneErrMsg("Enter phone number")
//     }
//     else if (!validcompanyPhone.test(companyPhone)) {
//       setCompanyPhoneErr(true);
//       setCompanyPhoneErrMsg("Enter valid phone number")
//     }

//     else if (companyAddress.length == 0) {
//       setCompanyAddressErr(true)
//       setCompanyAddressErrMsg("Enter Address")
//     }

//     else if (gstin.length == 0) {
//       setGstinErr(true);
//       setGstinErrMsg(" Enter GSTIN Number")
//     }

//     else if (!validGstin.test(gstin)) {
//       setGstinErr(true);
//       setGstinErrMsg(" Enter valid GSTIN Number")
//     }

//     else {
//       const body = { sellerId: sellerId, companyName: companyName, companyEmail: companyEmail, password: password, companyPhone: companyPhone, companyAddress: companyAddress, gstin: gstin }

//       console.log("body :" + body)

//       axios.post(url + `/seller/signup`, body).then(response => {
//         const result = response.data;
//         if (result) {
//           alert('succcess')
//           console.log(result)
//           //history.push('/sellerSignin')
//         }
//         else {
//           alert('error')
//         }
//       })


//       axios.post(emailurl + `/send-email/${companyEmail}`).then(response => {
//         const result = response.data;
//         if (result) {
//           alert('email sent successfully ! ')
//           console.log(result)
//         }
//         else {
//           alert('error')
//         }
//       })
//     }

//   })
//     //  axios.get(emailurl +`/send-email`).then(response =>{
//     //     const result=response.data;
//     //     if(result){
//     //       alert('succcess')
//     //       console.log(result)
//     //     }
//     //     else {
//     //       alert('error')
//     //     }
//     //   })





  //   return (

  //     <div div className="container-fluid">
  //       <div className="row">
  //         <div className="customer_border col-lg-5 col-sm-12 border-end border-4 p-5">
  //           <h1>SignUp</h1>
  //           <input
  //             onChange={(e) => {
  //               setSellerId(e.target.value)
  //             }}
  //             className="form-control" type="hidden" required style={{ width: "400px" }} />

  //           Company Name: <input
  //             onChange={(e) => {
  //               setCompanyName(e.target.value)
  //             }}
  //             className="form-control" type="text" required style={{ width: "400px" }} />

  //           Comapny Email: <input
  //             onChange={(e) => {
  //               setCompanyEmail(e.target.value)
  //             }}
  //             className="form-control" type="text" required style={{ width: "400px" }} />

  //           password: <input
  //             onChange={(e) => {
  //               setPassword(e.target.value)
  //             }}
  //             className="form-control" type="password" required style={{ width: "400px" }} />

  //           Phone Number: <input
  //             onChange={(e) => {
  //               setCompanyPhone(e.target.value)
  //             }}
  //             className="form-control" type="text" required style={{ width: "400px" }} />

  //           company Address: <input
  //             onChange={(e) => {
  //               setCompanyAddress(e.target.value)
  //             }}
  //             className="form-control" type="text" required style={{ width: "400px" }} />

  //           GSTIN: <input
  //             onChange={(e) => {
  //               setGstin(e.target.value)
  //             }}
  //             className="form-control" type="text" required style={{ width: "400px" }} />

  //           <br />


  //           <br />

  //           <br />
  //           <button onClick={sellerSignUp} className="btn btn-success">Signup</button>

           
  //         </div>
  //         <div className="col-lg-7" >
  //           <img src={web1} alt="web" style={{ paddingLeft: "200px" }} />
  //           <br />
  //           <blockquote className="blockquote mb-0" style={{ paddingLeft: "100px" }}>
  //             <p className="text-center" >
  //               {' '}
  //               <h2><i> Whoever said money can't buy happiness simply didn't know where to go shopping.</i></h2> {' '}
  //             </p>

  //           </blockquote>
  //         </div>



  //       </div>
  //     </div>


  //   )
  // }


// export default SellerSignUp