import {useState} from "react";
import Image from "next/image";

import ScanningIcon from "@/public/assets/icons/scanning-icon.svg";
import QRCodeApprovedIcon from "@/public/assets/icons/white-approved-icon.svg";

const BarCodeScanning = () => {

    const [showPackageCode, setShowPackageCode] = useState(false);

    setTimeout(() => {
        setShowPackageCode(true);
    }, 3000);

    return (
        <div className='my-8 mx-12'>
            <h3 className='text-center text-gray-700 font-light mb-16'>
                Scan a package to assign it to <span className='font-semibold'>Oluwaseun Aregbesola</span>
            </h3>

            {showPackageCode ? (
                <div className='flex items-center flex-col mb-20'>
                    <h3 className='text-gray-700 text-sm font-light mb-2 mr-44'>Package Code</h3>
                    <div className='border-2 border-transparent bg-infoBG py-2.5 px-5 w-1/3 mb-2'>
                        <span className='text-gray-500 text-xl'>5673AD</span>
                    </div>
                    <span className='cursor-pointer text-redColor text-sm ml-48'>X Remove</span>
                </div>
            ) : (
                <div className='flex items-center flex-col'>
                    {/* Scanned QRCode */}
                    <div className='relative h-44 flex justify-center items-center rounded-lg mb-8'>
                        <Image src={ScanningIcon} alt='scanning icon'/>
                        <div
                            className="absolute bg-greenColor text-white w-12 h-12 rounded-full flex justify-center items-center">
                            <Image src={QRCodeApprovedIcon} alt='Scanned QRCode icon'/>
                        </div>
                    </div>

                    <span className="text-gray-700 text-sm font-semibold text-center">
                        Package successfully scanned
                    </span>
                </div>
            )}
        </div>
    )
}

export default BarCodeScanning