/* eslint-disable */

import React from "react";
import Button from "@/app/shared/components/Button";

interface ModalProps {
    isShown: boolean;
    title: string;
    content: any;
    size?: 'medium' | 'large';
    isHidden: () => void;
    titleSize?: string;
    onBackBtnClick?: () => void;
    onAssignBtnClick?: () => void;
    showBarCodeScanning: boolean;
    isBtnDisabled: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
    const {isShown, title, content, isHidden, size, titleSize, showBarCodeScanning, isBtnDisabled, onAssignBtnClick, onBackBtnClick} = props;
    return isShown ? (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div
                    className={
                        size === "medium"
                            ? "relative my-6 mx-auto bg-white w-4/5 lg:w-1/3  max-h-screen"
                            : size === "large"
                                ? "relative my-6 mx-auto bg-white w-4/5 lg:max-w-4xl max-h-screen"
                                : "relative my-6 mx-auto bg-white w-4/5 lg:w-1/3  max-h-screen"
                    }
                >
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="mx-10 mt-5 mb-3">
                            <h1 className={`text-gray-700 font-bold ${titleSize ? titleSize : 'text-sm'}`}>{title}</h1>
                        </div>
                        <div className="w-full border-b"></div>
                        <div className="relative mx-10 mt-10 flex-autobg-red-500">{content}</div>
                        <div className="w-full border-b mb-5"></div>
                            <div className='flex items-center justify-between mb-5 mx-10'>
                                <button onClick={onBackBtnClick} type='button' className="border border-outlineBlue px-4 py-2 text-xs text-center text-outlineBlue">
                                    No, Go Back
                                </button>
                                <Button onButtonClick={onAssignBtnClick} btnText='Yes, Assign Package' type='button' disabled={showBarCodeScanning ? false : isBtnDisabled} rootClassName='text-sm disabled:cursor-not-allowed disabled:opacity-45'/>
                            </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    ) : null;
};
export default Modal;
