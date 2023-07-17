import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST'
         action='https://getform.io/f/37d26a85-2169-430b-aff2-c303442c102d' className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the below form or shoot me an email - cvishwakarma068@gmail.com</p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type='Email' placeholder='@gmail.com' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name='message' row='10' placeholder='Message'></textarea>
           <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-3 mx-auto flex items-center'>Let's Connect!</button>
        </form>
    </div>
  )
}

export default Contact