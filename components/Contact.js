import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className={`w-screen max-md:h-max max-md:py-10 h-screen bg-[url('/rec2.jpg')] bg-cover bg-no-repeat bg-bottom flex-col flex items-center`}
    >
      <h1 className="text-7xl md:text-[11rem] text-center text-[#000] ">CONTACT</h1>
      <div className="flex items-center md:w-[80vw] max-lg:flex-col-reverse space-x-5 mx-auto justify-between">
        <form className="form flex flex-col space-y-10 items-center justify-center md:w-[60%]">
          <input
            type="text"
            className="px-2 pb-5 p-2 rounded-2xl w-full text-5xl bg-[white] border-4 border-[#FFB500]"
            placeholder="NAME"
          />
          <input
            type="email"
            className="px-2 pb-5 p-2 rounded-2xl w-full text-5xl bg-[white] border-4 border-[#FFB500]"
            placeholder="EMAIL"
          />
          <input
            type="password"
            className="px-2 pb-5 p-2 rounded-2xl w-full text-5xl bg-[white] border-4 border-[#FFB500]"
            placeholder="PASSWORD"
          />
          <button
            type="submit"
            className=" py-3 flex pt-5 px-40 text-center rounded-2xl text-5xl text-black bg-[#FFB500]"
          >
            SEND
          </button>
        </form>
        <div className="img w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-2xl bg-[#FFB500] pt-5 pr-5 max-md:my-10">
          <div className='w-full h-full bg-[url("/contact.jpg")] rounded-2xl bg-cover bg-no-repeat bg-left-bottom'></div>
        </div>
      </div>
    </section>
  );
}

export default Contact