import React from 'react'
import Collaboration from './Collaboration'

const Contact = () => {
  return (
    <div>
      <div>
        <div className="text-center md:text-center lg:text-left my-3">
          <h1 className='font-bold text-3xl md:text-5xl text-[#f6f6f6]'>Let's Create<br /> Something <span className='text-amber-500'>Amazing</span></h1>
        </div>
        <form action="" className='bg-[#2c2d2e] p-5 flex flex-col gap-2 rounded-xl'>
          <div>
            <label className='text-white'>Name</label> <br />
            <input type="text" placeholder='Your Name' className='bg-[#494a4b] mt-2 w-full p-3 rounded-sm text-white outline-1 outline-amber-500'/>
          </div>
          <div>
            <label className='text-white'>Name</label> <br />
            <input type="email" placeholder='Your Email' className='bg-[#494a4b] mt-2 w-full p-3 rounded-sm text-white outline-1 outline-amber-500'/>
          </div>
          <div>
            <label className='text-white'>Message</label> <br />
            <textarea name="message" id="message" cols="68" rows="5" placeholder='You Message' className='bg-[#494a4b] mt-2 p-3 text-white rounded-sm outline-1 outline-amber-500'></textarea>
          </div>
          <button className='w-full bg-amber-500 p-3 text-white rounded-sm cursor-pointer'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact