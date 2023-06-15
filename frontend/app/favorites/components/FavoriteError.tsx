import Link from 'next/link';
import React from 'react';

interface FavoriteErrorProps {

};

function FavoriteError({}:FavoriteErrorProps) {
    return (
        <div className=" flex flex-col items-center justify-center  w-[70%] h-[400px]  bg-dark-gray text-white rounded-lg ">
           
           <h2 className='text-white text-xl md:text-3xl lg:text-4xl'>An error occured ... </h2>
           <span className="text-white text-md font-medium leading-6">back to </span>
           <Link href="/" className="bg-white text-dark-gray rounded-lg  border-[1px] border-white  hover:bg-transparent hover:text-white transition-all duration-300 p-3  mt-4 ">Home</Link>

        </div>
    );
};

export default FavoriteError;