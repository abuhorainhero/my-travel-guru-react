import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PlaceContext } from '../../App';
import hotel from '../../FackData/FackHotel';
import Hotel from '../Hotel/Hotel';
import MyMap from '../MyMap/MyMap';
import Navbar from '../Navbar/Navbar';

const TravelPlace = () => {
    const [place, setPlace] = useContext(PlaceContext)

    return (
        <div>
            <Navbar />
            <hr/>

            <div className="mt-5 d-flex">

                <div style={{width: '50%'}} className="ml-5">
                    <p>252 stays Sep 21-20 3 guests</p>
                    <h4>Stay in {place.place}</h4>
                    {
                        hotel.map(info => <Hotel key={info.id} hotelInfo={info}></Hotel>)
                    }
                </div>

                <div style={{}} className="ml-5">
                    <h3>map</h3>
                    <MyMap />
                </div>
                
            </div>
        </div>
    );
};

export default TravelPlace;