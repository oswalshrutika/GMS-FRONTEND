import { useState } from 'react';
import { url } from '../common/constants';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom'
import web1 from './gifs/basket2.gif'
import Navbar from '../components/NavBar';
import { validEmail, validPassword, validPhone, validPincode } from '../common/Regex'



const SignUp = () => {

  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [address, setAddress] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [role, setRole] = useState('')
  const history = useHistory()
  const [invalidErr, setInvalidErr] = useState(false)
  const [invalidErrMsg, setInvalidErrMsg] = useState("")

  const [addressErr, setAddressErr] = useState(false)
  const [addressErrMsg, setAddressErrMsg] = useState('')
  const [roleErr, setRoleErr] = useState(false)
  const [roleErrMsg, setRoleErrMsg] = useState('')
  const [nameErr, setNameErr] = useState(false);
  const [nameErrMsg, setNameErrMsg] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [pwdError, setPwdError] = useState(false);
  const [pwdErrorMsg, setPwdErrorMsg] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [phoneErrMsg, setPhoneErrMsg] = useState("");
  const [pinCodeErr, setPinCodeErr] = useState(false);
  const [pinCodeErrMsg, setPinCodeErrMsg] = useState("");


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



  const signup = (() => {
    setNameErr(false)
    setEmailErr(false)
    setPwdError(false)
    setPhoneErr(false)
    setPinCodeErr(false)
    setRoleErr(false)
    setAddressErr(false)

    if (name.length == 0) {
      setNameErr(true)
      setNameErrMsg("please enter name")
    }
    else if (email.length == 0) {
      setEmailErr(true);
      setEmailErrMsg("please enter email")
    }
    else if (!validEmail.test(email)) {
      setEmailErr(true);
      setEmailErrMsg("please enter a valid email")
    }
    else if (password.length == 0) {
      setPwdError(true);
      setPwdErrorMsg("please enter password")
    }
    else if (!validPassword.test(password)) {
      setPwdError(true);
      setPwdErrorMsg("Your password is not strong enough")
    }
    else if (phoneNo.length == 0) {
      setPhoneErr(true);
      setPhoneErrMsg("please enter phone number")
    }
    else if (!validPhone.test(phoneNo)) {
      setPhoneErr(true);
      setPhoneErrMsg("please enter a valid phone number")
    }
    else if (address.length == 0) {
      setAddressErr(true)
      setAddressErrMsg("Please Enter Address")
    }
    else if (pinCode.length == 0) {
      setPinCodeErr(true);
      setPinCodeErrMsg("please enter pincode")
    }

    else if (!validPincode.test(pinCode)) {
      setPinCodeErr(true);
      setPinCodeErrMsg("please enter a valid pincode")
    }
    else if (role.length == 0) {
      setRoleErr(true)
      setRoleErrMsg("please select a role")
    }
    else {
      console.log("in signup form ß")
      const body = { id: id, name: name, email: email, password: password, phoneNo: phoneNo, address: address, pinCode: pinCode, role: role }
      axios.post(url + `/admin/register`, body).then(response => {
        const result = response.data;
        if (result) {
          alert('succcess')
          history.push('/home')
        }
        else {
          alert('error')
        }
        // }).catch(err =>{
        //   setInvalidErr(true)
        //   setInvalidErrMsg("entered input is not a valid input")
      })
    }



  })



  return (
    <div>

      < form className="w-full max-w-lg" >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Name
            </label>
            <input
              onChange={(e) => {
                setId(e.target.value)
              }}
              classNameName="form-control" type="hidden" required style={{ width: "400px" }} />

            <input onChange={(e) => {
              setName(e.target.value)
            }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            {nameErr && <p className="text-red-500 text-xs italic">{nameErrMsg}</p>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
              Email
            </label>
            <input onChange={(e) => {
              setEmail(e.target.value)
            }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            {emailErr && <p classNameName="text-red-500 text-xs italic">{emailErrMsg}</p>}
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
            {pwdError && <p classNameName="ext-red-500 text-xs italic">{pwdErrorMsg}</p>}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              Phone
            </label>
            <input onChange={(e) => {
              setPhoneNo(e.target.value)
            }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="+910000000" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Address
            </label>
            <input onChange={(e) => {
              setAddress(e.target.value)
            }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="eg: Pune" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Pincode
            </label>
            <input onChange={(e) => {
              setPinCode(e.target.value)
            }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="90210" />
            {addressErr && <p classNameName="text-danger">{addressErrMsg}</p>}
          </div>

          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
          </div>
        </div>
      </form>

      {invalidErr && <p classNameName="text-danger">{invalidErrMsg}</p>}
      <button onClick={signup} classNameName="btn btn-success">Signup</button>
    </div >

  )
}


export default SignUp











{/* 

<div div classNameName="container-fluid">
        <div classNameName="row">
          <div classNameName="customer_border col-lg-5 col-sm-12 border-end border-4 p-5">
            <div className="card">
              <div className="boxsignup">
                <h1>SignUp</h1>
                <input
                  onChange={(e) => {
                    setId(e.target.value)
                  }}
                  classNameName="form-control" type="hidden" required style={{ width: "400px" }} />

                Name: <input
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  classNameName="form-control" type="text" required style={{ width: "400px" }} />
                {nameErr && <p classNameName="text-danger">{nameErrMsg}</p>}


                Email: <input
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  classNameName="form-control" type="text" required style={{ width: "400px" }} />
                {emailErr && <p classNameName="text-danger">{emailErrMsg}</p>}

                password: <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  classNameName="form-control" type="text" required style={{ width: "400px" }} />
                {pwdError && <p classNameName="text-danger">{pwdErrorMsg}</p>}

                Phone Number: <input
                  onChange={(e) => {
                    setPhoneNo(e.target.value)
                  }}
                  classNameName="form-control" type="text" required style={{ width: "400px" }} />
                {phoneErr && <p classNameName="text-danger">{phoneErrMsg}</p>}



                PinCode: <input
                  onChange={(e) => {
                    setPinCode(e.target.value)
                  }}
                  classNameName="form-control" type="text" required style={{ width: "400px" }} />
                {pinCodeErr && <p classNameName="text-danger">{pinCodeErrMsg}</p>}



                Address: <input
                  onChange={(e) => {
                    setAddress(e.target.value)
                  }}
                  classNameName="form-control" type="text" required style={{ width: "400px" }} />
                {addressErr && <p classNameName="text-danger">{addressErrMsg}</p>}

                <br />

                Role: <input
                  onChange={(e) => {
                    setRole(e.target.value)
                  }}
                  classNameName="form-control" type="hidden" required style={{ width: "400px" }} />

                <select

                  onChange={(e) => {
                    setRole(e.target.value)
                  }}
                >
                  <option value="CUSTOMER">CUSTOMER</option>
                  <option value="SELLER">SELLER</option>
                </select>
                {roleErr && <p classNameName="text-danger">{roleErrMsg}</p>}

                <br />

                <br />
                {invalidErr && <p classNameName="text-danger">{invalidErrMsg}</p>}

                <button onClick={signup} classNameName="btn btn-success">Signup</button>

              </div> </div> </div>
          <div classNameName="col-lg-7" >
            <img src={web1} alt="web" style={{ paddingLeft: "200px" }} />
            <br />
            <blockquote classNameName="blockquote mb-0" style={{ paddingLeft: "100px" }}>
              <p classNameName="text-center" >
                {' '}
                <h2><i> Whoever said money can't buy happiness simply didn't know where to go shopping.</i></h2> {' '}
              </p>

            </blockquote>
          </div>



        </div>
      </div> */}