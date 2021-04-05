import React from 'react'
import { Link } from 'react-router-dom';
import '../footer/Footer.css'

function Footer() {
    return (
        <div className="container">
            <div className="footer-image">
                <div className="footer-text-body">
                    <div className="footer-text">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                        <Link to="/">Learn More..</Link>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row footer">
                <div className="col-sm-12 col-md-3 mb-2">
                    <ul>
                        <h5>E-Commerce</h5>
                        <li>Address: 101 React Street</li>
                        <li>Phone: 123-456-7890</li>
                        <li>Email: info@react.com</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-3 mb-2">
                    <ul>
                        <h5>Company</h5>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Help & FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-3 mb-2">
                    <ul>
                        <h5>Useful Links</h5>
                        <li>
                            <a href="#">Privacy Protections</a>
                        </li>
                        <li>
                            <a href="#">Safe Payments</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-3">
                    <ul>
                        <h5>Contact Us</h5>
                        <div className="row">
                        <div className="col-6">
                            <a className="icon" href="#"><i className="fab fa-facebook-square"></i></a>
                        </div>
                        <div className="col-6">
                            <a className="icon" href="#"><i className="fab fa-twitter-square"></i></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <a className="icon" href="#"><i className="fab fa-instagram-square"></i></a>
                        </div>
                        <div className="col-6">
                            <a className="icon" href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    </ul>
                    
                    
                </div>
                <hr/>
            </div>
            <div className="row text-center">
                <div className="col-12">
                    <h6>Copyright © Your Website</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;