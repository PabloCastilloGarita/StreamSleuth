import React from 'react'
import logo from '../../public/logo.svg'

const Header = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt="streamsleuth_logo" className='h-32' />

                <button
                    type='button'
                    onClick={() => window.open('https://github.com/PabloCastilloGarita/StreamSleuth')}
                    className='black_btn'
                >
                    Github
                </button>
            </nav>

            <h1 className='py-1 text-3xl font-black'>Welcome to StreamSleuth</h1>
            <h2 className='py-1 text-lg font-medium'>Search for your favorite films and see in which streaming services are available</h2>
        </header>
    )
}

export default Header