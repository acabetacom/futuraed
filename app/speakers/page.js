import React from 'react'
import Header from '../components/Header'

export default function page() {
    return (
        <section className=''>
            <div className='h-dvh'>
                <Header />
                <div className='h-dvh  flex flex-col justify-center items-start px-4 lg:px-12 max-w-2xl'>
                    <div className='mt-4'>
                        <h1 className='text-5xl lg:text-6xl text-white font-bold py-5 mt-8 capitalize leading-snug'>25+ Speakers across 12 tracks</h1>
                        <h2 className='text-lg text-gray-300'>Want to learn more about what the future of education and work holds? Hear it from the experts. FuturaEd invites speakers to join us on stage to delve into the future of work and education, with all techonologies having directly impact on it. Held across two-days and featuring 12 content tracks - there's bound to be something to learn and discover for everyone.</h2>

                        <div className='flex pt-8 gap-6'>
                            <a href='' className='font-bold bg-[#E8C308] hover:bg-[#f3da5d] hover:scale-105 duration-700 py-3.5 px-3 border text-white border-white rounded-lg cursor-pointer'><button>Regsiter Interest</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white py-12'>
                <h1 className='text-center text-xl md:text-3xl lg:text-4xl font-bold'>TOPICS WILL BE AROUND:</h1>

                <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl px-1 lg:px-6 my-20'>
                    <div className='bg-black text-white text-center w-80 py-12 px-2 text-xl'>AI/ML in Education</div>
                    <div className='bg-black text-white text-center w-80 py-12 px-2 text-xl'>Big Data Analytics in Education</div>
                    <div className='bg-black text-white text-center w-80 py-12 px-2 text-xl'>Entertainment in Education</div>
                    <div className='bg-black text-white text-center w-80 py-12 px-2 text-xl'>Finance in Education</div>
                    <div className='bg-black text-white text-center w-80 py-12 px-2 text-xl'>AR/VR in Education</div>
                    <div className='bg-black text-white text-center w-80 py-12 px-2 text-xl'>Quality of Education</div>
                    <div className='bg-black text-white text-center w-80 py-12 px-2 text-xl'>Blockchain in Education</div>
                    <div className='bg-black text-white text-center w-80 py-12 px-2 text-xl'>Cloud/Networking in Education</div>
                    <div className='bg-black text-white text-center w-80 py-12 px-2 text-xl'>Future of Work</div>





                </div>
            </div>
            <div>
                <h1>Fill the form below</h1>
            </div>
        </section>

    )
}
