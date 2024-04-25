import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

function Card() {
    const [cardData, setCardData] = useState([])

    const fetehData = async () => {
        await axios.get('https://child.onrender.com/api/sciencefiction')
            .then((res) => {
                console.log(res.data)
                setCardData(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })

    }

    useEffect(() => {
        fetehData()
    }, [])



    return (
        <>

            <section id='Card'>
                <div className='container'>
                    <div className='row'>

                        {cardData.map((item, i) => (
                            <>
                                <div className='col-lg-3 col-md-6 col-12 mt-5'>
                                    <div className='card' key={i} >
                                        <Link to={`/next/${i}`}>
                                        
                                       
                                        <img src={` https://ik.imagekit.io/dev24/${item?.Image}`}></img>
                                        </Link>
                                        <p className='mt-3'>{item.Title}</p>
                                        <button className='mt-3'
                                        //   style={{ color: getStatusColor(item?.Status), border: 'none' }}
                                        // style={{ backgroundColor: item.status === 'pending' ? 'orange' : item.status === 'completed' ? 'green' : 'gray' }}


                                        >{item.Status}</button>
                                    </div>

                                </div>

                            </>
                        ))}



                    </div>

                    <div className='row'>
                        <div className='d-flex justify-content-between '>
                            <button className='gradient-button'>Previous</button>
                            <Link to="/next">
                            <button className='gradient-button'>Next</button>
                            </Link>
                               
                            

                        </div>
                    </div>



                </div>





            </section>


        </>

    )
}

export default Card;