
'use client';

import {useRouter} from "next/navigation";

import Button from "@/app/shared/components/Button";

const LoginButton = () => {

    const router = useRouter()

    return (
        <Button onButtonClick={() => router.push('/patients')} rootClassName='mt-10' type='button' btnText='Login'/>
    )
}

export default LoginButton;