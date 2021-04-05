import React, { useContext } from 'react';
import { FeatureContext } from '../../../App';
import '../favotites/Favorite.css';

function Favorite (props) {
    const products = useContext(FeatureContext);

    return (
        <div>
            <div className="container">
                <div className="row">
                    {products.favorite.map((item) => (
                        <div className="col-sm-12 col-md-3">
                            <div className="favorite-card text-center mb-3" key={item.id}>
                                <div className="favorite-card-image mb-2">
                                    <img src={item.image} alt={item.name}/>
                                </div>
                                <div className="favorite-card-title mb-2">
                                    <h5>{item.name}</h5>
                                </div>
                                <div className="favorite-card-price mb-2">
                                    <h6>${item.price}.00</h6>
                                </div>
                                <div className="favorite-card-button">
                                    <button onClick={() => props.remove(item)} className="favorite-remove" type="button">Remove from Favorites</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Favorite; 