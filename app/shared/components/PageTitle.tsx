import Button from "@/app/shared/components/Button";
import AddIcon from "@/public/assets/icons/add-icon.svg";
import Link from "next/link";

interface IProps {
    pathTitle: string;
    btnText?: string;
    noIcon?: boolean;
    noButton?: boolean;
    leftIconLabel?: boolean;
    onButtonClick?: () => void;
}

const PageTitle = ({pathTitle, btnText, noIcon, leftIconLabel, onButtonClick, noButton}: IProps) => {

    return (
        <>
            {/*Page Title*/}
            <div className='border-b'>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between my-5 '>
                        {pathTitle.split(' / ').length === 2 ? (
                            <div className='flex items-center space-x-3'>
                                <Link href='/patients'
                                      className='text-sm font-light text-outlineBlue'>{pathTitle.split(' / ')[0]}</Link>
                                <span className='text-xl text-gray-500'>/</span>
                                <h3 className='text-xl font-light'>{pathTitle.split(' / ')[1]}</h3>
                            </div>
                        ) : pathTitle.split(' / ').length === 3 ? (
                            <div className='flex items-center space-x-3'>
                                <Link href='/patients'
                                      className='text-sm font-light text-outlineBlue'>{pathTitle.split(' / ')[0]}</Link>
                                <span className='text-xl text-outlineBlue font-light'>/</span>
                                <Link href='/view-patient' className='text-sm font-light text-outlineBlue'>{pathTitle.split(' / ')[1]}</Link>
                                <span className='text-xl text-gray-500'>/</span>
                                <h3 className='text-xl font-light cursor-pointer'>{pathTitle.split(' / ')[2]}</h3>
                            </div>
                        ) : (
                            <h3 className='text-xl font-light cursor-pointer'>{pathTitle}</h3>
                        )}
                        <div className='flex items-center justify-center space-x-3'>
                            {leftIconLabel && (
                                <div className='flex flex-col'>
                                    <span className='text-xs text-gray-500'>Patient’s next delivery date is </span>
                                    <span
                                        className='text-xs text-gray-700 font-semibold'>14th November 2020, in 2 days</span>
                                </div>
                            )}

                            {noButton ? (
                                ''
                            ) : (
                                <Button
                                    icon={noIcon ? '' : AddIcon}
                                    rootClassName='text-sm font-semibold'
                                    type='button'
                                    btnText={btnText ? btnText : 'Add Patient'}
                                    onButtonClick={onButtonClick}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitle;