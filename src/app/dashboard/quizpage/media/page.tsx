'use client'
import { supabase } from '@/app/database/database';
import React, { useEffect, useState } from 'react'

export default function page() {

  const [fetchError, setFetchError] = useState<any>(null);
  const [UserPoints, setUserPoints] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchUserPoints = async () => {
      const { data, error }: any = await supabase
        .from('Answers')
        .select("*")

      if (error) {
        setFetchError('Could not fetch the Data');
        // setUserPoints(null);
        console.log(error);
      }

      if (data) {
        setUserPoints(data);
        setFetchError(null);
      }
    }

    fetchUserPoints();
  }, []);

  console.log(UserPoints)
  return (


    <div>
    {UserPoints.map(res => 
      <div>{res.AnswerText}</div>
      )}
    </div>
  )
}
