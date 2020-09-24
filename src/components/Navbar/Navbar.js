import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PlaceContext } from '../../App';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(PlaceContext)
    return (
        <div className='bg-info'>
            <nav className="navbar navbar-expand-lg d-flex justify-content-between">

                <Link to="/" className="ml-5">
                    <img src="https://i.imgur.com/T1gk76d.png" alt="" />
                </Link>

                <Link to="/">
                    {
                        !loggedInUser.email && <input className="form-control " type="search" placeholder="Search Your Destination" />
                    }
                </Link>

                <Link to="/" className="link-styles">
                    <h6>News</h6>
                </Link>

                <Link to="/" className="link-styles">
                    <h6>Destination</h6>
                </Link>

                <Link to="/" className="link-styles">
                    <h6>blog</h6>
                </Link>

                <Link to="/" className="link-styles" >
                    <h6 >Contact</h6>
                </Link>

                {
                    loggedInUser.email ? <Link to="/" className="link-styles mr-5">{loggedInUser.name}</Link> : 
                    <Link to="/login" className=" mr-5"> <button className="btn btn-warning">Login</button></Link>
                }

                
                
            </nav>
        </div>
    );
};

export default Navbar;