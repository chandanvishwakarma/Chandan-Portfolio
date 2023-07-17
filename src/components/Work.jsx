import React from 'react'
import ZMLanding from '../assets/project/ZMLanding.jpeg'
import TaskMNG from '../assets/project/TaskMNG.png'
import Myntra from '../assets/project/Myntra.png'
import Book from '../assets/project/Book-My-Show.png'
import Our from '../assets/project/Our-Two-Words.png'
import ZSlanding from '../assets/project/ZSlanding.jpeg'


const Work = () => {
  return (
    <div name='work'id='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
       <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-6'>Check out some of my recent works !!!</p>
        </div>
        {/*Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"> 
        {/* Grid Items */}
            <div style={{backgroundImage: `url(${ZMLanding})`}}className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div '>
               {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    Zomato-landing
                    HTML5 and CSS3
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://chandanvishwakarma.github.io/zomato-landing-page/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/chandanvishwakarma/zomato-landing-page'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${TaskMNG})`}} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div '>
               {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className="text-2xl font bold text-white tracking-wider ">
                    Task-manegment!
                    HTML,CSS,Bootstrap
                       JavaScript
                    
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://chandanvishwakarma.github.io/Task-manegment/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/chandanvishwakarma/Task-manegment'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Myntra})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100 text-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      Myntra-web-App
                       HTML5 & CSS3
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://chandanvishwakarma.github.io/Myntra-web-App/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/chandanvishwakarma/Myntra-web-App'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Book})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100 text-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                          Book-My-Show
                          js,React,PaypalAPI
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/chandanvishwakarma/book-my-show'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/chandanvishwakarma/book-my-show'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Our})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100 text-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                          Our-Two-Words
                          Js,React,Chakra UI
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://our-two-words.vercel.app/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/chandanvishwakarma/OurTwoWords'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${ZSlanding})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
               {/* Hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                          React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href=' /'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Work