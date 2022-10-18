import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Shoptshirt from '../ShopTshirt/Shoptshirt';
import './Home.css'
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setcart] = useState([]);
    console.log(cart)

    const RemovItem = (tshirt) => {
        const remainingCart = cart.filter(item => item._id !== tshirt._id)
        setcart(remainingCart)
    }

    const BuyItem = (product) => {
        const selectedCart = cart.find(item => item._id === product._id)
        if (selectedCart) {

            alert('this item alreay exist')
        } else {
            const newCart = [...cart, product];
            setcart(newCart)
        }


    }
    return (
        <div className='productAndCart'>
            <div className='products'>
                {
                    tshirts.map(product => <Shoptshirt
                        product={product}
                        key={product.id}
                        handler={BuyItem}
                    ></Shoptshirt>)
                }
            </div>
            <div className='Cart'>
                <h2>Order Summary</h2>
                <Cart
                    RemovItem={RemovItem}
                    cart={cart}

                ></Cart>
            </div>
        </div>
    );
};

export default Home;