
import React from "react"

import Header from '../components/header.js'

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
      <body className='bg-zinc-800 text-white h-screen'>

      <div class='main-structure'>

        {Header('index')}
        
        <div className="body-structure">

          <div className="bg-zinc-700">
            <div className="origin-bottom-left w-[8rem] rotate-90">
              [left wing]
            </div>
          </div>
          
          <div className='bg-zinc-700 p-5'>
            [body]

            <div className='centered'>
              <div className="bg-black w-1 h-[2rem]"/>
              [centered content]

              <TestOption/>

              <div className='self-start'>
                un-centered child
              </div>
            </div>

            <div className="h-screen">
              overflow...
            </div>
          </div>

          <div className="bg-zinc-700">
            <div className="origin-bottom-left mt-[5rem] ml-[3rem] w-[8rem] rotate-[270deg]">
              [right wing]
            </div>
          </div>
          

        </div>
        
      </div>

        

        
      </body>
    </main>
  );
}
