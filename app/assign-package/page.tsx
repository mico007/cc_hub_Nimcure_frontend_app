
'use client'

import React, {useState} from "react";

import Navbar from "@/app/shared/components/Navbar";
import PageTitle from "@/app/shared/components/PageTitle";
import PatientInfo from "@/app/view-patient/components/PatientInfo";
import DeliveryInfo from "@/app/view-patient/components/DeliveryInfo";
import Button from "@/app/shared/components/Button";
import Radio from "@/app/shared/components/Radio";

const AssignPackageToPatient = () => {

    const [activeTab, setActiveTab] = useState('Set Drug Cycle/Length');

    const tabs = [
        {id: 'Set Drug Cycle/Length', label: 'Set Drug Cycle/Length'},
        {id: 'Assign Dispatch Rider', label: 'Assign Dispatch Rider'},
        {id: 'Scan Package', label: 'Scan Package'},
    ];

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
                               <h3 className='text-gray-700 text-xs font-light pl-8 py-4 cursor-pointer'>Hospital ID</h3>
                               <span className='rounded-full text-gray-700 mr-8 text-xs '>1AFHFH093</span>
                           </div>
                           <div className='flex items-center justify-between'>
                               <h3 className='text-gray-700 text-xs font-light pl-8 py-4 cursor-pointer'>Name</h3>
                               <span className='rounded-full text-gray-700 mr-8 text-xs '>Oluwaseun Aregbesola</span>
                           </div>
                           <div className='flex items-center justify-between'>
                               <h3 className='text-gray-700 text-xs font-light pl-8 py-4 cursor-pointer'>Phone Number</h3>
                               <span className='rounded-full text-gray-700 mr-8 text-xs '>+2347068642920</span>
                           </div>
                           <div className='flex items-center justify-between'>
                               <h3 className='text-gray-700 text-xs font-light pl-8 py-4 cursor-pointer'>Next Delivery Date</h3>
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
                               {tabs.map((tab) => (
                                   <div key={tab.id} onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center justify-center text-sm space-x-3 ${
                                            activeTab === tab.id
                                                ? 'border-b-2 border-outlineBlue text-outlineBlue'
                                                : 'text-gray-700 font-light hover:text-black'
                                        }`}>

                                       <Radio id={tab.id} label={tab.label} activeTab={activeTab}/>

                                   </div>
                               ))}
                           </div>
                       </div>
                       {activeTab === 'Patient Information' && <PatientInfo/>}
                       {activeTab === 'Delivery Information' && <DeliveryInfo/>}

                       <div className='border-t p-5'>
                           <div className='flex justify-end'>
                           <Button btnText='Next' type='button' disabled={true} rootClassName='text-sm disabled:cursor-not-allowed opacity-45' />
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </>
    )
}

export default AssignPackageToPatient