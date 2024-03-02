import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div>
            <header className='flex items-center sticky top-0 bg-[#131921]'>
                <img src="./Images/logo.png" className='w-[115px] h-[40px] m-3 hover:border-white cursor-pointer' />
                <div className="flex items-center rounded-md  max-w-[585px] w-[585px]">
                    <button
                        className='bg-[#f2f2f2] hover:bg-[#dddddd]
                         p-2 pl-4 pr-4 rounded-l-md
                         '
                    >
                        All
                    </button>
                    <input
                        type="text"
                        placeholder='Search Amazon'
                        className='p-2 outline-none border-0 rounded-r grow'
                    />
                    <SearchIcon />
                </div>
            </header >
        </div>
    )
}

export default Header