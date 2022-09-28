import React from 'react'
import search_icon from '../images/search_icon.svg'
import calendar_icon from '../images/calendar_icon.svg'
import arrow_down from '../images/arrow_down1.svg'
import Exchange from '../images/Exchange.svg'
import Total_Saved from '../images/Total Saved.svg'
import Fraud_Score from '../images/Fraud Score.svg'
import Charts from '../images/Charts.svg'

const Main = () => {
  return (
    <div className='w-[65%]'>
        <div 
        className='w-[100%] flex justify-between'>
            <div
            className='relative'>
                <img 
                className='absolute top-4 left-4'
                src={search_icon} />

                <input 
                className='w-[170%] py-3.5 px-14 bg-inherit border border-gray-500 outline-none rounded-lg '
                type='text' placeholder='search' />
            </div>

            <div
            className='relative box_bg_color h-14 rounded-lg'>

                <img
                className='absolute top-4 left-4'
                src={calendar_icon} />

                <p
                className='py-3 px-12'>November-July 2018</p>

                <img
                className='absolute top-5 right-4' 
                src={arrow_down} />

            </div>
        </div>

        <div className='w-[100%] my-14'>
            <img src={Charts} />
        </div>

        <div
        className='w-[100%] flex justify-between'>
            <img src={Exchange} />

            <div className='flex flex-col justify-between'>
                <img src={Total_Saved} />

                <img src={Fraud_Score} />
            </div>
        </div>
    </div>
  )
}

export default Main