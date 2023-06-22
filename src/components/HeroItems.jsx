import React, { useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import imdb from '../assets/imdb-icon.svg'

const HeroItems = () => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <div className='flex flex-col'>
            <img className='rounded-t-lg' src="https://image.tmdb.org/t/p/w780/frDS8A5vIP927KYAxTVVKRIbqZw.jpg" alt="" />
            <div className='px-3 shadow-lg shadow-gray-500'>
                <div className='flex justify-between items-center mt-3'>
                    <h2>The Batman</h2>
                    <div className='flex'>
                        <span className='flex mr-5  items-center'>
                            <BsStarFill className='mr-1 text-yellow-400' /> rating
                        </span>
                        <img className='w-10' src={imdb} alt="imdb" />
                    </div>
                </div>
                <div>
                    <span>year</span>
                    <p>Genres</p>
                    {showDetails ? (
                        <>
                            <div className='flex'>
                                <p className='border rounded-full border-gray-800 max-w-fit py-1.5 px-3'>minutes</p>
                                <p className='border rounded-full border-gray-800 max-w-fit py-1.5 px-3 ml-5'>age</p>
                            </div>
                            <p>Director: </p>
                            <p>Cast: </p>
                            <p>movie description</p>
                            <button onClick={toggleDetails}>More Details</button>
                        </>
                    ) : (
                        <button onClick={toggleDetails}>More Details</button>
                    )}
                </div>
            </div>
        </div >
    )
}

export default HeroItems