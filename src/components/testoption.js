
import React from "react"

import TestButton from '../components/testbutton.js'

export default function TestOption()
{
    return (
        <div className='h-fit w-fit p-2 flex flex-col items-start'>

            <div className='bg-gray-800 text-green-600 border-2 border-zinc-600 px-5'>
            Option 1
            </div>

            <div className='bg-zinc-800 border-zinc-600 px-1 border-x-2 border-b-2 ml-2'>
            {TestButton('Active: ')}
            </div>

            <div className='bg-zinc-800 text-red-500 border-zinc-600 px-1 border-2 mt-1 ml-5'>
            red
            </div>
            <div className='bg-zinc-800 text-blue-500 border-zinc-600 px-1 border-2 mt-1 ml-5'>
            blue
            </div>
            <div className='bg-zinc-800 text-yellow-500 border-zinc-600 px-1 border-2 mt-1 ml-5'>
            yellow and some really long text bleh.
            </div>

        </div>
    );
}