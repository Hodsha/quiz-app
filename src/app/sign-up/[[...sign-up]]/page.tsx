import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'
import { deDE } from "@clerk/localizations";

export default function SignUpPage() {
    return (
        <>
            <div className='flex items-center justify-center mt-10'>
                <SignUp
                    appearance={{
                        baseTheme: dark
                    }}
                />
            </div>
        </>
    )
}
