/* eslint-disable */

'use client'

import {useRouter} from "next/navigation";

const patientsData = [
    {
        hospitalId: "1AFHFH093",
        patientName: "Oluwaseun Aregbesola",
        phoneNumber: "+2347068642920",
        nextDeliveryDate: "12th September 2020",
        location: "VI, Lagos",
        status: "Completed",
    },
    {
        hospitalId: "1AFHFH093",
        patientName: "Stella Omotoye",
        phoneNumber: "+2347068642920",
        nextDeliveryDate: "12th September 2020",
        location: "VI, Lagos",
        status: "Completed",
    },
    {
        hospitalId: "1AFHFH093",
        patientName: "Chinyere Okafor",
        phoneNumber: "+2347068642920",
        nextDeliveryDate: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Paid",
    },
    {
        hospitalId: "1AFHFH093",
        patientName: "Mohammed Danladi",
        phoneNumber: "+2347068642920",
        nextDeliveryDate: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Unpaid",
    },
    {
        hospitalId: "1AFHFH093",
        patientName: "Michael Aribisala",
        phoneNumber: "+2347068642920",
        nextDeliveryDate: "12th September 2020",
        location: "VI, Lagos",
        status: "Assigned",
    },
    {
        hospitalId: "1AFHFH093",
        patientName: "Donatus Emefiele",
        phoneNumber: "+2347068642920",
        nextDeliveryDate: "12th September 2020",
        location: "VI, Lagos",
        status: "Assigned",
    },
    {
        hospitalId: "1AFHFH093",
        patientName: "Donatus Emefiele",
        phoneNumber: "+2347068642920",
        nextDeliveryDate: "12th September 2020",
        location: "VI, Lagos",
        status: "Completed",
    },
    {
        hospitalId: "1AFHFH093",
        patientName: "Donatus Emefiele",
        phoneNumber: "+2347068642920",
        nextDeliveryDate: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Paid",
    },
    {
        hospitalId: "1AFHFH093",
        patientName: "Donatus Emefiele",
        phoneNumber: "+2347068642920",
        nextDeliveryDate: "12th September 2020",
        location: "VI, Lagos",
        status: "Due & Unpaid",
    },
    {
        hospitalId: "1AFHFH093",
        patientName: "Donatus Emefiele",
        phoneNumber: "+2347068642920",
        nextDeliveryDate: "12th September 2020",
        location: "VI, Lagos",
        status: "Paid",
    },
];

const statusColors: any = {
    Completed: "bg-lightGreen text-greenColor",
    "Due & Paid": "bg-lightOrange text-orangeColor",
    "Due & Unpaid": "bg-lightRed text-redColor",
    Assigned: "bg-lightBlue text-outlineBlue",
    Paid: "bg-lightGreen text-greenColor",
};

const PatientsTable = () => {

    const router = useRouter();

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                    <tr>
                        <th className="px-8 py-4 text-left text-sm font-medium text-gray-600 border-b">Hospital ID</th>
                        <th className="px-8 py- text-left text-sm font-medium text-gray-600 border-b">Patient&#39;s Name</th>
                        <th className="px-8 py-4 text-left text-sm font-medium text-gray-600 border-b">Phone Number</th>
                        <th className="px-8 py-4 text-left text-sm font-medium text-gray-600 border-b">Next Delivery Date</th>
                        <th className="px-8 py-4 text-left text-sm font-medium text-gray-600 border-b">Location</th>
                        <th className="px-8 py-4 text-left text-sm font-medium text-gray-600 border-b">Status</th>
                        <th className="px-8 py-4 text-left text-sm font-medium text-gray-600 border-b">{''}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {patientsData.map((row, index) => (
                        <tr key={index} className="">
                            <td className="px-8 py-4 text-xs text-gray-700 border-b font-light">{row.hospitalId}</td>
                            <td className="px-8 py-4 text-xs text-gray-700 border-b font-light">{row.patientName}</td>
                            <td className="px-8 py-4 text-xs text-gray-700 border-b font-light">{row.phoneNumber}</td>
                            <td className="px-8 py-4 text-xs text-gray-700 border-b font-light">{row.nextDeliveryDate}</td>
                            <td className="px-8 py-4 text-xs text-gray-700 border-b font-light">{row.location}</td>
                            <td className="px-8 py-4 border-b">
                                <span className={`px-4 py-1.5 text-xs  ${statusColors[row.status]}`}>
                                    {row.status}
                                </span>
                            </td>
                            <td className="px-8 py-4 border-b">
                                <span onClick={() => router.push('/view-patient')} className="border border-outlineBlue px-4 py-1 text-xs text-outlineBlue cursor-pointer ">View</span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between bg-white p-8">
                <span className="text-xs text-gray-700 font-light">You&#39;re viewing 10 out of 87 deliveries</span>
                <div className="flex items-center space-x-2">
                    <button className="px-3 py-0.5 text-xs text-gray-500 font-light border bg-transparent rounded-3xl">Prev</button>
                    {[1, 2, 3, 4, 8].map((page) => (
                        <button
                            key={page}
                            className={`px-3 py-1 text-xs rounded text-gray-400 ${page === 2 && " border py-0.5 px-2.5 rounded-full" }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="px-3 py-0.5 text-xs text-gray-500 font-light border bg-transparent rounded-3xl">Next</button>
                </div>
            </div>
        </>
    );

};

export default  PatientsTable ;
