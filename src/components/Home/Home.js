import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlaceContext } from '../../App';
import data from '../../FackData/FackDataPlace';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
    const [place, setPlace] = useContext(PlaceContext);

    const handlePlace = (index) => {
        setPlace(data[index]);
    };

    return (
        <div className='backgroundImage'>
            <Navbar />
            <section className="container ">
                <div className="mt-5 row">

                    <div className="d-flex flex-column align-items-between col-md-5">
                        <h1 className="mt-5">{place.place}</h1>
                        <p className="my-5"> {place.description}</p>
                        <Link to={"/place/" + place.place}>
                            <button className="btn btn-warning">Booking</button>
                        </Link>
                    </div>

                    <div className="place-info box-size col-md-2 ml-5 backgroundImage-1" onClick={() => handlePlace(0)} >
                        <div className=' d-flex align-items-end justify-content-center py-4' >
                            <h3 style={{ marginTop: "250px", textAlign: "center", color: "white" }}>Cox's Bazar</h3>
                        </div>
                    </div>

                    <div className="place-info box-size col-md-2  backgroundImage-2" onClick={() => handlePlace(1)}>
                        <div className=' d-flex align-items-end justify-content-center py-4'>
                            <h3 style={{ marginTop: "250px", textAlign: "center", color: "white" }}>sreemangal</h3>
                        </div>
                    </div>

                    <div className="place-info box-size col-md-2 backgroundImage-3" onClick={() => handlePlace(2)}>
                        <div className=' d-flex align-items-end justify-content-center py-4' >
                            <h3 style={{ marginTop: "250px", textAlign: "center", color: "white" }}>sundorbon</h3>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;