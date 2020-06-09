import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/action';
import './Header.scss';

const Header = (props) => {
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">
                <div className="logo-box">
               <img className="logo" src="https://cdn.dribbble.com/users/1913536/screenshots/4861594/polaroid.png"></img>
               </div>
            </Link>
            <div className="title">
                <h1>Polaroid</h1>
            </div>
            <button className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarTogglerDemo02" 
                    aria-controls="navbarTogglerDemo02" 
                    aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button>
            {props?.user?
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to='/home' className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/profile' className="nav-link">
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link"  onClick={logout}>
                                Logout
                            </Link>
                        </li>               
                    </ul>
                </div>
                :
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">
                                Principal
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/signup' className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/signin' className="nav-link">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </div>
            }
        </nav>
    )
    
     return (
          <header id='header'>{showNavigation()}</header>
     );

};

const mapStateToProps = (state) => ({user: state?.user })
export default connect(mapStateToProps)(Header);