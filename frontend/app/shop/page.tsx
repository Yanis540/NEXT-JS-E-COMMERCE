'use client'
import SidebarShop from './components/SidebarShop';
import ResultsShop from './components/ResultsShop';
import useSearchProducts from './hooks/use-search-products';
import useGetUser from '@/hooks/use-get-user';

interface ShopProps {

};

function Shop({}:ShopProps) {
    const {
        register,errors,isLoading, 
        Submit, setValue, watched_categories, 
        products 
    } = useSearchProducts();
    useGetUser();
    return (
        <div className="text-dark-gray pt-[64px] h-[calc( 100% - 64px )] h-screen max-h-screen w-full px-5 overflow-y-scroll scrollbar-hide">
            <div className='flex-1 flex flex-col md:flex-row  h-full w-full  '>
                {/* SideBar */}
                <SidebarShop 
                    register={register} 
                    isLoading={isLoading} 
                    Submit={Submit} 
                    errors={errors} 
                    setValue={setValue}
                    watched_categories ={watched_categories}
                /> 
                {/* results */}
                <ResultsShop 
                    products={products} 
                    isLoading={isLoading} 
                /> 
           </div>
        </div>
    );
};

export default Shop;