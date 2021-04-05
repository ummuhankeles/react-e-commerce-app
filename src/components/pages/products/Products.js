import React, { Component } from 'react';
import '../products/Products.css';

class Products extends Component {
    render() {
        return (
            <div className="container">

                <div className="products mb-3">
                    <div className="products-text">
                        <a href="#">All Products</a>
                    </div>
                </div>

                <div className="electronic mb-3">
                    <div className="electronic-text">
                        <a href="#">Electronic</a>
                    </div>
                </div>

                <div className="clothes mb-3">
                    <div className="clothes-text">
                        <a href="#">Clothes</a>
                    </div>
                </div>

                <div className="shoes mb-3">
                    <div className="shoes-text">
                        <a href="#">Shoes</a>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12 col-md-6">
                        <div className="supermarket mb-3">
                            <div className="supermarket-text">
                                <a href="#">Supermarket</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="parfume mb-3">
                            <div className="parfume-text">
                                <a href="#">Parfume</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12 col-md-6">
                        <div className="watch mb-3">
                            <div className="watch-text">
                                <a href="#">Watch</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="cosmetic mb-3">
                            <div className="cosmetic-text">
                                <a href="#">Cosmetic</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-12 col-md-6">
                        <div className="decoration mb-3">
                            <div className="decoration-text">
                                <a href="#">Home&Life</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="bags mb-3">
                            <div className="bags-text">
                                <a href="#">Bags</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Products;