

import { Button } from '@progress/kendo-react-buttons';//pdf
import { PDFExport } from '@progress/kendo-react-pdf';//pdf

import { useDispatch, useSelector } from 'react-redux'
import { url } from '../common/constants'
import { useState, useEffect } from 'react'
// import { useCart } from "react-use-cart";
import { useHistory } from 'react-router-dom'
import { useRef } from 'react';
import {paymentROZARPAY} from '../common/constants'



const Order = () => {

  const cartItems = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()
  const [cartTotal, setCartTotal] = useState(0);
  const history = useHistory()
  //pdf
  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);



  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  }



  const payment = () => {
    sessionStorage.setItem("payment", JSON.stringify({ cartTotal }))
    history.push('/payment')
    //history.push(`${paymentROZARPAY}`);
    //window.location =paymentROZARPAY

  }



  useEffect(() => {
    total();
  }, [cartItems]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cartItems.length - 1; i++) {
      totalVal += cartItems[i].productPrice;
    }
    setCartTotal(totalVal);
    console.log(totalVal)
  };


  return (
    <div className="flex flex-col mb-8">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <PDFExport ref={pdfExportComponent} paperSize="Tabloid">
         <div ref={contentArea}>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>


                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cartItems.map((product) => (
                  <tr key={product.productId}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={url + '/' + product.productImage} alt="product_img" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{product.productName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.productPrice}</div>
                    </td>

                 
                  </tr>
                ))}
                <tr className=" bg-gray-100">

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                      </div>
                      <div className="ml-4">
                        <div className="text-xl font-medium text-gray-900">Total : </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-xl text-black-900"> {cartTotal} $</div>
                  </td>

                  <td>
                    <button className="btn btn-success btn-sm" onClick={payment}>
                      Proceed to payment
                    </button>

                    <Button  className ="bg-blue-300 btn-sm m-2 "onClick={handleExportWithComponent}>Generate Invoice </Button>
                  </td>

                </tr>
              </tbody>
            </table>
            </div>
         </PDFExport>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Order
