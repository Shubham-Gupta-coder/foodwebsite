import React from 'react'

const Hero = () => {
  return (
      <section
          id='home'
      className={`w-full h-[50vh] md:h-screen bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-bottom flex items-center `}
    >
      <h1 className='text-8xl md:text-[11rem] md:ml-[10vw] mt-10 md:mt-[20vh] leading-none font-semibold text-white md:w-1/3 max-md:text-center'>
        THE BEST DELECIOUS <span className="text-[#FFB500]"> FOOD</span>
      </h1>
    </section>
  );
}

export default Hero