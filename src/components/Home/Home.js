import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlaceContext } from '../../App';
import data from '../../FackData/FackDataPlace';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Cox from '../../Image/Rectangle 1.png';
import sreemangal from '../../Image/Sreemongol.png';
import sundorbon from "../../Image/sundorbon.png"

const Home = () => {
    const [place, setPlace] = useContext(PlaceContext);

    const handlePlace = (index) => {
        setPlace(data[index]);
    };

    return (
        <div className='backgroundImage'>
            <Navbar />
            <section className="container">
                <div className="mt-5 row">

                    <div className="info-container d-flex flex-column align-items-between col-md-5">
                        <h1>{place.place}</h1>
                        <p><b> {place.description}</b></p>
                        <Link to={"/place/" + place.place}>
                            <button className="btn btn-warning">Booking</button>
                        </Link>
                    </div>

                    <div className="place-info box-size col-md-2  backgroundImage-1" onClick={() => handlePlace(0)} >
                        <div className=' d-flex align-items-end justify-content-center py-4' >
                            <h2 style={{ marginTop: "250px", textAlign: "center", color: "white" }}>Cox's Bazar</h2>
                        </div>
                    </div>

                    <div className="place-info box-size col-md-2  backgroundImage-2" onClick={() => handlePlace(1)} style={{ backgroundImage: sreemangal }}>
                        <div className=' d-flex align-items-end justify-content-center py-4'>
                            <h2 style={{ marginTop: "250px", textAlign: "center", color: "white" }}>sreemangal</h2>
                        </div>
                    </div>

                    <div className="place-info box-size col-md-2 backgroundImage-3" onClick={() => handlePlace(2)}>
                        <div className=' d-flex align-items-end justify-content-center py-4' >
                            <h2 style={{ marginTop: "250px", textAlign: "center", color: "white" }}>sundorbon</h2>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;