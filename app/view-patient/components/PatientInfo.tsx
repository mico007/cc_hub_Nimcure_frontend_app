import Image from "next/image";

import EditIcon from "@/public/assets/icons/edit-icon.svg";
import DownArrowIcon from "@/public/assets/icons/down-arrow-icon.svg"


const PatientInfo = () => {
    return (

        <>
            {/* Patient Personal Info */}
            <div className='flex items-start justify-between px-8 py-10'>
                <div className=''>
                    <h3 className='text-gray-700 '>Patient’s Information</h3>
                    <p className='text-sm text-gray-500 font-light mb-3'>Personal information about
                        Patient.</p>
                    <button type='button'
                            className="border border-outlineBlue px-4 py-1 text-xs text-outlineBlue">
                        <div className='flex items-center justify-center space-x-2'>
                            <Image src={EditIcon} alt='edit icon'/>
                            <span className='text-sm text-buttonBG'>Edit Patient’s Information</span>
                        </div>
                    </button>
                </div>
                <div className='w-1/2'>
                    <div className="border border-borderColor bg-infoBG px-4 py-1 mb-4">
                        <p className='text-xs font-light text-gray-700'>Hospital ID</p>
                        <h3 className='text-sm text-gray-700'>23AB456789</h3>
                    </div>
                    <div className='flex items-center justify-between mb-4'>
                        <div className="border border-borderColor bg-infoBG px-4 py-1 w-1/3">
                            <p className='text-xs font-light text-gray-700'>First Name</p>
                            <h3 className='text-sm text-gray-700'>Oluwaseun</h3>
                        </div>
                        <div className="border border-borderColor bg-infoBG px-4 py-1 w-1/3">
                            <p className='text-xs font-light text-gray-700'>Last Name</p>
                            <h3 className='text-sm text-gray-700'>Aregbesola</h3>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mb-4'>
                        <div className="border border-borderColor bg-infoBG px-4 py-1 mb-4 w-1/3">
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p className='text-xs font-light text-gray-700'>Gender</p>
                                    <h3 className='text-sm text-gray-700'>Male</h3>
                                </div>
                                <Image className='cursor-pointer' src={DownArrowIcon} alt='Down arrow icon' />
                            </div>
                        </div>
                        <div className="border border-borderColor bg-infoBG px-4 py-1 mb-4 w-1/3">
                            <p className='text-xs font-light text-gray-700'>Phone Number</p>
                            <h3 className='text-sm text-gray-700'>+2348123456789</h3>
                        </div>
                    </div>
                    <div className="border border-borderColor bg-infoBG px-4 py-1 ">
                        <p className='text-xs font-light text-gray-700'>Email Address</p>
                        <h3 className='text-sm text-gray-700'>seunregbesola@gmail.com</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PatientInfo;