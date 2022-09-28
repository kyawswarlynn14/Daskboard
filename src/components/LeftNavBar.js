import React from 'react'
import main_menu from '../images/main_menu.svg'
import menu_item1 from "../images/menu_item1.svg"
import menu_item2 from "../images/menu_item2.svg"
import menu_item3 from "../images/menu_item3.svg"
import menu_item4 from "../images/menu_item4.svg"
import menu_item5 from "../images/menu_item5.svg"
import menu_item6 from "../images/menu_item6.svg"

const LeftNavBar = () => {
  return (
    <div className='flex flex-col gap-8 w-14'>
        <div>
            <img 
            className="w-14" 
            src={main_menu} />
        </div>

        <div className='box_bg_color flex flex-col justify-between
        w-14 h-full place-items-center py-8
        rounded-xl'>
            <div className='flex flex-col gap-10'>
              <div className='p-4 rounded-xl'>
                <img className='w-4' src={menu_item1} />
              </div>

              <div className='bg-[#3F6EFF] p-4 rounded-xl'>
                <img className='w-4' src={menu_item2} />
              </div>

              <div className='p-4 rounded-xl'>
                <img className='w-4' src={menu_item3} />
              </div>

              <div className='p-4 rounded-xl'>
                <img className='w-4' src={menu_item4} />
              </div>

              <div className='p-4 rounded-xl'>
                <img className='w-4' src={menu_item5} />
              </div>
            </div>

            <img className='w-4' src={menu_item6} />
        </div>
    </div>
  )
}

export default LeftNavBar