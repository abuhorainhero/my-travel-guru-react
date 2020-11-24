import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PlaceContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import './PlaceDetails.css';

const PlaceDetails = () => {
    const { placeName } = useParams();
    const [place, setPlace] = useContext(PlaceContext);

    return (
        <div className='backgroundImage'>
            <Navbar />
            <section className="container">
                <div className="mt-5 row">

                    <div className="detail-info mt-5 col-md-6">
                        <h1>{placeName}</h1>
                        <p>{place.description}</p>
                    </div>

                    <div className="form-container  col-md-6">

                        <form action="" >

                            <label htmlFor="">Origin</label>
                            <input type="text" className="form-control" value='Feni' required />

                            <label htmlFor="">Destination</label>
                            <input type="text" className="form-control" value={placeName} required />

                            <div className="d-flex mt-2">

                                <div className="d-flex flex-column">
                                    <label htmlFor="">Form</label>
                                    <input type="date" required />
                                </div>

                                <div className="d-flex flex-column ml-5">
                                    <label htmlFor="">To</label>
                                    <input type="date" required />
                                </div>

                            </div>

                            <br />

                            <Link to='/travel-place'>
                                <input type="submit" value="Start Booking" className="form-control bg-warning" />
                            </Link>

                        </form>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlaceDetails;