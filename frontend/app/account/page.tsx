import React from 'react';

interface AccountProps {

};

function Account({}:AccountProps) {
    return (
        <div className="flex-1 flex flex-col text-dark-gray pt-[64px] max-h-screen w-full px-5 overflow-y-hidden ">
            <div className='flex-1 h-[calc(100% -64px )] w-full overflow-y-scroll scrollbar-hide '>
                Account
           </div>
        </div>
    );
};

export default Account;