import React from 'react'

const Select = ({ imgLink, text, type, setShow, setShowAll }) => {

  return (
    <div onMouseOut={() => {
      setShow('')
      setShowAll(false)
    }}
      onMouseOver={() => {
        setShow(type)
        setShowAll(true)
      }} className='flex-[0 0 20%] min-w-[18%] mb-[10px] hover:border-none max-w-[250px] hover:bg-[#1db0f5] cursor-pointer hover:transform  hover:transition transition hover:duration-500 border-2 border-[#cccccca3] duration-500 translate-y-[0px]  hover:translate-y-[-20px] relative shadow-2xl rounded-xl text-left flex flex-col justify-around p-[30px] h-[268px]'>
        <img alt='' className='h-[75px] w-[75px] ' src={imgLink} />
        <p className='xl:text-[24px] text-[14px] font-thin'>{text}</p>
        <div>
          <a className='inline-flex border-b border-white xl:text-[20px] text-[16px] hover:border-[blue] hover:text-[blue] font-thin'>More</a>
        </div>
    </div>
  )
}

export default Select