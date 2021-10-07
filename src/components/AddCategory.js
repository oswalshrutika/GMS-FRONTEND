import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { url } from '../common/constants';
import SellerMenuBar from './SellerMenuBar';
import toast from 'react-hot-toast';
import axios from  'axios';


const AddCategory = () => {
    const [categoryId, setCategoryId] = useState(0)
    const [categoryName, setCategoryName] = useState('')
    const [categoryDescription, setCategoryDescription] = useState('')
    const [categoryImage, setCategoryImage] = useState(undefined)
    const history = useHistory()
    const category = (() => {
        const body = new FormData();

        body.append("categoryId", categoryId);
        body.append("categoryName", categoryName);
        body.append("categoryDescription", categoryDescription);
        body.append("categoryImage", categoryImage);

        axios.post(url + `/category`, body).then(response => {
            const result = response.data
            if (result) {
                toast.success(`${result} addedd success`)

                history.push("/sellerDashboard")
            }

            else
                alert("error");
        })


    })


    return (

        <div className="grid grid-cols-4">
            <div >
                <SellerMenuBar />
            </div>
            <div className="col-span-3 p-3">
                <div className="col-lg-5 col-sm-12  p-5">
                    <h2 className="text-indigo-600">Add Category</h2>
                    <input
                        onChange={(e) => {
                            setCategoryId(e.target.value)
                        }}
                        className="form-control" type="hidden" required style={{ width: "400px" }} />

                    Category Name: <input
                        onChange={(e) => {
                            setCategoryName(e.target.value)
                        }}
                        className="form-control" type="text" required style={{ width: "400px" }} />

                    Category Description: <input
                        onChange={(e) => {
                            setCategoryDescription(e.target.value)
                        }}
                        className="form-control" type="text" required style={{ width: "400px" }} />

                    Category Image: <input
                        onChange={(e) => {
                            setCategoryImage(e.target.files[0])
                        }}
                        className="form-control" type="file" required style={{ width: "400px" }} />

                    <br />
                    <button onClick={category} className="btn btn-success">Add Category</button>  {'  '}{'  '}{'  '}
                    <a href="/sellerDashboard" className="text-indigo-600 font-medium hover:text-indigo-500 p-3">Back To DashBoard <span aria-hidden="true"> &rarr;</span></a>

                </div>
            </div>

        </div>


    )
}
export default AddCategory