import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useHistory, useLocation } from 'react-router-dom'
import SellerMenuBar from './SellerMenuBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SellerNavbar from './SellerNavbar'



const AllProducts = () => {
    const [category, setCategory] = useState([])
    const [seller, setSeller] = useState(JSON.parse(sessionStorage.getItem('seller')))

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = () => {
        axios.get(url + '/category/').then((response) => {
            const result = response.data
            setCategory(result)

            console.log(result)


        })
    }



    return (


        <div className="grid grid-cols-4">
            <div >
                <SellerMenuBar />
            </div>
            <div className="col-span-3 p-3">
                <h2 className="text-indigo-600">All Products</h2>
                <table

                    className="min-w-full divide-y divide-gray-200 "
                >
                    <thead className="bg-gray-100">
                        <tr>

                            <th className="text-gray-500 uppercase">
                                Product Id
                            </th>
                            <th className="text-gray-500 uppercase">
                                Product Details
                            </th>

                            <th className="text-gray-500 uppercase">
                                Quantity Per Unit
                            </th>

                            <th className="text-gray-500 uppercase">
                                Product Price
                            </th>
                            <th className="text-gray-500 uppercase">
                                Product Discount
                            </th>
                            <th className="text-gray-500 uppercase">
                                Product Rating
                            </th>
                            <th className="text-gray-500 uppercase">
                                Category Id
                            </th>
                            <th className="text-gray-500 uppercase">
                                Seller Id
                            </th>

                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            category.map((cat) => {
                                return (

                                    cat.productItem.map((product) => {
                                        return (




                                            product.supplierId == seller.sellerId && (
                                                <tr key={product.productId}>
                                                    <td >{product.productId}</td>

                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img className="h-10 w-10 rounded-full" src={url + '/' + product.productImage} alt="" />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">{product.productName}</div>
                                                            </div>
                                                        </div>
                                                    </td>


                                                    <td >{product.quantityPerUnit}</td>
                                                    <td >{product.productPrice}</td>
                                                    <td >{product.productDiscount}</td>
                                                    <td >{product.productRating}</td>
                                                    <td >{cat.categoryId}</td>
                                                    <td >{product.supplierId}</td>
                                                </tr>
                                            )

                                        )
                                    }))
                            }
                            )}

                    </tbody>
                </table>

                <a href="/sellerDashboard" className="text-indigo-600 font-medium hover:text-indigo-500 p-3">Back To DashBoard <span aria-hidden="true"> &rarr;</span></a>

            </div>
        </div >



    )




}



export default AllProducts









