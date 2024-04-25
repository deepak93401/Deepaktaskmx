import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import "./Nextpagesec.css"
import { useParams } from 'react-router-dom';

function Nextpagesec() {
    const {index}=useParams()
    const [nextData, setNextData] = useState([])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        axios.get(`https://child.onrender.com/api/sciencefiction`)
            .then((res) => {
                console.log(res.data);
                setNextData(res.data)
            })
    }, [])
    return (
        <>

            <section id='section'>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-md-12'>
                            <div className=' button-sec d-flex justify-content-around align-items-center mt-5 px-5'>
                           
                                <button className='s_btn1'>World Explore</button>
                                <button className='s_btn2'>Story Adventure</button>
                                <button className='s_btn3'>Brain Quest</button>
                            </div>
                            <p className='text-white text-center mt-5 '>Science Friction Technology </p>


                        </div>

                    </div>
                    <div className='row'>

                        <div className='col-lg-4 col-md-6 col-12 '>
                            <div className='slider'>
                                <Slider {...settings}>
                                    {nextData.map((item, index) => (
                                        <>
                                            <div key={index}>
                                                <img src={` https://ik.imagekit.io/dev24/${item?.Image}`} />
                                            </div>
                                        </>
                                    ))}


                                </Slider>


                            </div>

                        </div>
                        <div className='col-lg-8 col-md-6 col-12'>
                            <div className='d-flex flex-wrap gap-2 '>
                                {nextData.map((item,index) => (
                                    <>
                                        <div className='card-sec'>
                                            <img src={` https://ik.imagekit.io/dev24/${item?.Image}`} />

                                        </div>
                                    </>
                                ))}


                            </div>

                        </div>

                    </div>


                </div>

            </section>











        </>
    )
}

export default Nextpagesec