'use client'

import { supabase } from '@/app/database/database';
import React, { useEffect, useState } from 'react'

// interface UserPoint {
//     map(arg0: (res: any) => void): React.ReactNode;
//     id: number;
//     title: string;
// }

function page() {
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
    return (
        <div>
            Allgemeinwissen
            <div>
                {/* {UserPoints.map(res =>
                    <div key={res.AnswerID}>{res.AnswerText}</div>
                )} */}

                {UserPoints.map((res) =>
                    <div key={res.AnswerID}>
                        <div>
                            {res.IsCorrect.toString()}
                            {res.AnswerText} </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default page
