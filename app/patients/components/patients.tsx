import Image from "next/image";

import DownArrowIcon from '@/public/assets/icons/down-arrow-icon.svg'
import SearchIcon from '@/public/assets/icons/search-icon.svg'

import PageTitle from "@/app/shared/components/PageTitle";
import PatientsTable from "@/app/patients/components/PatientsTable";

const Patients = () => {

    return (
        <>
            <PageTitle pathTitle='Patients'/>

            {/* Patients */}
            <div className='container mx-auto my-5'>
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center justify-center space-x-2 cursor-pointer'>
                        <p className='text-xs font-light text-500'>Sort by</p>
                        <p className='font-semibold text-gray-700 text-sm'>Hospital ID</p>
                        <Image src={DownArrowIcon} alt='down arrow icon'/>
                    </div>
                    <div className='border  flex items-center space-x-2 px-3 py-1 w-1/5'>
                        <Image src={SearchIcon} alt='search icon'/>
                        <input type="text" placeholder='Search by patient name, id'
                               className='focus:outline-none bg-transparent placeholder:font-light text-sm'/>
                    </div>
                </div>
                <PatientsTable/>
            </div>
        </>
    );
}

export default Patients;