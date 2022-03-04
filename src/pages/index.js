
import React from "react"

import TestButton from '../components/testbutton.js'

//const styles = {
//  test_grid:
//    `bg-zinc-800 h-fit w-fit p-5
//    grid grid-cols-1 grid-rows-2 place-items-start`
//  ,
//  //usage: className={styles.test_grid}
//}
//multi-line string in js: {`some ...\n... text`}


export default function IndexPage() {
  
  return (
    <main>

    <body className='bg-zinc-900 text-white m-0 p-5 box-border h-screen'>
      <div className='h-fit w-fit p-2 flex flex-col items-start'>
        <div className='bg-gray-800 text-green-600 border-2 border-zinc-600 px-5'>
          Option 1
        </div>
        <div className='bg-zinc-800 border-zinc-600 px-1 border-x-2 border-b-2 self-center'>
          {TestButton('Active: ')}
        </div>
        <div className='bg-zinc-800 text-red-500 border-zinc-600 px-1 border-2 mt-1 ml-5'>
          red
        </div>
        <div className='bg-zinc-800 text-blue-500 border-zinc-600 px-1 border-2 mt-1 ml-5'>
          blue
        </div>
        <div className='bg-zinc-800 text-yellow-500 border-zinc-600 px-1 border-2 mt-1 ml-5'>
          yellow
        </div>
      </div>
    </body>
    
    </main>
  );
}
