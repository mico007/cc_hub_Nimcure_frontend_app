import React from "react";

interface IProps {
    setState: React.Dispatch<React.SetStateAction<boolean>>
    setDispatchRiderTabData: React.Dispatch<React.SetStateAction<string[]>>
    setDrugCycleTabData: React.Dispatch<React.SetStateAction<string[]>>
}

const AssignDispatchRider = ({setState, setDispatchRiderTabData, setDrugCycleTabData}: IProps) => {

    const [selectedRider, setSelectedRider] = React.useState('')

    const riders = [
        {
            id: '1',
            name: 'Emmanuel Adebayo',
        },
        {
            id: '2',
            name: 'Emmanuel Adebayo',
        },
        {
            id: '3',
            name: 'Emmanuel Adebayo',
        },
        {
            id: '4',
            name: 'Emmanuel Adebayo',
        },
        {
            id: '5',
            name: 'Emmanuel Adebayo',
        },
        {
            id: '6',
            name: 'Emmanuel Adebayo',
        },
        {
            id: '7',
            name: 'Emmanuel Adebayo',
        },
        {
            id: '8',
            name: 'Emmanuel Adebayo',
        },
        {
            id: '9',
            name: 'Emmanuel Adebayo',
        },
        {
            id: '10',
            name: 'Emmanuel Adebayo',
        },
    ]

    return (
        <div className='mt-5 mx-12'>
            <div className='flex items-center justify-start space-x-3 my-8'>
                <span
                    className="border bg-lightBlueBG border-outlineBlue px-2 py-1 text-xs text-outlineBlue cursor-pointer font-semibold">All (33)</span>
                <span
                    className="border bg-badgeBG border-badgeBG border-transparent px-2 py-1 text-xs text-badgeText cursor-pointer ">Yaba Riders (5)</span>
                <span
                    className="border bg-badgeBG border-badgeBG border-transparent px-2 py-1 text-xs text-badgeText cursor-pointer ">Unassigned Riders (10)</span>
                <span
                    className="border bg-badgeBG border-badgeBG border-transparent px-2 py-1 text-xs text-badgeText cursor-pointer ">Assigned Riders (23)</span>
            </div>
            <div className='overflow-y-scroll pr-5' style={{height: '350px'}}>
                {riders.map((rider) => (
                    <div key={rider.id}
                         className={`flex items-center justify-start space-x-8 border ${selectedRider === rider.id && 'border-outlineBlue bg-lightBlueBG'} py-1 px-5 mb-5`}>

                        <div className='flex gap-2 items-start py-4'>
                            <div className='grid place-items-center mt-1 cursor-pointer'>
                                <input
                                    type="radio"
                                    onClick={() => {
                                        setDrugCycleTabData([])
                                        setDispatchRiderTabData([rider.id])
                                        setSelectedRider(rider.id)
                                        setState(false)
                                    }}
                                    id={rider.id}
                                    defaultChecked={selectedRider === rider.id}
                                    className={`peer col-start-1 row-start-1 appearance-none shrink-0 w-4 h-4 border-2 ${selectedRider === rider.id ? 'border-outlineBlue' : 'border-gray-400'} rounded-full cursor-pointer`}
                                />
                                {(selectedRider === rider.id) && (
                                    <div
                                        className={`pointer-events-none col-start-1 row-start-1 w-2 h-2 rounded-full peer-checked:bg-outlineBlue `}/>
                                )}
                            </div>
                        </div>

                        <div className='flex flex-col'>
                        <span
                            className={`text-xs ${selectedRider === rider.id ? 'text-outlineBlue' : 'text-gray-700'} font-light `}>Dispatch Rider’s Name</span>
                            <span
                                className={`text-sm  ${selectedRider === rider.id ? 'text-outlineBlue' : 'text-gray-700'}`}>Emmanuel Adebayo</span>
                        </div>
                        <div className='flex flex-col'>
                        <span
                            className={`text-xs ${selectedRider === rider.id ? 'text-outlineBlue' : 'text-gray-700'} font-light`}>Delivery Area</span>
                            <span
                                className={`text-sm ${selectedRider === rider.id ? 'text-outlineBlue' : 'text-gray-700'}`}>Yaba</span>
                        </div>
                        <div className='flex flex-col'>
                        <span
                            className={`text-xs ${selectedRider === rider.id ? 'text-outlineBlue' : 'text-gray-700'} font-light`}>Number of Deliveries</span>
                            <span
                                className={`text-sm ${selectedRider === rider.id ? 'text-outlineBlue' : 'text-gray-700'}`}>20 Deliveries</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AssignDispatchRider;