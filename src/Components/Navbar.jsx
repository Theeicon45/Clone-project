import React from 'react'
import { navImg } from '../utils'
import { navLists } from '../Constants'

const Navbar = () => {
  return (
    < >
     <div className='flex items-center gap-14 '>
     <img src={navImg} alt="" className='w-40 cursor-pointer mx-32 ' />
      <div id="navlist" className='flex items-center  gap-8 cursor-pointer font-bold uppercase'>
        {
          navLists.map((nav)=> (
            <div key={nav}>
              {nav}
            </div>
          ))
        }
      </div>
     </div>
    </>
  )
}

export default Navbar

