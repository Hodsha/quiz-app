'use client'
import { supabase } from '@/app/database/database';
import { rejects } from 'assert';
import { error } from 'console';
import Link from 'next/link'
import { resolve } from 'path';
import React from 'react'
import { useEffect, useState } from 'react';




export default function quizPage() {
  return (
    <div>
      <div className="bg-indigo-950 flex items-center justify-center h-screen">
        <div className="flex flex-col items-center space-y-4 flex-1">
          <button className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-800 w-56">
            <Link href="/dashboard/quizpage/knowledge">
              <div className="text-lg-uppercase font-bold text-black">
                Allgemeinwissen
              </div>
            </Link>
          </button>
          <button className="bg-amber-500 text-white py-2 px-4 rounded  hover:bg-amber-800 w-56">
            <Link href="/dashboard/quizpage/history">
              <div className="text-lg-uppercase font-bold text-black">
                Media
              </div>
            </Link>
          </button>
          <button className="bg-amber-500 text-white py-2 px-4 rounded  hover:bg-amber-800 w-56">
            <Link href="/dashboard/quizpage/sport">
              <div className="text-lg-uppercase font-bold text-black">
                Sport
              </div>
            </Link>
          </button>
          <button className="bg-amber-500 text-white py-2 px-4 rounded  hover:bg-amber-800 w-56">
            <Link href="/dashboard/quizpage/history">
              <div className="text-lg-uppercase font-bold text-black">
                Geschichte
              </div>
            </Link>
          </button>
          <button className="bg-amber-500 text-white py-2 px-4 rounded  hover:bg-amber-800 w-56">
            <Link href="/dashboard/quizpage/technology">
              <div className="text-lg-uppercase font-bold text-black">
                Technologie
              </div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
