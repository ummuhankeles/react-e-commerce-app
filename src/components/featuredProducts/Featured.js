import React, { useContext } from 'react';
import './Featured.css';
import { FeatureContext } from '../../App';

const Featured = (props) => {

    const products = useContext(FeatureContext);
    //console.log(products);

    return (
        <div className="container mb-5">
            <div className="row mb-3">
                <div className="col-12">
                    <div className="featured-title">
                        <hr/>
                        <i class="fas fa-star"></i>&emsp;
                        <h2>Featured Products</h2>&emsp;
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
            <div className="items">
                <div className="row">
                    {products.cartList.map((item) => (
                        <div className="col-sm-12 col-md-3 mb-3">
                            <div className="item" key={item.id}>
                                <div className="item-image mb-2">
                                    <img src={item.image} alt="not found"/>
                                </div>
                                <div className="item-body">
                                    <div className="item-title">
                                        <p className="item-name">{item.name}</p>
                                        <div className="item-fav" onClick={() => props.addToFavorites(item)}>
                                            <i class="far fa-heart"></i>
                                        </div>
                                        
                                    </div>
                                    <div className="item-price mb-2">
                                        ${item.price}.00
                                    </div>
                                </div>
                                <div className="item-cart">
                                    <button onClick={() => props.addToCart(item)} type="button" className="btn btn-outline-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured;