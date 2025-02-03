
import Image from "next/image";

import DownArrowIcon from "@/public/assets/icons/down-arrow-icon.svg";
import SearchIcon from "@/public/assets/icons/search-icon.svg";

import PageTitle from "@/app/shared/components/PageTitle";
import DeliveriesTable from "@/app/deliveries/components/DeliveriesTable";

const Deliveries = () => {
    return (
        <>
            <PageTitle pathTitle='Deliveries'/>

            <div className='container mx-auto my-5'>

                <div className='flex items-start justify-between'>

                    {/* Left Section */}
                    <div className='w-1/6 mt-12'>
                        <div className='bg-white mb-8'>
                            <h3 className='text-gray-700 pl-5 py-3 border-b text-xs cursor-pointer'>
                                Unassigned Deliveries
                            </h3>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-gray-700 text-xs font-light pl-8 py-3 cursor-pointer'>Paid</h3>
                                <span className='border px-1 py-0.5 rounded-full text-white mr-4 text-xs bg-redColor'>12</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-gray-700 text-xs font-light pl-8 py-3 cursor-pointer'>Unpaid</h3>
                                <span className='border px-1.5 py-0.5 rounded-full text-white mr-4 text-xs bg-redColor'>8</span>
                            </div>
                        </div>
                        <div className='bg-white'>
                            <h3 className='text-gray-700 pl-5 py-3 border-b text-xs cursor-pointer'>
                                Assigned Deliveries
                            </h3>
                            <h3 className='text-gray-700 text-xs font-light pl-8 py-3 cursor-pointer'>Pending</h3>
                            <h3 className='  bg-lightBlueBG text-outlineBlue px-8 py-3 border-r-2 border-outlineBlue text-xs cursor-pointer'>
                                Successful
                            </h3>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-gray-700 text-xs font-light pl-8 py-3 cursor-pointer'>Failed</h3>
                                <span className='border px-1 py-0.5 rounded-full text-white mr-4 text-xs bg-redColor'>12</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className='w-4/5'>
                        <div className='flex items-center justify-between mb-5'>
                            <div className='flex items-center justify-center space-x-2 cursor-pointer'>
                                <p className='text-xs font-light text-500'>Sort by</p>
                                <p className='font-semibold text-gray-700 text-sm'>Most Recent</p>
                                <Image src={DownArrowIcon} alt='down arrow icon'/>
                            </div>
                            <div className='border  flex items-center space-x-2 px-3 py-1'>
                                <Image src={SearchIcon} alt='search icon'/>
                                <input type="text" placeholder='Search by package code'
                                       className='focus:outline-none bg-transparent placeholder:font-light text-sm'/>
                            </div>
                        </div>
                        <DeliveriesTable/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deliveries;