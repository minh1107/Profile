import logo from './logo.svg';
import './App.css';
import Select from './components/Select';
import * as imgIcon from './assets/img'
import { useState } from 'react';
import Info from './components/Info';
import Exp from './components/Exp';
import More from './components/More';
import Skill from './components/Skill';
import Project from './components/Project';

function App() {
  const [show, setShow] = useState(false)
  const [showAll, setShowAll] = useState(false)
  return (
    <div className='w-screen shadow-2xl h-[100vh] overflow-auto relative text-center text-white bg-main flex flex-grow flex-col font-ubuntu'>
      <div className='bg-[#007BBE] border-8 border-[#5689FB] xl:h-[300px] mt-[50px] w-[200px] h-[200px] xl:w-[300px] rounded-full mx-auto'>
        <img alt='' src={imgIcon.avatar} className='h-full w-full rounded-full object-scale-down ' />
      </div>
      <div className='mt-[20px] font-bold'>
        <h1 className='xl:text-[50px] text-[30px]'>My name is Quang Minh</h1>
        <p className='xl:text-[50px] text-[30px]'>Front-end developer</p>
        <p className='text-[20px] '><span>Contract with me </span>
          <a className='text-link underline hover:text-blueCustom transition duration-300' target='blank' href='https://shorturl.at/auxJQ'>Linkin</a>
        </p>
      </div>
      <div className='flex flex-wrap mt-[100px] justify-around mx-[40px] xl:mt-[40px] rounded-md xl:text-[14px] text-[10px]'>
        <Select text={'Information'} imgLink={imgIcon.info} type={'info'} setShow={setShow} setShowAll={setShowAll}/>
        <Select text={'Work experience'} imgLink={imgIcon.experience} type={'exp'} setShow={setShow} setShowAll={setShowAll}/>
        <Select text={'Skills'} imgLink={imgIcon.skill} type={'skill'} setShow={setShow} setShowAll={setShowAll}/>
        <Select text={'Project'} imgLink={imgIcon.product} type={'project'} setShow={setShow} setShowAll={setShowAll}/>
        <Select text={'More'} imgLink={imgIcon.more} type={'more'} setShow={setShow} setShowAll={setShowAll}/>
      </div>
      {showAll && <div className='absolute xl:top-[30%] xl: top-[20%] left-[50%] animate-moveUp xl:h-[400px] h-[300px] xl:w-[1000px] w-[100%] '>
        {show === 'info' && <Info />}
        {show === 'exp' && <Exp />}
        {show === 'more' && <More />}
        {show === 'project' && <Project />}
        {show === 'skill' && <Skill />}
      </div>}
    </div>
  );
}

export default App;
