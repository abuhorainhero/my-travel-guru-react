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

            <div className="d-flex mt-5">
                
                <div className="info-container ml-5 ">
                    <h1>{place.place}</h1>
                    <p>{place.description}</p>
                    <Link to={"/place/"+place.place}>
                        <button className="btn btn-warning">Booking</button>
                    </Link>
                </div>

                <div className="place-info ml-5">
                    <button onClick={() => handlePlace(0)}>
                        Cox's Bazar
                    </button>
                </div>

                <div className="place-info ml-2">
                    <button className='' onClick={() => handlePlace(1)}>
                        sreemangal
                    </button>
                </div>

                <div className="place-info ml-2">
                    <button className='backgroundImage-3' onClick={() => handlePlace(2)}>
                        sundorbon
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Home;