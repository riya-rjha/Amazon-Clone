import React from 'react';
import Product from './Product.jsx';

const MainPage = () => {
    return (
        <div>
            <img className='w-full h-full' id='bg-img' src="./Images/startBG.jpg" />
            <div className=" p-4 text-center m-4 -mt-[200px] font-bold text-[18px] bg-gray-300">
                <p>
                    You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
                </p>
            </div>
            {/* id, title, img, price, rating */}
            <div className="grid m-[50px] gap-[25px] grid-cols-4 mt-12">
                <Product
                    id='1'
                    title='Deals in PCs'
                    price={12.65}
                    rating={5}
                    img='./Images/bg-3.jpg'
                />
                <Product
                    id='2'
                    title='Deals in PCs'
                    price={12.65}
                    rating={5}
                    img='./Images/bg-3.jpg'
                />
                <Product
                    id='3'
                    title='Deals in PCs'
                    price={12.65}
                    rating={5}
                    img='./Images/bg-3.jpg'
                />
                <Product
                    id='4'
                    title='Deals in PCs'
                    price={12.65}
                    rating={5}
                    img='./Images/bg-3.jpg'
                />
                <Product
                    id='5'
                    title='Deals in PCs'
                    price={12.65}
                    rating={5}
                    img='./Images/bg-3.jpg'
                />
                <Product
                    id='6'
                    title='Deals in PCs'
                    price={12.65}
                    rating={5}
                    img='./Images/bg-3.jpg'
                />
                <Product
                    id='7'
                    title='Deals in PCs'
                    price={12.65}
                    rating={5}
                    img='./Images/bg-3.jpg'
                />
                <Product
                    id='8'
                    title='Deals in PCs'
                    price={12.65}
                    rating={5}
                    img='./Images/bg-3.jpg'
                />
            </div>
        </div>
    )
}

export default MainPage