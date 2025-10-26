import { Github, Instagram, LucideLinkedin, MailIcon, Twitter, } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <main className='max-w-screenc md:p-20 p-8 bg-gray-100'>
    <section className='flex sm:flex-row flex-col justify-between items-center border-b border-gray-500 pb-8'>
        <div className='lg:max-w-2xl max-w-6xl flex flex-col justify-center  lg:items-start items-center'>
            <MailIcon className='w-14 h-14 '/>
            <p className='text-[16px] font-medium max-w-90  mt-4'>Never worry about phrasing again. Draftly crafts professional,
            ready to send emails tailored to your needs, in just a few clicks.</p>
            <div className='max-w-4xl flex items-center gap-4 mt-8' >
                <a href='https://www.linkedin.com/in/codesagarrr/' className='cursor-pointer text-gray-500 hover:text-blue-400  transition-all'><LucideLinkedin/></a>
                <a href='https://x.com/dev_sagar_7' className='cursor-pointer text-gray-500 hover:text-gray-700 transition-all'><Twitter/></a>
                <a href='https://www.instagram.com/dev.sagar_/' className='cursor-pointer text-gray-500 hover:text-violet-600  transition-all'><Instagram/></a>
                <a href='https://github.com/CodeSagarrr' className='cursor-pointer text-gray-500 hover:text-zinc-600  transition-all'><Github/></a>
            </div>
        </div>

        <div className='max-w-6xl md:p-6 p-8 flex flex-row justify-center items-center gap-10 md:mr-10 mr-2'>
            <div className='flex flex-col  justify-center items-start space-y-4 '>
                    <h1 className='text-xl font-semibold'>COMPANY</h1>
                    <a href='#' className='text-[16px] text-gray-600 font-medium'>About Us</a>
                    <a href='#' className='text-[16px] text-gray-600 font-medium'>Privacy Policy</a>
                    <a href='#' className='text-[16px] text-gray-600 font-medium'>Terms of Service</a>
            </div>

            <div className='flex flex-col justify-center items-start space-y-4'>
                    <h1 className='text-xl font-semibold'>SUPPORT</h1>
                    <a href='#' className='text-[16px] text-gray-600 font-medium'>Help Center</a>
                    <a href='#' className='text-[16px] text-gray-600 font-medium'>Connect Us</a>
                    <a href='#' className='text-[16px] text-gray-600 font-medium'>FAQs</a>
            </div>
        </div>
    
    </section>

    <div className='flex justify-center items-center mt-6 text-gray-500 font-medium'>
      &#169; {new Date().getFullYear()} Draftly. All Rights Reserved
    </div>

    </main>
  )
}

export default Footer