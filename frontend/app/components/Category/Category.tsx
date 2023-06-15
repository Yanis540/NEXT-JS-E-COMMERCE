'use client'
import Link from 'next/link';
import { Category } from '@prisma/client';
interface CategoryProps {
    category : Category
};

function Category({category}:CategoryProps) {
   
    return (
        <div  className="inline-block px-3">
            <div className="
                flex flex-col items-center justify-center py-5
                w-96 h-96 max-w-xs overflow-hidden border-[0.05px] border-[#dddddd] rounded-lg shadow-xs bg-white hover:shadow-md transition-shadow duration-300 ease-in-out"
            >
                <Link href='/shop' className=" text-xl md:text-3xl font-medium leading-7">{category.name}</Link>
            </div>
        </div>
    );
};

export default Category;