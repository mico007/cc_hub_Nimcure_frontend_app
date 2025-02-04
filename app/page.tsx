import Image from "next/image";

import LoginPageIcon from "@/public/assets/icons/cc_hub_login_icon.svg";
import CloudIcon from "@/public/assets/icons/cloud-icon.svg"
import MotorDeliveryIcon from "@/public/assets/icons/motor-delivery-icon.svg"
import PoweredByIcon from "@/public/assets/icons/powered-by-icon.svg"
import LoginButton from "@/app/login/LoginButton";

export default function LoginPage() {

    return (
        <>
            {/* Login Page */}
            <div className='flex h-screen'>

                {/* Left Section */}
                <div className='mx-auto md:mx-52'>

                    <Image className='mt-20 mb-36 ml-20' src={LoginPageIcon} alt='login page icon'/>
                    <form>
                        <div className='flex flex-col'>
                            <h3 className='text-gray-700 mb-5'>Sign in to continue</h3>
                            <input
                                type='email'
                                placeholder='Email Address'
                                className=' border border-borderColor bg-transparent px-3 py-2 text-gray-500 placeholder:text-xs mb-2 focus:outline-none'
                            />
                            <div className='flex items-center justify-between border border-borderColor px-3 py-2 mb-3'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='placeholder:text-xs focus:outline-none text-gray-500 bg-transparent'
                                />
                                <span className='text-xs text-gray-700 cursor-pointer'>SHOW</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center justify-center space-x-2'>
                                    <input type='checkbox' className='border border-borderColor'/>
                                    <label className=' text-gray-700 text-xs'>Remember Me</label>
                                </div>
                                <h3 className='text-buttonBG text-xs font-semibold hover:underline hover:underline-offset-2 cursor-pointer'>Forgot
                                    Password?</h3>
                            </div>
                            <LoginButton/>
                        </div>
                    </form>

                    <div className='flex items-center justify-center absolute bottom-0 mb-10 ml-10 space-x-2'>
                        <span className='text-gray-700 text-xs'>Powered by</span>
                        <Image src={PoweredByIcon} alt='company icon'/>
                    </div>

                </div>

                {/* Right Section */}
                <div className='hidden md:block bg-loginPageRightBG w-full '>

                    <Image src={CloudIcon} className='mx-auto mt-20' alt='cloud icon'/>

                    <div className='mt-6 bg-loginPageRightImage bg-cover h-[80%] -ml-16'>
                        <Image src={MotorDeliveryIcon} className='pt-44 mx-auto' alt='motor delivery icon'/>
                        <div className='ml-44 pt-20'>
                            <h3 className='text-white text-xl font-bold mb-1'>Serving Patients During a Pandemic</h3>
                            <p className='text-white text-sm font-light'>Delivering essential medication to NIMR
                                patients with adherence </p>
                            <p className='text-white text-sm font-light'>to quality of service, care and
                                confidentiality.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
