'use client'
import useGetUser from '@/hooks/use-get-user';
import React from 'react';
import UpdateForm from './components/Form/UpdateForm';

interface AccountProps {

};

function Account({}:AccountProps) {
    return (
        <div className="flex-[0.9] overflow-y-scroll scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-transparent scrollbar-rounded-md rounded-lg p-4  border-[0.05px] border-gray-300 bg-light-gray-transparent">
            {/* Form for name and image */}
            <h2 className="capitalize w-full font-bold ">Account informations </h2>
            {/* Form for password */}
            <UpdateForm /> 
        </div>
    );
};

export default Account;