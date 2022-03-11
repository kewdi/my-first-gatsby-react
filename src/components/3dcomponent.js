import React from 'react'

export default function Component3D() {
    return (
        <div>
            <div className='h-16' />
            <div className='threeDcomp bg-zinc-900 text-green-400 h-32 border-2 border-black hover:scale-125'>
                <div className='flex flex-col'>
                    <div className='flex flex-row'>
                        3d square with Y-rotation and Y-skew
                    </div>
                    <div className='flex flex-row'>
                        line 2
                    </div>
                    <div className='flex flex-row'>
                    <img className='self-center pt-[2px] pl-[2px]' src='https://i.imgur.com/gmANMDA.gif' alt='green blinking cursor in header'/>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}