import React, {useState} from "react";

interface IProps {
    setState: React.Dispatch<React.SetStateAction<boolean>>
    setDrugCycleTabData: React.Dispatch<React.SetStateAction<string[]>>
    setDispatchRiderTabData: React.Dispatch<React.SetStateAction<string[]>>
}

const SetDrugCycle = ({setState, setDrugCycleTabData, setDispatchRiderTabData}: IProps) => {

    const [activeRadioTab, setActiveRadioTab] = useState('');

    const radioTabs = [
        {
            id: 'Same as initial drug cycle',
            label: 'Same as initial drug cycle',
            paragraph: <>Deliver drug on <span className='font-semibold'>4th February 2020</span> & set next delivery
                date to <span className='font-semibold'>4th March 2020</span></>
        },
        {id: 'Set new drug cycle', label: 'Set new drug cycle'},
    ];

    return (
        <div className='mt-5 mb-8 mx-12' style={{height: '350px'}}>
            <h3 className='text-sm text-gray-600 mb-5'>
                Oluwaseun Aregbesola has a drug cycle of two(2) months
            </h3>
            <div>
                {radioTabs.map((tab) => (
                    <div key={tab.id} className={`border ${activeRadioTab === tab.id && 'border-outlineBlue'} mb-5`}>
                        <div
                            className={`${activeRadioTab === tab.id && 'border-outlineBlue bg-lightBlueBG'} border-b p-3 flex gap-2 items-start`}>
                            <div className="grid place-items-center mt-1 cursor-pointer">
                                <input
                                    onClick={() => {
                                        setDispatchRiderTabData([])
                                        setDrugCycleTabData([tab.id])
                                        setActiveRadioTab(tab.id)
                                        setState(false)
                                    }}
                                    type="radio"
                                    id='1'
                                    defaultChecked={activeRadioTab === tab.id}
                                    className={`peer col-start-1 row-start-1 appearance-none shrink-0 w-4 h-4 border-2 ${activeRadioTab === tab.id ? 'border-outlineBlue' : 'border-gray-400'} rounded-full cursor-pointer`}
                                />
                                {(activeRadioTab === tab.id) && (
                                    <div
                                        className={`pointer-events-none col-start-1 row-start-1 w-2 h-2 rounded-full ${activeRadioTab === tab.id ? 'peer-checked:bg-outlineBlue' : 'peer-checked:bg-gray-400'}`}/>
                                )}
                            </div>
                            <label htmlFor='1'
                                   className={`${activeRadioTab === tab.id ? 'text-outlineBlue' : 'text-gray-700 font-light hover:text-black'} text-start cursor-pointer text-sm `}>
                                {tab.label}
                            </label>
                        </div>
                        <p className='text-xs text-gray-600 p-3'>
                            {tab?.paragraph}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SetDrugCycle