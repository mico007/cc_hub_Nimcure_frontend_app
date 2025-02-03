
interface IProps {
    label: string;
    id: string;
    activeTab: string;
}

const Radio = ({label, id, activeTab}:IProps) => {

    return (
        <div className="flex gap-2 items-start py-4">
            <div className="grid place-items-center mt-1 cursor-pointer">
                <input
                    type="radio"
                    id={id}
                    defaultChecked={id === activeTab}
                    className="peer col-start-1 row-start-1 appearance-none shrink-0 w-4 h-4 border-2 border-outlineBlue rounded-full cursor-pointer"
                />
                {(id === activeTab) && (
                    <div className="pointer-events-none col-start-1 row-start-1 w-2 h-2 rounded-full peer-checked:bg-outlineBlue"/>
                )}
            </div>
            <label htmlFor={id} className="text-start cursor-pointer">{label}</label>
        </div>
    )
}

export default Radio