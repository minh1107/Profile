import React from 'react'
import { MdMore } from 'react-icons/md'

const More = () => {
  return (
    <div className='flex rounded-xl bg-[#179DD9] shadow-2xl border-2 border-[#ccc] text-white gap-[20px] py-[20px] px-[40px] text-left transition duration-500 ease-out'>
      <div className='w-full flex flex-col gap-[10px]'>
        <h1 className='font-bold text-[20px] gap-[5px] items-center flex'><MdMore fontSize={'24px'} color='white' />More</h1>
        <b>Activity</b>
        <div>
          <b>Tran an marathon</b>
          <p>Type: Volunteers</p>
          <p>Role: Ride a bicycle to follow the lead of the run</p>
        </div>
        <div>
          <b>Vietnam International Half Marathon</b>
          <p>Type: Volunteers</p>
          <p>Role: Drivers carrying cameramen follow the running caravan</p>
        </div>
        <div>
          <b>A little about yourself</b>
          <p>
            Outside of waiting for me is a person who is honest and kind. I am diligent in their work, taking responsibility and being eager to learn and innovate. I wholeheartedly dedicate themselves to their job and are willing to work overtime to ensure the assigned tasks are completed successfully.
          </p>
        </div>
      </div>
    </div>
  )
}

export default More