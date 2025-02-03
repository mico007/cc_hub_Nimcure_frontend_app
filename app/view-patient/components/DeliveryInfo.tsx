import Image from "next/image";
import EditIcon from "@/public/assets/icons/edit-icon.svg";


const DeliveryInfo = () => {
    return (

        <>
            {/* Delivery Info */}
            <div className='flex items-start justify-between px-8 py-10'>
                <div className=''>
                    <h3 className='text-gray-700 '>Delivery Information</h3>
                    <p className='text-sm text-gray-500 font-light mb-3'>
                        Information about delivery status
                    </p>
                    <button type='button'
                            className="border border-outlineBlue px-4 py-1 text-xs text-outlineBlue">
                        <div className='flex items-center justify-center space-x-2'>
                            <Image src={EditIcon} alt='edit icon'/>
                            <span className='text-sm text-buttonBG'>Edit Delivery Information</span>
                        </div>
                    </button>
                </div>
                <div className='w-1/2'>
                    <div className="border border-borderColor bg-infoBG px-4 py-1 mb-4">
                        <p className='text-xs font-light text-gray-700'>Next Delivery Date</p>
                        <h3 className='text-sm text-gray-700'>14th November 2020</h3>
                    </div>
                    <div className="border border-borderColor bg-infoBG px-4 py-1 mb-4">
                        <p className='text-xs font-light text-gray-700'>Delivery Area</p>
                        <h3 className='text-sm text-gray-700'>Yaba, Lagos</h3>
                    </div>
                    <div className="border border-borderColor bg-infoBG px-4 py-1 mb-4">
                        <p className='text-xs font-light text-gray-700'>Delivery Address</p>
                        <h3 className='text-sm text-gray-700'>19, Mohammed Abiola street, Akoka, Lagos</h3>
                    </div>
                    <div className="border border-borderColor bg-infoBG px-4 py-1 w-1/3">
                        <p className='text-xs font-light text-gray-700'>Payment Status</p>
                        <h3 className='text-sm text-gray-700'>Paid</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeliveryInfo;