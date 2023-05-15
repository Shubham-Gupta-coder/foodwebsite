import React from 'react'

const Card = (props) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
          <div className={`img w-[350px] h-[350px] rounded-full ${props.img} bg-cover bg-center border-[10px] border-[#FFB500]`}></div>
          <div className='w-[350px] rounded-full bg-[#FFB500] py-2'>
              <h1 className='text-black text-6xl text-center'>{props.name}</h1>
          </div>
    </div>
  );
}

export default Card