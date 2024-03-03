import React from 'react'

const Product = ({ id, title, price, rating, img }) => {
    return (
        <div>
            <div className="flex flex-col bg-white border-2 p-[20px] rounded-md   ">
                <p className='text-[18px]'>Item No : <span className='font-semibold'>{id}</span></p>
                <h2 className='font-bold text-2xl mt-[10px]'>{title}</h2>
                <img src={img} className='w-[300px] h-[175px] mt-[10px] mb-[10px] rounded-md' />
                <p className='text-[18px]' >Price : <span className='font-bold'>${price}</span></p>
                <div className="flex">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Product