import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Hero = () => {
    return (
        <section className='w-full'>
            {/* Search */}
            <form action="" className='flex justify-center items-center mx-[20%] mt-5'>
                <BiSearch className='absolute left-[20%] ml-3.5' />
                <input
                    type="text"
                    placeholder='Avengers End Game'
                    className='search_input peer'/>
                <button type='submit' className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
                    Enter
                </button>
            </form>
        </section>
    )
}

export default Hero