'use client'

import React, {useState} from "react";
import Image from "next/image";

import Navbar from "@/app/shared/components/Navbar";
import PageTitle from "@/app/shared/components/PageTitle";
import Button from "@/app/shared/components/Button";
import SetDrugCycle from "@/app/assign-package/components/SetDrugCycle";
import AssignDispatchRider from "@/app/assign-package/components/AssignDispatchRider";
import ScanPackage from "@/app/assign-package/components/ScanPackage";
import BarCodeScanning from "@/app/assign-package/components/BarCodeScanning";
import ApprovedIcon from "@/public/assets/icons/approved-icon.svg";
import Modal from "@/app/shared/components/Modal";
import {useRouter} from "next/navigation";
import Radio from "@/app/shared/components/Radio";

const AssignPackageToPatient = () => {

    const [activeTab, setActiveTab] = useState('Set Drug Cycle/Length');
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [showBarCodeScanning, setShowBarCodeScanning] = useState(false);
    const [confirmAssigningPackage, setConfirmAssigningPackage] = useState(false);
    const [drugCycleTabData, setDrugCycleTabData] = useState<string[]>([]);
    const [dispatchRiderTabData, setDispatchRiderTabData] = useState<string[]>([]);

    const router = useRouter();


    return (
        <>
            <Navbar/>

            <PageTitle
                pathTitle='Patients / View Patient / Assign Package to Patient'
                noButton={true}
            />

            <div className='container mx-auto my-8'>
                <div className='flex items-start justify-between'>

                    {/* Left Section */}
                    <div className='w-1/4'>
                        <div className='bg-white '>
                            <h3 className='text-gray-700 pl-8 py-4 border-b text-sm cursor-pointer'>
                                Patient Information
                            </h3>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-gray-700 text-xs font-light pl-8 py-4 cursor-pointer'>Hospital
                                    ID</h3>
                                <span className='rounded-full text-gray-700 mr-8 text-xs '>1AFHFH093</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-gray-700 text-xs font-light pl-8 py-4 cursor-pointer'>Name</h3>
                                <span className='rounded-full text-gray-700 mr-8 text-xs '>Oluwaseun Aregbesola</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-gray-700 text-xs font-light pl-8 py-4 cursor-pointer'>Phone
                                    Number</h3>
                                <span className='rounded-full text-gray-700 mr-8 text-xs '>+2347068642920</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-gray-700 text-xs font-light pl-8 py-4 cursor-pointer'>Next Delivery
                                    Date</h3>
                                <span className='rounded-full text-gray-700 mr-8 text-xs '>12th September 2020</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-gray-700 text-xs font-light pl-8 py-4 cursor-pointer'>Location</h3>
                                <span className='rounded-full text-gray-700 mr-8 text-xs '>Yaba, Lagos</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className='bg-white w-2/3'>
                        <div className='border-b px-12'>
                            <div className='flex items-center space-x-12'>

                                {drugCycleTabData.length === 1 ? (
                                    <>
                                        <div className="flex gap-2 items-start py-4">
                                            <div className="grid place-items-center mt-1 cursor-pointer">
                                                <Image
                                                    src={ApprovedIcon}
                                                    alt='Approved icon'
                                                />
                                            </div>
                                            <span className="text-start cursor-pointer text-greenColor">Set Drug Cycle/Length</span>
                                        </div>
                                        <div className={`${activeTab === 'Assign Dispatch Rider' && 'border-b border-outlineBlue'} `}><Radio id='Assign Dispatch Rider' label='Assign Dispatch Rider' activeTab={activeTab}/></div>
                                        <div className={`${activeTab === 'Scan Package' && 'border-b border-outlineBlue'} `}><Radio id='Scan Package' label='Scan Package' activeTab={activeTab}/></div>
                                    </>
                                ) : dispatchRiderTabData.length === 1 ? (
                                    <>
                                        <div className="flex gap-2 items-start py-4">
                                            <div className="grid place-items-center mt-1 cursor-pointer">
                                                <Image
                                                    src={ApprovedIcon}
                                                    alt='Approved icon'
                                                />
                                            </div>
                                            <span className="text-start cursor-pointer text-greenColor">Set Drug Cycle/Length</span>
                                        </div>
                                        <div className="flex gap-2 items-start py-4">
                                            <div className="grid place-items-center mt-1 cursor-pointer">
                                                <Image
                                                    src={ApprovedIcon}
                                                    alt='Approved icon'
                                                />
                                            </div>
                                            <span className="text-start cursor-pointer text-greenColor">Assign Dispatch Rider</span>
                                        </div>
                                        <div className={`${activeTab === 'Scan Package' && 'border-b border-outlineBlue'} `}><Radio id='Scan Package' label='Scan Package' activeTab={activeTab}/></div>
                                    </>
                                ) : ''}

                                {
                                    (drugCycleTabData.length === 0 && activeTab === 'Set Drug Cycle/Length') ? (
                                        <>
                                            <div className='border-b border-outlineBlue'>
                                                <Radio id='Set Drug Cycle/Length' label='Set Drug Cycle/Length' activeTab={activeTab}/>
                                            </div>
                                            <Radio id='Assign Dispatch Rider' label='Assign Dispatch Rider' activeTab={activeTab}/>
                                            <Radio id='Scan Package' label='Scan Package' activeTab={activeTab}/>
                                        </>
                                    ) :  (
                                        ''
                                    )
                                }

                            </div>
                        </div>

                        {/* Set Drug Cycle Tab */}

                        {activeTab === 'Set Drug Cycle/Length' &&
                            <SetDrugCycle setState={setIsBtnDisabled} setDrugCycleTabData={setDrugCycleTabData} setDispatchRiderTabData={setDispatchRiderTabData}/>}

                        {/* Assign Dispatch Rider Tab */}

                        {activeTab === 'Assign Dispatch Rider' && <AssignDispatchRider setState={setIsBtnDisabled} setDispatchRiderTabData={setDispatchRiderTabData} setDrugCycleTabData={setDrugCycleTabData}/>}

                        {/* Scan Package Tab */}

                        {(activeTab === 'Scan Package' && !showBarCodeScanning) && (
                            <ScanPackage setShowBarcodeScanning={setShowBarCodeScanning}/>)}

                        {showBarCodeScanning && <BarCodeScanning/>}

                        {/* Action Buttons */}

                        <div className='border-t p-5'>
                            {activeTab === 'Scan Package' ? (
                                <div className='flex items-center justify-between'>
                                    <div
                                        className="border border-outlineBlue px-4 py-2 text-sm font-semibold text-center text-outlineBlue cursor-pointer ">
                                        <span>Back</span>
                                    </div>
                                    <Button
                                        onButtonClick={() => setConfirmAssigningPackage(true)}
                                        btnText='Assign Package'
                                        type='button'
                                        disabled={!showBarCodeScanning}
                                        rootClassName='text-sm disabled:cursor-not-allowed disabled:opacity-45'
                                    />
                                </div>
                            ) : (
                                <div className='flex justify-end'>
                                    <Button
                                        onButtonClick={() => {
                                            if (drugCycleTabData.length === 1) {
                                                setActiveTab('Assign Dispatch Rider')
                                                setIsBtnDisabled(true)
                                            }

                                            if (dispatchRiderTabData.length === 1) setActiveTab('Scan Package')
                                        }}
                                        btnText='Next'
                                        type='button'
                                        disabled={isBtnDisabled}
                                        rootClassName='text-sm disabled:cursor-not-allowed disabled:opacity-45'
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {confirmAssigningPackage && (
                <Modal
                    title='Assign Package 5673AD'
                    content={
                        <div className='mb-10'>
                            <p className='text-gray-700 text-sm'>
                                Are you sure you want to assign
                            </p>
                            <p className='text-gray-700 text-sm'>package <span
                                className='font-semibold'>5673AD</span> to <span className='font-semibold'>Oluwaseun Aregbesola</span>?
                            </p>
                        </div>
                    }
                    isShown={confirmAssigningPackage}
                    isHidden={() => setConfirmAssigningPackage(false)}
                    onAssignBtnClick={() => router.push('/deliveries')}
                    onBackBtnClick={() => setConfirmAssigningPackage(false)}
                    isBtnDisabled={isBtnDisabled}
                    showBarCodeScanning={showBarCodeScanning}
                    size='medium'
                />
            )}
        </>
    )
}

export default AssignPackageToPatient