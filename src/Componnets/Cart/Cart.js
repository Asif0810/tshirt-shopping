import React from 'react';

const Cart = ({ cart, RemovItem }) => {

    let message = "thanks for buying !!";
    let message2 = "Please Buy an Item !!";


    return (
        <div>
            <b>total selected : {cart.length}</b><br />
            {
                cart.map(item => <p>{item.name}<button onClick={() => RemovItem(item)}>X</button></p>)

            }
            {
                cart.length === 0 ? message2 : message
            }
        </div >


    );
};

export default Cart;