import React from 'react'
import {BsFillPersonVcardFill, BsInfoSquareFill} from 'react-icons/bs'

const Info = () => {
  return (
    <div className='flex rounded-xl bg-[#179DD9] shadow-2xl border-2 border-[#ccc] text-white gap-[20px] py-[20px] px-[40px] text-left transition duration-500 ease-out'>
      <div className='w-[650px] flex flex-col gap-[10px]'>
        <h1 className='font-bold text-[20px] gap-[5px] items-center flex'><BsInfoSquareFill color='white'/>General information</h1>
        <ul className='list-disc'>
          <li>3 months internship at a Metric</li>
          <li>3 months internship at TTM company</li>
          <li>Basic SQL statement</li>
          <li>Able to read and understand English</li>
          <li>Thorough under standing JavaScript, including DOM manipulation and the JavaScript object model</li>
          <li>Familiarity with newer specifications of EcmaScript</li>
          <li>Experience with RESTful APIs</li>
          <li>Experience use of source code management tools: GITHUB , GITLAB ,NVM ,Figma, VSCode</li>
          <li>Experience working with powerapps, sharepoint, power automate about 2 months</li>
          <li>Current working location: Ha Noi, Viet Nam</li>
        </ul>
      </div>
      <div className='flex flex-col gap-[10px]'>
        <h1 className='font-bold text-[20px] gap-[5px] items-center flex'><BsFillPersonVcardFill color='white' />Contract information</h1>
        <div>
          <h1 className='font-bold'>Name</h1>
          <p>Nguyễn Quang Minh</p>
        </div>
        <div>
          <h1 className='font-bold'>Birth</h1>
          <p>11/07/2000</p>
        </div>
        <div>
          <h1 className='font-bold'>Phone</h1>
          <p>+84 329933496</p>
        </div>
        <div>
          <h1 className='font-bold'>Email</h1>
          <p>minhnqdeveloper@gmail.com</p>
        </div>
        <div>
          <h1 className='font-bold'>Address</h1>
          <p>Ha Noi, Viet Nam</p>
        </div>
      </div>
    </div>
  )
}

export default Info