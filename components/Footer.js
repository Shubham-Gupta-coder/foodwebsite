import React from 'react'

const Footer = () => {
  return (
    <section>
      <footer className="w-screen bg-black md:pl-[10vw] py-2 text-white flex items-center">
        <div>
          <img src="/logo.png" className="md:w-[100px] max-md:ml-5 w-[50px]" alt="" />
              </div>
              <i className='text-white text-2xl md:text-3xl ml-10 tracking-wide'>WEBINA &copy; 2023 All Rights Reserved</i>
      </footer>
    </section>
  );
}

export default Footer