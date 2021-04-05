import React, { useContext } from 'react'
import { FeatureContext } from '../../../App';
import '../cart/Cart.css'

function Cart(props) {
    const products = useContext(FeatureContext);

    const totalAmount = products.cart.reduce((total,item) => (
        total = total + (item.price * item.count)
    ),0)

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-sm-12 col-lg-8">
                    {products.cart.map((item) => (
                        <div className="cart mb-3 text-center" key={item.id}>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cart-image">
                                        <img src={item.image} alt={item.name}/>
                                    </div>
                                </div>
                                <div className="cart-product-info col-4">
                                    <div className="cart-title">
                                        <h6>{item.name}</h6>
                                    </div>
                                    <div className="cart-price">
                                        <h6>${item.price * item.count}.00</h6>
                                    </div>
                                </div>
                                <div className="cart-count-info col-4">
                                    <button onClick={() => props.decrease(item)} className="button-minus" type="button"><i className="fas fa-minus"></i></button>
                                    <h5 className="cart-count"> {item.count} </h5>
                                    <button onClick={() => props.increase(item)} className="button-plus" type="button"><i className="fas fa-plus"></i></button>
                                </div>
                                <div className="cart-remove-button">
                                    <button onClick={() => props.delete(item)}  className="button-close" type="button"><i class="fas fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-sm-12 col-lg-4">
                    <div className="total-cart-price text-center"> 
                        <div className="cart-price-title mb-3">
                            <h3>Cart Details</h3>
                        </div>
                        <div className="total-cart-amount mb-4">
                            <h5>Total Price:&nbsp;<span className="cart-amount">${totalAmount}.00</span></h5>
                        </div>
                        <div className="cart-pay-button">
                            <a href="#">
                                <button type="button">Pay Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;