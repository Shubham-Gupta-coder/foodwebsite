import React from 'react'
import Card from './Card';

const Service = () => {
  return (
      <section
          id='service'
      className={`w-screen h-max max-md:py-10 md:h-screen bg-[url('/rec1.png')] bg-cover bg-no-repeat bg-bottom flex-col flex items-center md:justify-center`}
    >
          <h1 className="text-7xl md:text-[11rem] max-md:mb-20 text-center  text-[#FFB500] ">
              SERVICE
          </h1>
          <div className="cards flex md:space-x-5 max-md:space-y-10 max-lg:flex-col">
              <Card name="cakes" img="bg-[url('/cakes.jpg')]" />
              <Card name="pancakes" img="bg-[url('/pancakes.jpg')]" />
              <Card name="burger" img="bg-[url('/burger.jpg')]" />
          </div>
    </section>
  );
}

export default Service