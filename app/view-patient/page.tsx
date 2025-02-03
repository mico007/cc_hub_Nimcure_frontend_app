'use client'

import {useState} from "react";
import {useRouter} from "next/navigation";

import PageTitle from "@/app/shared/components/PageTitle";
import Navbar from "@/app/shared/components/Navbar";
import PatientInfo from "@/app/view-patient/components/PatientInfo";
import DeliveryInfo from "@/app/view-patient/components/DeliveryInfo";
import Button from "@/app/shared/components/Button";

const ViewPatient = () => {

    const [activeTab, setActiveTab] = useState('Patient Information');

    const router = useRouter()

    const tabs = [
        {id: 'Patient Information', label: 'Patient Information'},
        {id: 'Delivery Information', label: 'Delivery Information'},
    ];

    return (
        <>
            <Navbar/>

            <PageTitle
                pathTitle='Patients / View Patient'
                btnText='Assign Package to Patient'
                noIcon={true}
                leftIconLabel={true}
                onButtonClick={() => router.push('/assign-package')}
            />

            <div className='container mx-auto my-8'>
                <div className='flex items-start justify-between'>

                    {/* Left Section */}
                    <div className='bg-white w-1/6'>
                        <h3 className='text-gray-700 text-xs font-light pl-5 py-3 cursor-pointer'>Patient</h3>
                        <h3 className='  bg-lightBlueBG text-outlineBlue px-5 py-3 border-r-2 border-outlineBlue text-xs cursor-pointer'>
                            Rider&#39;s Profile
                        </h3>
                        <h3 className='text-gray-700 text-xs font-light pl-5 py-3 cursor-pointer'>Delivery History</h3>
                    </div>

                    {/* Right Section */}
                    <div className='bg-white w-4/5'>
                        <div className='flex items-center space-x-20 border-b px-8'>
                            <div className='flex items-center space-x-3'>
                                <h3 className='text-sm text-gray-600'>Payment Status</h3>
                                <span className='px-4 py-1 text-xs  bg-lightGreen text-greenColor'>
                                    Paid
                                </span>
                            </div>
                            <div className='flex items-center space-x-10'>
                                {tabs.map((tab) => (
                                    <h3
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`py-4 text-sm cursor-pointer ${
                                            activeTab === tab.id
                                                ? 'border-b-2 border-outlineBlue text-outlineBlue'
                                                : 'text-gray-700 font-light hover:text-black'
                                        }`}
                                    >
                                        {tab.label}
                                    </h3>
                                ))}
                            </div>
                        </div>
                        {activeTab === 'Patient Information' && <PatientInfo/>}
                        {activeTab === 'Delivery Information' && <DeliveryInfo/>}

                        <div className='border-t p-5'>
                            <div className='flex justify-end'>
                                <Button btnText='Save Changes' type='button' disabled={true} rootClassName='text-sm disabled:cursor-not-allowed opacity-45' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewPatient;