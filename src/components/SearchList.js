import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card';
import Carousel1 from '../Carousel1';
import { url } from '../common/constants';

function SearchList({ filteredcategory }) {
    const [category, setCategory] = useState([])

    // const location = useLocation()
    const history = useHistory()

    const getCategory = () => {
        axios.get(url + '/category/').then((response) => {
            const result = response.data

            setCategory(result)
        })
    }

    return (

        <div className="row p-3">
            {
                filteredcategory.length !== 0 ? filteredcategory.map((cat) => {
                    return (


                        <a
                            onClick={() => {
                                history.push(`/category/${cat.categoryName}`, { cat: cat })



                            }}
                            className="col-lg-4 col-md-6 col-sm-2 p-3"
                        >


                            <div >

                                <div className="single-service wow fadeInUp " data-wow-delay=".2s">
                                    <div className="icon w-20">
                                        <img src={url + '/' + cat.categoryImage} alt="" />
                                    </div>
                                    <div className="content float-left ">
                                    <p className="content float-left text-gray-400"> {cat.categoryDescription}</p>

                                        <h3 className="text-gray-700">{cat.categoryName}</h3>
                                    </div>
                                </div>
                            </div>
                        </a>



                    )

                }) : <h1 className="text-purple-700">Ummmmmm.....? 🙂 No category found</h1>
            }


        </div >
    );
}

export default SearchList;

{/* <div className="row">
    <div className="col-lg-4 col-md-6">
        <div className="single-service wow fadeInUp" data-wow-delay=".2s">
            <div className="icon">
                <img src={url + '/' + cat.categoryImage} alt="" />
            </div>
            <div className="content">
                <h3>{cat.categoryName}</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
            </div>
        </div>
    </div>
</div> */}