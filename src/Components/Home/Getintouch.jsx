import React from 'react'

const Getintouch = () => {
  return (
    <section>
      <div className='container m-auto'>
        <div className='bg-skill flex items-center justify-center py-12 px-4'>
          <div className='bg-white rounded-xl shadow-lg w-full max-w-2xl p-8 space-y-6'>
            <h2 className='text-center font-bold font-poppins text-3xl'>Get In Touch</h2>
            <form action="#" className='space-y-4'>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
             <div>
                <label htmlFor="#" className='block'>Name</label> 
                <input type="text" className='mt-2 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600' />
              </div>
              <div>
                <label htmlFor="#" className='block'>Email</label>
                <input type="email" className='mt-2 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'/>
              </div>
             </div>
             <div>
              <label htmlFor="#" className='block'>subject</label>
              <input type="text" className='mt-2 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600' />
             </div>
             <div>
              <label htmlFor="#" className='block'>message</label>
              <input className='w-full py-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'></input>
             </div>
              <div>
                <button className='w-full bg-bg rounded-lg py-2 text-white text-base font-poppins font-normal mt-6'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Getintouch
