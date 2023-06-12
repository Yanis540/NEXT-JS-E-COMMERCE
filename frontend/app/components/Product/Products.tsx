import { FullProduct } from '@/types';
import React from 'react';
import Product from './Product';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
interface ProductsProps {
    label: string 
    products : FullProduct []
};  

function Products({label,products}:ProductsProps) {
    
    return (
        <div className="flex flex-col rounded py-5  px-2 mb-3 h-full w-[70%] mx-auto max-w-[1200px] ">
            {/* Products */}
            <h2 className="text-left text-4xl text-dark-blue">{label}</h2>
            {
                products?.map((product)=>(
                    <Product key={product.id} product = {product} /> 
                ))
            }
        </div>
    );
};

export default Products;