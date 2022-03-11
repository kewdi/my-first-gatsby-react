import React from 'react'

export default function Header(page) {
    return (
        <div className='bg-zinc-700 w-full h-[5rem]'>
            <div className='anchor-horizontal-right'>
                <div className='anchor-vertical-bottom'>
                    <div className='flex flex-row place-items-center'>
                        <div className='text-green-400'>
                            home [src/pages/{page}]
                        </div>
                        <div className='h-[9px] px-[4px]'>
                            <img src='https://i.imgur.com/gmANMDA.gif' alt='green blinking cursor in header'/>
                        </div>
                        <div className='w-4'/>
                    </div>
                </div>
            </div>
        </div>
    );
}