import Image from "next/image";


interface IProps {
    btnText: string;
    loading?: boolean;
    type: "submit" | "button";
    onButtonClick?: () => void;
    rootClassName?: string;
    // eslint-disable-next-line
    icon?: any;
    disabled?: boolean;
}

const Button = ({btnText, loading, type,onButtonClick, rootClassName, icon, disabled}: IProps) => {
    return (
        <button
            onClick={onButtonClick}
            disabled={disabled}
            type={type}
            className={`${rootClassName} border-2 border-transparent px-3 py-1.5 text-center text-white bg-buttonBG`}
        >
            {
                loading ?
                    'Please wait...' :
                    <div className='flex items-center justify-center space-x-2'>
                        {icon && <Image src={icon} alt='button icon' />}
                        <span>{btnText}</span>
                    </div>
            }
        </button>
    );
}

export default Button;