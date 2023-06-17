'use client'
import { useParams } from 'next/navigation';
import React from 'react';
import { useProduct } from './hooks/use-product';
import ProductSkeleton from '@/components/Product/ProductSkeleton';
import ProductNotFound from './components/ProductNotFound';
import ProductDetails from './components/ProductDetails';
import useGetUser from '@/hooks/use-get-user';

interface ProductSearchProps {

};

function ProductSearch({}:ProductSearchProps) {
    const params = useParams();
    const productId = (params?.productId??'') as string ; 
    const {product,isLoading,error} = useProduct(productId);
    useGetUser();
    
    return (
        <div className="text-dark-gray pt-[64px] h-[calc( 100% - 64px )] h-screen max-h-screen w-full px-5 overflow-y-scroll scrollbar-hide">
            <div className='flex-1 flex flex-col  h-full w-full'>
                {
                    isLoading &&
                    <div className="flex flex-col items-center justify-center w-full h-full ">
                        <ProductSkeleton 
                            circular={120}
                            rectangular_height={200}
                            rectangular_width={600}
                        /> 
                    </div>
                }

                {
                    !isLoading && !!error && <ProductNotFound /> 
                }
                {
                    !isLoading && ! error && product && (
                        <ProductDetails product = {product} /> 
                    )
                }
           </div>
        </div>
    );
};

export default ProductSearch;