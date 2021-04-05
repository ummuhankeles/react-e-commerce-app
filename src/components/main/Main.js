import React, { Component } from 'react'
import './Main.css'
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div className="container">

                <div className="row mb-5">
                    <div className="col-sm-12 col-md-4 mb-2">
                        <Link to="/" style={{textDecoration:'none'}}>
                            <div className="card text-center">
                                <div className="card-body">
                                    <div className="card-title mb-3">
                                        <i class="fas fa-shipping-fast"></i>
                                    </div>
                                    <div className="card-text">
                                        <h6>Free Shipping</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-sm-12 col-md-4 mb-2">
                        <Link to="/" style={{textDecoration:'none'}}>
                            <div className="card text-center">
                                <div className="card-body">
                                    <div className="card-title mb-3">
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div className="card-text">
                                        <h6>Amazing Deals</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-sm-12 col-md-4 mb-2">
                        <Link to="/" style={{textDecoration:'none'}}>
                            <div className="card text-center">
                                <div className="card-body">
                                    <div className="card-title mb-3">
                                        <i class="fas fa-medal"></i>
                                    </div>
                                    <div className="card-text">
                                        <h6>Expert Customer</h6>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-12 col-lg-4 mb-3">
                        <div className="part-one">
                            <div className="main-text">
                                <div className="main-desc">
                                    <h4>Header</h4>
                                    <p>Lorem ipsum dolor.</p>
                                    <button type="button" class="btn btn-outline-light">Show More..</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5 mb-3">
                        <div className="part-two">
                            <div className="main-text">
                                <div className="main-desc">
                                    <h4>Header</h4>
                                    <p>Lorem ipsum dolor.</p>
                                    <button type="button" class="btn btn-outline-light">Show More..</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-3 mb-3">
                        <div className="part-three">
                            <div className="main-text">
                                <div className="main-desc">
                                    <h4>Header</h4>
                                    <p>Lorem ipsum dolor.</p>
                                    <button type="button" class="btn btn-outline-light">Show More..</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-center mb-5">
                    <div className="col-md-12 col-lg-7 mb-3">
                        <div className="part-four">
                            <div className="main-text">
                                <div className="main-desc">
                                    <h4>Header</h4>
                                    <p>Lorem ipsum dolor.</p>
                                    <button type="button" class="btn btn-outline-light">Show More..</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5 mb-3">
                        <div className="part-five">
                            <div className="main-text">
                                <div className="main-desc">
                                    <h4>Header</h4>
                                    <p>Lorem ipsum dolor.</p>
                                    <button type="button" class="btn btn-outline-light">Show More..</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Main;