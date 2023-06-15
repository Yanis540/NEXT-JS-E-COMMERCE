import { FullProduct } from '@/types';
import React from 'react';
import Product from './Product';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import ProductSkeleton from './ProductSkeleton';
import clsx from 'clsx';
interface ProductsProps {
    products : FullProduct []
    isLoading : boolean 
    className?: string 
};  

function Products({products,isLoading , className}:ProductsProps) {
    
    return (
        <div className={clsx(className,"grid grid-cols-1 items-start md:grid-col-2 lg:grid-cols-3 gap-[20px] mx-auto  rounded  pt-3  px-2 mb-3 h-full max-w-[1500px]")}>
            {/* Products */}
            {
                isLoading?
                    Array.from({length:50}).map((_,i)=>(
                        <ProductSkeleton key={i} /> 
                    ))
                :   products?.map((product)=>(
                        <Product key={product.id} product = {product} /> 
                    ))
            }
        </div>
    );
};

export default Products;