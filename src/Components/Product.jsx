import React from 'react'

const Product = ({ id, title, price, rating, img }) => {

    if (!id || !title) {
        return null; //No component rendered 
    }

    return (

        <div className="flex flex-col bg-white border-2 p-[20px] rounded-md  ">
            <p className='text-[18px]'>Item No : <span className='font-semibold'>{id}</span></p>
            <h2 className='font-bold text-2xl mt-[10px]'>{title}</h2>
            <img src={img} className='w-[300px] h-[175px] mt-[10px] mb-[10px] rounded-md' />
            <p className='text-[18px] mt-2' >Price : <span className='font-bold'>${price}</span></p>
            <div className="flex">
                {
                    Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                }
            </div>
            <button
                className="w-full p-2 text-[20px] font-bold
        bg-gray-300 text-black border rounded-md mt-4
        hover:bg-black hover:text-white hover:border-gray-400
        transition duration-300 ease-in-out"
            >
                Add To Cart
            </button>

        </div>
    )
}

export default Product