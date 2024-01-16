// import React, { useState } from 'react'
import Link from 'next/link'
import { UserButton, auth } from '@clerk/nextjs'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { dark } from '@clerk/themes';
export default function Nav() {
    const { userId } = auth();
    console.log(userId);

    return (
        <nav className='bg-slate-950 py-4 p-6 flex items-center justify-between'>
            <div className='flex items-center'>
                <Link href="/dashboard">
                    <div className="text-lg-uppercase font-bold text-white">
                        Quiz App
                    </div>
                </Link>
            </div>
            <div className="text-white flex items-center">
                <div className="ml-auto text-white">
                    <UserButton afterSignOutUrl='/' showName={true} appearance={{baseTheme:dark, variables: {colorText: "white"}}}/>
                </div>
            </div>
        </nav>
    )
}
