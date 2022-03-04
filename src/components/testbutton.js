import React, { useState, useEffect } from 'react';

export default function TestButton(data) {
    const [bstate, setbstate] = useState(false);
    //useEffect(()=>{ });
    return (
        <div>
            {data} 
            <button className={bstate ? 'text-green-500' : 'text-red-500'} onClick={() => setbstate(!bstate)}>
                {bstate ? 'on' : 'off'}
            </button>
        </div>
    );
}