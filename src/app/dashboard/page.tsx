import { SignOutButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function DashboardPage() {
  return (
    <div className="bg-indigo-950 flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4 flex-1">
        <button className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-800 w-56">
           <Link href="/dashboard/quizpage">
            <div className="text-lg-uppercase font-bold text-white">
              Quiz 
            </div>
          </Link>
        </button>
        <button className="bg-amber-500 text-white py-2 px-4 rounded  hover:bg-amber-800 w-56">
          Ranked
        </button>
        <button className="bg-amber-500 text-white py-2 px-4 rounded  hover:bg-amber-800 w-56">
          <SignOutButton />
        </button>
      </div>
    </div>

  )
}
