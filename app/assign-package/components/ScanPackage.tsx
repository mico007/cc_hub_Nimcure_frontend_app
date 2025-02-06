
import React from "react";
import Image from 'next/image'
import {useRouter} from "next/navigation";

import BarcodeIcon from '@/public/assets/icons/barcode-icon.svg'
import Divider from "@/app/shared/components/Divider";

interface IProps {
    setShowBarcodeScanning: React.Dispatch<React.SetStateAction<boolean>>
}

const ScanPackage = ({setShowBarcodeScanning, }:IProps) => {

    const router = useRouter();

    return (
        <div className='mt-8 mb-8 mx-12'>
            <h3 className='text-center text-gray-700 font-light mb-8'>
                Scan a package to assign it to <span className='font-semibold'>Oluwaseun Aregbesola</span>
            </h3>
            <div className='flex items-center justify-center space-x-6'>
                <div className='flex flex-col'>
                    <Image className='mb-6' src={BarcodeIcon} alt='barcode icon'/>
                    <button type='button' onClick={() => setShowBarcodeScanning(true)} className="border-2 border-transparent px-3 py-1.5 text-center text-white bg-buttonBG">
                        Scan Package
                    </button>
                </div>

                <Divider text='OR'/>

                <div className='flex flex-col'>
                    <div className='mb-28'>
                        <div className='flex flex-col items-start text-xs font-light text-gray-700 mb-3'>
                            <span>Trouble scanning QR Code?</span>
                            <span>Enter manually</span>
                        </div>
                        <input
                            type='text'
                            placeholder='Enter Code'
                            className=' border border-borderColor bg-transparent py-2 px-3 text-gray-500 placeholder:text-xs mb-2 focus:outline-none'
                        />
                    </div>
                    <div onClick={() => router.push('/deliveries')} className="border border-outlineBlue px-4 py-2 text-sm font-semibold text-center text-outlineBlue cursor-pointer ">
                        <span>Submit Code</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScanPackage