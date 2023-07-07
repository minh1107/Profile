import React from 'react'
import { GiSkills } from 'react-icons/gi'

const Skill = () => {
  return (
    <div className='flex rounded-xl bg-[#179DD9] shadow-2xl border-2 border-[#ccc] text-white gap-[20px] py-[20px] px-[40px]  text-left transition duration-500 ease-out'>
      <div className='w-full flex flex-col gap-[10px]'>
        <h1 className='font-bold text-[20px] gap-[5px] items-center flex'><GiSkills fontSize={'24px'} color='white' />Work experience</h1>
        <b>Main</b>
        <ul>
          <li>HTML (BEM)</li>
          <li>CSS (scss,flexbox,grid...)</li>
          <li>Javascript(Dom, event, async await, ES6+, ...)</li>
          <li>Reactjs(hook, router-dom, component, state,....)</li>
          <li>Lib UI: Tailwind css, AntDesign...</li>
          <li>Power apps, power automate, share point</li>
        </ul>
        <b>Other</b>
        <ul>
          <li>SQL server</li>
          <li>English reading and listening</li>
          <li>React native</li>
          <li>Nodejs</li>
        </ul>
      </div>
    </div>
  )
}

export default Skill