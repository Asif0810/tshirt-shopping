import React from 'react';
import './Shoptshirt.css'
const Shoptshirt = ({ product, handler }) => {
  
    const { _id, gender, name, price, picture } = product
    return (
        <div className='productItem'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price : ${price}</p>
            <div>
                <button onClick={() => handler(product)}>Buy</button>
            </div>

        </div>
    );
};

export default Shoptshirt;