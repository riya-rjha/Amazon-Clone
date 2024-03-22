import React from 'react';
import { useStateValue } from '../Components/StateProvider';

const CheckoutProduct = ({ id, title, price, rating, image, size }) => {

    const [{ }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="bg-white border rounded-md shadow-md p-4 mb-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src={image} alt={title} className="w-40 h-auto mr-4" />
                <div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <div className="flex items-center">
                        <p className="text-gray-600 text-[20px] mr-2">Rating:</p>
                        <div>
                            {Array(rating).fill().map((_, i) => (
                                <span key={i} className="text-yellow-500">⭐</span>
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-600 text-[20px]">Size: <span className="font-bold">{size}</span></p>
                    <p className="text-gray-600 text-[20px]">Price: <span className="font-bold">${price}</span></p>
                </div>
            </div>
            <button className="bg-red-500 text-white px-4 py-2
             rounded-md font-semibold hover:bg-red-600 transition 
             duration-300"
                onClick={removeFromCart}
            >
                Remove from Cart
            </button>
        </div>
    );
};

export default CheckoutProduct;
