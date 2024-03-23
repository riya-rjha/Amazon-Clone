import React from 'react';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

const Product = ({ id, title, price, rating, img, size }) => {
    if (!id || !title) {
        return null; // No component rendered 
    }

    const [{ user }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                img: img,
                size: size
            }
        });
    }

    return (
        <div className="bg-white border rounded-md shadow-md overflow-hidden relative flex flex-col">
            <div className="relative aspect-w-18 aspect-h-12">
                <img src={img} alt={title} className="object-cover w-[290px] h-[195px]" />
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <div className="absolute top-0 right-0 bg-gray-800 px-2 py-1 text-white text-xs font-semibold rounded-bl-md">
                        {rating} stars
                    </div>
                </div>
                <div className="flex items-center mb-2">
                    {Array(rating).fill().map((_, i) => (
                        <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                </div>
                <p className="text-gray-600">Size: <span className="font-bold">{size}</span></p>

                <p className="text-gray-600">Price: <span className="font-bold">${price}</span></p>
                {user ? (
                    <button
                        className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-black transition duration-300 self-center mt-4 w-full"
                        onClick={addToCart}
                    >
                        Add To Cart
                    </button>
                ) : (
                    <Link to='/login'>
                        <button
                            className="bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-black transition duration-300 self-center mt-4 w-full"
                        >
                            Add To Cart
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Product;
