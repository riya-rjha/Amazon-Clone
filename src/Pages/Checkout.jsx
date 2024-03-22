import React from 'react';
import Header from '../Components/Header.jsx';
import { useStateValue } from '../Components/StateProvider.jsx';
import CheckoutProduct from './CheckoutProduct.jsx';

const Checkout = () => {
    const [{ basket }] = useStateValue();

    // Calculate total price
    const totalPrice = basket.reduce((total, item) => total + item.price, 0);

    // Calculate the string for the item count
    const itemCountString = basket.length === 1 ? 'item' : 'items';

    return (
        <div className='bg-[#EAEDED] min-h-screen'>
            <Header />
            <div className="grid gap-4 mx-8 mt-8 bg-white p-8 rounded-md">
                {/* Product Container */}
                <div className="col-span-1">
                    {basket.length === 0 ? (
                        <div className="ml-10">
                            <h1 className='font-semibold text-2xl '>Your Shopping List is Empty!</h1>
                            <p className='mt-4 max-w-[800px]'>Your Amazon Cart is empty. Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more. Continue shopping on the Amazon.com homepage!</p>
                        </div>
                    ) : (
                        <div className="m-30">
                            <h1 className='font-semibold text-2xl '>Your Shopping Basket</h1>
                            <div className="mt-[20px] p-8 bg-white mx-30">
                                {basket.map(item => (
                                    <CheckoutProduct
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        rating={item.rating}
                                        image={item.img}
                                        size={item.size}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* Subtotal and Proceed to Checkout */}
                {basket.length > 0 && (
                    <div className="col-span-1 bg-white p-8 rounded-md sub-total-comp m-8">
                        <div className="mb-4">
                            <h2 className="font-semibold text-lg">Subtotal ({basket.length} {itemCountString}): ${totalPrice.toFixed(2)}</h2>
                            <div className="flex items-center mt-2">
                                <input type="checkbox" className="mr-2" />
                                <p>This order contains a gift</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-300 w-full ">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Checkout;
