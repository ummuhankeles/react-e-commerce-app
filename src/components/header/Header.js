import React, { useState } from 'react';
import './Header.css';
import { imageData } from './HeaderImagesData';

function Header() {
    const [imageState, setImageState] = useState(0);

    const imgLength = imageData.length;

    function prevBtn() {
        setImageState(
            imageState === 0 ? imgLength - 1 : imageState - 1
        )
    }

    function nextBtn() {
        setImageState(
            imageState === imgLength - 1 ? 0 : imageState + 1
        )
    }

    return (
        <div>
            <div className="container mb-5">
                <div className="button-box">
                    <button onClick={prevBtn} className="prevButton"><i class="fas fa-arrow-left"></i></button>
                    <button onClick={nextBtn} className="nextButton"><i class="fas fa-arrow-right"></i></button>
                </div>
                <div className="image-slide-box">
                    {imageData.map((image, index)=>(
                        <div className={index === imageState ? 'image-slide active' : 'image-slide'} key={index}>
                            {index === imageState && (
                                <img src={image.img} alt=""/>
                            )}
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Header; 