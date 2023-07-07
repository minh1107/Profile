import React from 'react'
import { MdOutlineWork } from 'react-icons/md'

const Exp = () => {
  return (
    <div className='flex bg-[#179DD9]  shadow-2xl border-2 border-[#ccc] text-white rounded-xl gap-[20px] py-[20px] px-[40px] text-left'>
      <div className='w-full flex flex-col gap-[10px]'>
        <h1 className='font-bold text-[20px] gap-[5px] items-center flex'><MdOutlineWork fontSize={'24px'} color='white' />Work experience</h1>
        <ul className='flex w-full justify-between'>
          <div className='w-[30%]'>
            <b>2023/06 – 2023/02</b>
            <h2>TTM Company</h2>
            <ul className='list-disc'>
              <li>Inter ship - Dev Power apps</li>
              <li>Build project document management application</li>
              <li>Build timekeeping and surveying apps</li>
              <li>Team size: 3 (One lead and 2 internship)</li>
              <li>Technologies: Power apps, power automate, sharepoint</li>
              <li>Role: Frontend developer</li>
              <li>Technologies: React native</li>
            </ul>
          </div>
          <div className='w-[35%]'>
            <b>08/2022 - 10/2022</b>
            <h2>CÔNG TY CỔ PHẦN KHOA HỌC DỮ LIỆU</h2>
            <ul className='list-disc'>
              <li>Inter ship - Frontend</li>
              <li>Build interface</li>
              <li>Team size: 4(Two frontend, one backend and one BA)</li>
              <li>Role: Frontend Developer</li>
              <li>Technologies:
                <p>+ Frontend : Reactjs, Tailwind css....</p>
                <p>+ BackEnd : Java, Spring Boot, NodeJs....</p>
              </li>
              <li>Responsibilities:
                <p>+ Code the interface</p>
                <p>+ Call api</p>
                <p>+ Event handling</p>
                <p>+ Fix bug</p>
              </li>
            </ul>
          </div>
          <div className='w-[30%]'>
            <b>06/2022 - 07/2022</b>
            <ul className='list-disc'>
              <li>Personal project</li>
              <li>Build Zingmp3 react project</li>
              <li>Technologies: React js, Tailwind css, React Router Dom, Moment....</li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Exp