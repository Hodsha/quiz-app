import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'
import { deDE } from "@clerk/localizations";

export default function SignUpPage() {
    return (
            <div className='flex items-center justify-center bg-indigo-950 relative h-screen'>
                <SignUp />
            </div>
    )
}
