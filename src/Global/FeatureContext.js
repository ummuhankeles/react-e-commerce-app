//import React, { createContext, useState } from 'react';
import bear from '../components/assets/features/bear.jpg';
import candle from '../components/assets/features/candle.jpg';
import cup from '../components/assets/features/cup.jpg';
import floorLamb from '../components/assets/features/floorLamb.jpg';
import keyboard from '../components/assets/features/keyboard.jpg';
import microphone from '../components/assets/features/microphone.jpg';
import mirror from '../components/assets/features/mirror.jpg';
import notebook from '../components/assets/features/notebook.jpg';
import painting from '../components/assets/features/painting.jpg';
import ring from '../components/assets/features/ring.jpg';
import shoes from '../components/assets/features/shoes.jpg';
import tablet from '../components/assets/features/tablet.jpg';

//export const FeatureContext = createContext();

export const products = [
    { id: 1, name: 'Bear', price: '20', image: bear},
    { id: 2, name: 'Candle', price: '5', image: candle},
    { id: 3, name: 'Cup', price: '7', image: cup},
    { id: 4, name: 'Floor Lamb', price: '30', image: floorLamb},
    { id: 5, name: 'Keyboard', price: '85', image: keyboard},
    { id: 6, name: 'Microphone', price: '150', image: microphone},
    { id: 7, name: 'Mirror', price: '43', image: mirror},
    { id: 8, name: 'Notebook', price: '9', image: notebook},
    { id: 9, name: 'Painting Brush', price: '10', image: painting},
    { id: 10, name: 'Ring', price: '250', image: ring},
    { id: 11, name: 'Shoes', price: '120', image: shoes},
    { id: 12, name: 'Tablet', price: '320', image: tablet}
];

// const FeatureContextProvider = (props) => {
//     const [products] = useState([
//         { id: 1, name: 'Bear', price: '20', image: bear},
//         { id: 2, name: 'Candle', price: '5', image: candle},
//         { id: 3, name: 'Cup', price: '7', image: cup},
//         { id: 4, name: 'Floor Lamb', price: '30', image: floorLamb},
//         { id: 5, name: 'Keyboard', price: '85', image: keyboard},
//         { id: 6, name: 'Microphone', price: '150', image: microphone},
//         { id: 7, name: 'Mirror', price: '43', image: mirror},
//         { id: 8, name: 'Notebook', price: '9', image: notebook},
//         { id: 9, name: 'Painting Brush', price: '10', image: painting},
//         { id: 10, name: 'Ring', price: '250', image: ring},
//         { id: 11, name: 'Shoes', price: '120', image: shoes},
//         { id: 12, name: 'Tablet', price: '320', image: tablet}
//     ])
//     return (
//         <FeatureContext.Provider value= {{products: [...products]}}>
//             {props.children}
//         </FeatureContext.Provider>
//     )
// }

// export default FeatureContextProvider;