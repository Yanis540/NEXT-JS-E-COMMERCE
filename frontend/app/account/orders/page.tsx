"use client"
import { useOrders } from './hooks/use-orders';
import { CircularProgress } from '@mui/material';
import {BiMessageError} from "react-icons/bi";
import {RiSecurePaymentFill} from "react-icons/ri";
import Order from './components/Order';
interface OrdersProps {

};

function Orders({}:OrdersProps) {
    const {orders,isLoading,error} = useOrders();
  
    return (
        <div className="
            flex-[0.9] min-h-full rounded-lg p-5  border-[0.05px] 
            border-gray-300 bg-light-gray-transparent overflow-y-scroll 
            scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-white 
            scrollbar-rounded-md
        ">
            {
                isLoading && (
                    <div className="flex flex-col items-center justify-center h-full "><CircularProgress /> </div>
                )
            }    
            {
                !isLoading&& !!error&& (
                    <div className="flex flex-col items-center justify-center h-full w-full ">
                        <div className='flex flex-col items-center justify-center gap-[20px] mx-auto rounded-lg  py-12 w-[70%] max-w-[800] text-dark-gray'>
                            <h2 className="font-bold  text-xl md:text-2xl lg:text-4xl">An error occured, please try later !  </h2>
                            <BiMessageError className="cursor-pointer" size={32} /> 
                        </div>
                    </div>
                )
            }
            {
                !isLoading && !error && (

                    <div className="flex flex-col gap-3 h-full">
                        <h2 className=" font-bold text-xl md:text-2xl lg:text-4xl capitalize">Your orders  </h2>
                        {
                          orders?.length == 0 ? (
                            <div className="flex-1 flex flex-col items-center justify-center h-full w-full">
                                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">You do not have orders </h2>
                                <RiSecurePaymentFill size={32} className='cursor-pointer'/> 
                            </div>
                          ):(
                            <div className="flex-1 flex flex-col gap-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-dark-gray scrollbar-track-white scrollbar-rounded-md">
                                {
                                    [...orders,...orders].map((order,index)=>(
                                        <Order key={index} order={order} /> 
                                    ))
                                }
                            </div>
                          )
                        }
                        
                    </div>
                )
            }
        </div>
    );
};

export default Orders;