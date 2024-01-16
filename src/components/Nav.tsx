// import React, { useState } from 'react'
import Link from 'next/link'
import { UserButton, auth } from '@clerk/nextjs'
import { MdLightMode, MdDarkMode } from "react-icons/md";
export default function Nav() {
    const { userId } = auth();
    console.log(userId);

    return (
        <nav className='bg-slate-950 py-4 p-6 flex items-center justify-between'>
            <div className='flex items-center'>
                <Link href="/">
                    <div className="text-lg-uppercase font-bold text-white">
                        Quiz App
                    </div>
                </Link>
            </div>
            <div className="text-white flex items-center">
                {!userId && (
                    <>
                        <Link href='sign-in' className='text-gray-300 hover:text-white mr-4'> LogIN</Link>
                        <Link href='sign-up' className='text-gray-300 hover:text-white mr-4'> Sign Up</Link>
                    </>
                )}
                <div className="ml-auto">
                    <UserButton afterSignOutUrl='/' />
                </div>
            </div>
        </nav>
    )
}
