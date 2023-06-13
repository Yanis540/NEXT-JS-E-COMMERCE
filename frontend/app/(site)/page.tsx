'use client'
import { useProducts } from './hooks/use-products'
import { useSession } from 'next-auth/react';
import HorizontalScroll from '@/components/Scroll/HorizontalScroll';
import useGetUser from '@/hooks/use-get-user';
export default function Home() {

  const {data:dataProducts={products:[]},isLoading,error} = useProducts();
  const {data:session} = useSession();
  useGetUser(); 

  
  return (
    <>
      <div className=" text-dark-gray pt-[64px] min-h-screen h-[calc( 100% - 64px )] w-full px-5 overflow-y-scroll scrollbar-hide">
        <div className="mt-3 md:mt-8 flex justify-center items-center w-full ">

          <h2 className="text-xl md:text-3xl">{session?.user?.name?'Welcome Back '+session.user.name:'Welcome'}</h2>
        </div>
        {/* Our Products */}
        <hr className="flex items-center text-light-gray my-5 text-center w-[70%] mx-auto max-w-[1200px] " /> 
        
        <HorizontalScroll  label={"Our Products"} products={dataProducts.products} /> 

        <hr className="flex items-center text-light-gray my-5 text-center w-[70%] mx-auto max-w-[1200px] " /> 
        <div className="mt-3 md:mt-8 flex justify-center items-center w-[70%] mx-auto max-w-[1200px]  ">
          <h2 className="text-xl md:text-3xl">Our Categories</h2>
        </div>
        <HorizontalScroll  label={"Men"} products={dataProducts.products} /> 
        <HorizontalScroll  label={"Jackets"} products={dataProducts.products} /> 
        <HorizontalScroll  label={"T-shirts"} products={dataProducts.products} /> 

      <h2 className="bg-gray-300 text-dark-gray text-center py-5 rounded-t-lg ">Yanis Shop &#169;2023</h2>
      </div>
    </>
  )
}
