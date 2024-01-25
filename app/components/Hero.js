import React from 'react'
import Vector from '/public/vector.svg'
import Image from 'next/image'


const Hero = () => {
    return (
        <div className=''>
            <Image src={Vector} width={700} className='absolute -z-10' />

            <div className=' mx-auto h-dvh flex flex-col justify-center items-center relative'>
                <div className='flex flex-col justify-center items-center pt-40 px-2'>
                <div className="max-w-[775px] text-center text-white text-5xl lg:text-[82.64px] font-bold font-['Epilogue'] capitalize leading-normal lg:leading-[87.83px]">the largest edtech gathering in nigeria!</div>
                    

                    <div className='bg-[#E8C308] text-sm lg:text-lg mt-4 mb-6 w-full  py-1 lg:py-5 rounded-lg text-center'><span>THEME:</span>Navigating the educational future/ Pioneering Change, Empowering Minds</div>
                    <div className='flex pt-8 gap-6'>
                        <a href='' className='font-bold bg-[#2BA10E] hover:bg-[#2ba10ece] hover:scale-105 duration-700 py-3.5 px-3 border text-white border-white rounded-lg cursor-pointer'><button>Join The Waitlist</button></a>

                        <a href='' className='bg-white font-bold hover:bg-[#f0f0f0] hover:scale-105 duration-700 py-3.5 px-3 border text-black border-white rounded-lg cursor-pointer'><button>Get Your Tickets</button></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero