import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../actions/cartActions'
import { removeFromCartAction } from '../actions/cartActions'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

import toast, { Toaster } from 'react-hot-toast';


const Category = () => {
  const history = useHistory()
  const [category, setCategory] = useState([])
  console.log("🚀 ~ file: Category.js ~ line 16 ~ Category ~ category", category)
  const [products, setProducts] = useState([])

  useEffect(() => {
    getCategory()
  }, [])

  const [count, setCount] = useState(0);

  const location = useLocation()
  const cat = location.state.cat;

  const getCategory = () => {
    axios.post(url + `/category/${cat.categoryName}`).then((response) => {
      const result = response.data
      setCategory(result)
    })
  }

  const dispatch = useDispatch()

  const addToCart = (product) => {
    dispatch(addToCartAction(product))
    toast.success(`${product.productName} added to cart `)

    setCount(count + 1)
  }

  const removeFromCart = (product) => {
    dispatch(removeFromCartAction(product))
    toast.error(`${product.productName} removed from cart `)

  }

  const productCounter = () => {

  }
  return (
    <div>
      <a href="/home" className="text-indigo-600 font-medium hover:text-indigo-500 p-3">Back To Home <span aria-hidden="true"> &rarr;</span></a>

      < div className="bg-white" >
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{category}</h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cat.productItem.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={url + '/' + product.productImage}
                    alt="product_img"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">

                  <p className="text-sm font-medium text-gray-900">Price: {product.productPrice} ₹</p>
                </div>
                {sessionStorage.getItem("isLoggedin") == 'true' &&
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      removeFromCart(product)
                    }}>
                    -
                  </button>}

                {sessionStorage.getItem("isLoggedin") == 'true' &&
                  <button
                    className="btn btn-success btn-sm m-2 p-2"
                    onClick={() => {
                      addToCart(product)

                    }}>
                    Add to cart
                  </button>}

                {sessionStorage.getItem("isLoggedin") == 'true' &&
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      addToCart(product)

                    }}>
                    +
                  </button>}
              </div>
            ))}
          </div>
        </div>
      </div >


    </div>
  )

}

export default Category
















{/* <div className="itemcontainer" >
        {
          console.log(category)
        }


        <div className="outerDiv itemcontainer ">
          {
            cat.productItem.map((product) => {
              return (
                <div className="list-inline-item ">
                  <div className="cards">
                    <div className="card2 border border-2">

                      <img src={url + '/' + product.productImage} alt="" className="card-img-top m-auto" /><br></br>

                      
                      <div className="card-body" style={{ textAlign: "center" }}>
                        <h4 style={{ color: "black", fontStyle: "oblique" }}> {product.productName}</h4>
                        <h5 style={{ color: "black", fontStyle: "oblique" }}>price  ₹{product.productPrice}</h5>

                      </div>
                      <br />

                    </div>
                  </div>
                  {sessionStorage.getItem("isLoggedin") == 'true' &&
      console.log("🚀 ~ file: Category.js ~ line 144 ~ axios.post ~ result", result)
      console.log("🚀 ~ file: Category.js ~ line 144 ~ axios.post ~ result", result)
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        removeFromCart(product)
                      }}>
                      -
                    </button>}

                  {sessionStorage.getItem("isLoggedin") == 'true' &&
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => {
                        addToCart(product)
                      }}>
                      Add To Cart
                    </button>}

                  {sessionStorage.getItem("isLoggedin") == 'true' &&
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        addToCart(product)
                      }}>
                      +
                    </button>}

                </div>
              )
            })
          }


        </div >



      </div>   */}




// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { url } from '../common/constants'
// import {useHistory,useLocation } from 'react-router-dom'



// const Category = () => {
//     const history = useHistory()
//     const [category, setCategory] = useState([])
//     // const [products, setProducts] = useState([])

//     useEffect(() => {
//         getCategory()
//     }, [])


//     const location = useLocation()
//     const cat = location.state.cat;

//     const getCategory = () => {
//         axios.post(url + `/ category / ${ cat.categoryName }`).then((response) => {
//             const result = response.data
//             setCategory(result)
//         })
//     }

//     return (
//         <div className="image">
//             {
//                 console.log(category)
//             }

//                             <div>
//                                     {
//                                         cat.productItem.map((product)=>{
//                                             return(
//                                                 <div className="list-inline-item ">

//                                                     <div className="image">

//                                                      <img src={url+'/'+product.productImage}alt="" class="rounded"/><br></br>
//                                                      <h4> {product.productName}</h4>
//                                                      <h5>price = {product.productPrice}</h5>
//                                                       </div>
//                                                 </div>
//                                             )
//                                         })
//                                     }


//                          </div >   


//         </div>
//     )

// }

// export default Category