
import React from "react"

import TestOption from '../components/testoption.js'

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
    
    <body className='bg-zinc-800 text-white box-border h-screen'>

      <div className="w-full h-full">
        
        <div className='bg-zinc-900 w-full h-prc5'>
          header
        </div>

        <div className="w-full h-prc90 px-5">
        body

        <TestOption> </TestOption>
          
        </div>

        <div className='bg-zinc-900 w-full h-prc5'>
            footer
          </div>

      </div>     

      
    </body>
    
    </main>
  );
}
