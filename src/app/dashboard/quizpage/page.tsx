'use client'
import { supabase } from '@/app/database/database';
import { rejects } from 'assert';
import { error } from 'console';
import Link from 'next/link'
import { resolve } from 'path';
import React from 'react'
import { useEffect, useState } from 'react';

export default function quizPage() {
  const [fetchError, setFetchError] = useState<any>(null);
  const [UserPoints, setUserPoints] = useState<any>(null);

  console.log(supabase);
  useEffect(() => {
    const fetchUserPoints = async () => {
      const { data, error }: any = await supabase
        .from('smooties')
        .select()

      if (error) {
        setFetchError('Could not fetch the Data');
        setUserPoints(null);
        console.log(error);
      }

      if (data) {
        setUserPoints(data);
        setFetchError(null);
      }

      if (Array.isArray(data)) {
        setUserPoints(data);
        setFetchError(null);
      } else {
        console.log('Data is not an array:', data);
      }

    }

    fetchUserPoints();
  }, []);

  return (
    <div>
      <Link href="/quizpage">
        <div className="text-lg-uppercase font-bold text-black">
          es wird weitergeführt
        </div>
      </Link>

      {UserPoints && (
        
          UserPoints.map((res: any) => {
            { res.title }
          })
       
      )}

    </div>
  )
}
