import React from 'react'


import { Row, Col } from 'reactstrap'


import SellerNavbar from './SellerNavbar'
import SellerMenuBar from './SellerMenuBar'

class SellerDashboard extends React.Component {

  render() {
    return (


      <div className="grid grid-cols-4">
        <div >
          <SellerMenuBar />
        </div>
        <div className="col-span-3 p-3">

          <h1>Welcome <h1 className="text-indigo-600">{JSON.parse(sessionStorage.getItem("seller")).companyName}</h1></h1>

        </div>
      </div>

    )
  }
}

export default SellerDashboard





















// import SellerNavbar from "./SellerNavbar"



// const SellerDashboard = () => {


//     return (
//         <div>
//             <div>
//                <SellerNavbar/> 
//             </div>


//             <div>
//                 <h2>Seller Pannel</h2>
//                 <a href="/addCategory">Add New Category</a>

//                 <br>
//                 </br>

//                 <a href="/product">Add New Product</a>
//                 <br></br>

//                 <a href="/allProduct">View all Products</a>
//             </div>
//         </div>
//     )
// }

// export default SellerDashboard