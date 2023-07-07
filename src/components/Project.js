import React from 'react'
import { AiOutlineProject } from 'react-icons/ai'

const Project = () => {
  return (
    <div className='flex rounded-xl bg-[#179DD9] shadow-2xl border-2 border-[#ccc] text-white gap-[20px] py-[20px] px-[40px]  text-left transition duration-500 ease-out'>
      <div className=' w-full flex flex-col gap-[10px]'>
        <h1 className='font-bold text-[20px] gap-[5px] items-center flex'><AiOutlineProject fontSize={'24px'} color='white' />Work experience</h1>
        <ul>
          <b>Self project </b>
          <b>06/2022 - 07/2022</b>
          <h1>Zingmp3 React Project</h1>
          <ul className='list-disc'>
            <li>Core: React js</li>
            <li>Lib: Tailwind css, React Router Dom, Moment, react-icons,react-chartjs-2, react-custom-scrollbars-2, redux...</li>
            <li>Function: listening music, follow top trending</li>
            <li>Source: https://github.com/minh1107/zingmp3v2/</li>
            <li>Website: minh1107.github.io/zingmp3v2</li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Project