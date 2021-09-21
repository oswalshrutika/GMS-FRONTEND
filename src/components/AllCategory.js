import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useHistory, useLocation } from 'react-router-dom'
import SellerMenuBar from './SellerMenuBar'
import SellerNavbar from './SellerNavbar'


const AllCategory = () => {
    const [category, setCategory] = useState([])

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

                <h1 className="text-indigo-600">All Category</h1>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-gray-500 uppercase ">
                                Id
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-m font-large text-gray-500 uppercase tracking-wider"
                            >
                                Category Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-m font-large text-gray-500 uppercase tracking-wider"
                            >
                                Category Details
                            </th>



                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {category.map((cat) => (
                            <tr key={cat.categoryId}>
                                <td>{cat.categoryId}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src={url + '/' + cat.categoryImage} alt="cat_img" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{cat.categoryName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{cat.categoryDescription}</div>
                                </td>


                            </tr>
                        ))}

                    </tbody>
                </table>
                <a href="/sellerDashboard" className="text-indigo-600 font-medium hover:text-indigo-500 p-3">Back To DashBoard <span aria-hidden="true"> &rarr;</span></a>
            </div>

        </div>




    )




}



export default AllCategory





// <table
//                     className="table"
//                     className="table table-bordered border-dark"
//                     className="table table-striped table-hover">
//                     <thead>
//                         <tr>

//                             <th >
//                                 Category Id
//                             </th>
//                             <th >
//                                 Category Name
//                             </th>
//                             <th scope="col" colSpan="1">
//                                 Category Description
//                             </th>

//                             <th scope="col" colSpan="1">
//                                 Category Image
//                             </th>


//                         </tr>
//                     </thead>
//                     <tbody>

//                         {

//                             category.map((cat) => {
//                                 return (

//                                     <tr>
//                                         <td>{cat.categoryId}</td>
//                                         <td>{cat.categoryName}</td>
//                                         <td>{cat.categoryDescription}</td>
//                                         <td>
//                                             <td>

//                                                 <img src={url + '/' + cat.categoryImage} alt="" class="rounded" height="150px" width="200px" />


//                                             </td>
//                                         </td>

//                                     </tr>
//                                 )
//                             })}
//                     </tbody>
//                 </table>


