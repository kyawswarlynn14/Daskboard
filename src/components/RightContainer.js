import React from 'react'
import leftrightarrow from '../images/left-right-arrow.svg'
import card from '../images/card.svg'
import downArrowShape from '../images/downArrowShape.svg'
import plusShape from '../images/plusShape.svg'
import calendar_icon from '../images/calendar_icon.svg'
import tranItem1 from '../images/tran_item1.svg'
import tranItem2 from '../images/tran_item2.svg'
import tranItem3 from '../images/tran_item3.svg'
import tranItem4 from '../images/tran_item4.svg'
import tranItem5 from '../images/tran_item5.svg'
import person from '../images/person.svg'
import oval from '../images/Oval.svg'


const RightContainer = () => {
  let boxClass = 'w-12 h-12 bg-[#17151D] rounded-xl flex place-items-center justify-center'

  let data = [
    {
      img: tranItem1,
      name: 'Taxi',
      price: '-$9.20'
    },

    {
      img: tranItem2,
      name: 'Shopping',
      price: '-$32.00'
    },

    {
      img: tranItem3,
      name: "McDonald's",
      price: '-$4.3'
    },

    {
      img: tranItem4,
      name: 'Netflix',
      price: '-$7.99'
    },

    {
      img: tranItem5,
      name: 'Shopping',
      price: '-$17.00'
    },
  ]

  const DataMap = data.map((item) => (
    <div className='flex gap-8 mb-8'>
      <img src={item.img} />
      <div className='flex justify-between w-[80%] mt-3'>
        <p className='justify-start'>{item.name}</p>
        <span>{item.price}</span>
      </div>
    </div>
  ))

  return (
    <div
    className='bg-[#241F2A] rounded-3xl w-[25%] relative'>

        <img className='absolute -top-6 right-6' src={oval} />
        <img className='absolute -top-4 right-8' src={person} />

        <h1
        className='m-8 text-xl font-bold'>
            My card
        </h1>

        <div
        className='flex justify-between'>
            <div
            className='flex justify-between w-64 h-44 bg-[#7D30F5] rounded-3xl ml-2 px-4 py-6'>
              <div className='flex flex-col justify-between'>
                <img className='w-10' src={card} />

                <div className='flex gap-4'>
                  <div className='border-b-4 border-dotted w-10'></div>
                  <div className='border-b-4 border-dotted w-10'></div>
                </div>

                <p className='font-bold'>Thaminzh</p>

              </div>

              <div className='font-bold flex flex-col justify-between'>
                <p>VISA</p>

                <p className='text-xl'>2020</p>

                <p>07 / 24</p>
              </div>
            </div>

            <div
            className='w-14 h-44 bg-[#5F3D6D] rounded-tl-3xl rounded-bl-3xl flex flex-col justify-between pt-8 pb-6 pl-3'>

              <div className='relative'>
                <div className='w-4 h-4 rounded-[50%] bg-black'></div>

                <div className='absolute left-3 top-0 w-4 h-4 rounded-[50%] bg-slate-200'></div>
              </div>

              <p>2020</p>

            </div>
        </div>

        <div className='ml-12'>
          <div className='w-8 border-4 border-b-4 rounded-lg inline-block'></div>
          <p className='ml-4 text-5xl inline-block'>. .</p>
        </div>

        <div className='w-[80%] mx-auto'>
          <div className='flex gap-6 mt-6'>
            <div className='bg-[#3F6EFF] w-32 p-3 text-center rounded-xl'>
              <p className='inline-block'>Transfer</p>
              <img
              className='inline-block ml-4' 
              src={leftrightarrow} />
            </div>

            <div className={boxClass}>
              <img src={downArrowShape} />
            </div>

            <div className={boxClass}>
              <img src={plusShape} />
            </div>
          </div>

          <div className='flex justify-between my-6'>
            <p className='text-2xl font-bold'>Transcation</p>
            <img className='w-6' src={calendar_icon} />
          </div>

          {DataMap}

          <div className='border border-[#28282C] rounded-xl p-4 text-center mb-8'>
            <p className='text-[#797979] font-bold'>View All</p>
          </div>

        </div>

    </div>
  )
}

export default RightContainer