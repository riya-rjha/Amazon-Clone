import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' sticky top-0 z-50'>
            <header className='flex items-center justify-evenly bg-[#131921] p-[20px] max-h-[96px]'>
                <div className="hover:border-white hover:border cursor-pointer mr-[25px]">
                    <Link to='/'>
                        <img src="./Images/logo.png" className='w-[115px] h-[35px] m-[5px]' alt="Logo" />
                    </Link>
                </div>
                <div className="flex flex-col items-center p-1 hover:border hover:border-white cursor-text">
                    <h3 className='text-white'>Deliver to RRJ</h3>
                    <div className="flex items-center">
                        <LocationOnIcon className='text-white relative bottom-3' />
                        <p className='text-white'>Ghaziabad 201010</p>
                    </div>
                </div>
                <div className="flex items-center rounded-md max-w-[585px] w-[585px] ">
                    <button
                        className='bg-[#f2f2f2] hover:bg-[#dddddd] p-2 pl-4 pr-4 rounded-l-md'
                    >
                        All
                    </button>
                    <input
                        type="text"
                        placeholder='Search Amazon'
                        className='p-2 outline-none border-0 rounded-r grow'
                    />
                    <SearchIcon className='relative right-[30px]' />
                </div>
                <Link to='/login'>
                    <div className='text-white p-2 cursor-pointer hover:border hover:border-white'>
                        <p>Hello, <span className='font-bold'>User</span></p>
                        <p>Accounts & Lists</p>
                    </div>
                </Link>
                <div className='text-white p-2 cursor-pointer hover:border hover:border-white'>
                    <p>Returns </p>
                    <p className='font-bold'>& Orders</p>
                </div>
                <div className="hover:border hover:border-white p-2 cursor-pointer">
                    <ShoppingCartIcon className=' text-6xl text-white' />
                </div>
            </header>

            <nav className="flex items-center bg-[#232F3E] p-2 max-h-10">
                <div
                    className="flex items-center text-white gap-2 w-[75px] cursor-pointer p-1 
                 hover:border hover:border-white  mt-[5px] mb-[6px]">
                    <MenuIcon />
                    <p className='text-white mr-4'>All</p>
                </div>
                <ul className='list-none flex items-center gap-4 text-white'>
                    <li className='hover:border hover:border-white cursor-pointer p-1 '>Today's Deals</li>
                    <li className='hover:border hover:border-white cursor-pointer p-1 '>Buy Again</li>
                    <li className='hover:border hover:border-white cursor-pointer p-1 '>Customer Service</li>
                    <li className='hover:border hover:border-white cursor-pointer p-1 '>Registry</li>
                    <li className='hover:border hover:border-white cursor-pointer p-1 '>Gift Cards </li>
                    <li className='hover:border hover:border-white cursor-pointer p-1 '>Sell</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
