'use client';

import {useState} from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

import HospitalIcon from "@/public/assets/icons/hospital-icon.svg";
import OverviewIcon from "@/public/assets/icons/overview-icon.svg";
import DeliveriesIcon from "@/public/assets/icons/deliveries-icon.svg";
import ActivePatientsIcon from "@/public/assets/icons/patients-icon.svg";
import RidersIcon from "@/public/assets/icons/riders-icon.svg";
import AdminIcon from "@/public/assets/icons/admin-icon.svg";
import ProfileIcon from "@/public/assets/icons/profile-icon.svg";
import DownArrowIcon from "@/public/assets/icons/down-arrow-icon.svg";
import LogoutIcon from "@/public/assets/icons/logout-icon.svg";
import ActiveDeliveryIcon from "@/public/assets/icons/active-delivery-icon.svg";
import PatientIcon from "@/public/assets/icons/none-active-patient-icon.svg"

import {Dropdown, MenuProps, Space} from "antd";

interface IProps {
    initialTab?: string,
}

const Navbar = ({initialTab}: IProps) => {

    const [activeTab, setActiveTab] = useState(initialTab ? initialTab : 'Patients');

    const router = useRouter();

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <h3
                    onClick={() => router.push("/")}
                    className=" text-gray-500 text-xs"
                >
                    Logout
                </h3>
            ),
            icon: <Image src={LogoutIcon} alt="logout icon"/>,
        },
    ];

    return (
        <>
            {/* Navbar */}
            <nav className='bg-white border-b'>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between'>
                        <div className='cursor-pointer '>
                            <Image src={HospitalIcon} alt=' hospital icon '/>
                        </div>
                        <div className='flex items-center justify-center space-x-8'>
                            <div className='flex items-center space-x-1.5 cursor-pointer'>
                                <Image src={OverviewIcon} alt='overview icon'/>
                                <h3 className='text-gray-500 text-sm font-light'>Overview</h3>
                            </div>
                            <div
                                onClick={() => {
                                    setActiveTab('Deliveries')
                                    router.push('/deliveries')
                                }}
                                className='flex items-center space-x-1.5 cursor-pointer'
                            >
                                <Image src={activeTab === 'Deliveries' ? ActiveDeliveryIcon : DeliveriesIcon}
                                       alt='deliveries icon'/>
                                <h3 className={`py-5 text-sm  ${
                                    activeTab === 'Deliveries' ? 'border-b-2 border-buttonBG text-buttonBG font-semibold' : 'text-gray-500 hover:text-black font-light'
                                }`}>
                                    Deliveries
                                </h3>
                            </div>
                            <div
                                onClick={() => {
                                    setActiveTab('Patients')
                                    router.push('/patients')
                                }}
                                className='flex items-center space-x-1.5 cursor-pointer'
                            >
                                <Image src={activeTab === 'Patients' ? ActivePatientsIcon : PatientIcon}
                                       alt='patients icon'/>
                                <h3
                                    className={` text-sm py-5 ${
                                        activeTab === 'Patients' ? 'border-b-2 border-buttonBG text-buttonBG font-semibold' : 'text-gray-500 hover:text-black font-light'
                                    }`}
                                >
                                    Patients
                                </h3>
                            </div>
                            <div className='flex items-center space-x-1.5 cursor-pointer'>
                                <Image src={RidersIcon} alt='riders icon'/>
                                <h3 className='text-gray-500 text-sm font-light'>Dispatch Riders</h3>
                            </div>
                            <div className='flex items-center space-x-1.5 cursor-pointer'>
                                <Image src={AdminIcon} alt='admin icon'/>
                                <h3 className='text-gray-500 text-sm font-light'>Admin</h3>
                            </div>
                        </div>
                        <Dropdown trigger={["click"]} menu={{items}}>
                            <div onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <div className='flex items-center justify-center space-x-2 cursor-pointer'>
                                        <Image src={ProfileIcon} alt='profile icon'/>
                                        <span className='text-gray-700'>Emmanuel Adigwe</span>
                                        <Image src={DownArrowIcon} alt='down arrow icon'/>
                                    </div>
                                </Space>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar