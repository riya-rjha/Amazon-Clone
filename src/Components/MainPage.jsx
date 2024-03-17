import React from 'react';
import Product from './Product.jsx';

const productsData = [
    { id: '1', title: 'Laptop Deals', price: 799.99, rating: 5, img: '../Images/laptop.avif' },
    { id: '2', title: 'Smartphone Deals', price: 299.99, rating: 2, img: '../Images/smartphone.avif' },
    { id: '3', title: 'Camera Deals', price: 399.99, rating: 2, img: '../Images/camera.avif' },
    { id: '4', title: 'Headphone Deals', price: 99.99, rating: 3, img: '../Images/headphone.avif' },
    { id: '5', title: 'Tablet Deals', price: 199.99, rating: 3, img: '../Images/tablet.jpg' },
    { id: '6', title: 'Gaming Console Deals', price: 399.99, rating: 5, img: '../Images/console.jpg' },
    { id: '7', title: 'TV Deals', price: 799.99, rating: 5, img: '../Images/tv.jpg' },
    { id: '8', title: 'Smartwatch Deals', price: 199.99, rating: 4, img: '../Images/smartwatch.avif' }
];


const MainPage = () => {
    return (
        <div>
            <img className='w-full h-full' id='bg-img' src="./Images/startBG.jpg" />
            <div className=" p-4 text-center m-4 -mt-[200px] font-bold text-[18px] bg-gray-300">
                <p>
                    You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
                </p>
            </div>
            <div className="grid m-[50px] pb-14 gap-[25px] grid-cols-4 mt-12">
                {/* Map over productsData and render each Product */}
                {productsData.map(product => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        img={product.img}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainPage;
