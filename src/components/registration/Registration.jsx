import React, { useState, useEffect } from 'react';
import './registration.css'

const Registration = () => {

    const data = [
        {
            type: 'Early Bird Registration (Until May 1, 2024)',
            fee: '$199',
            benefits: [
                'Access to all keynote sessions and panel discussions on Day 1',
                'Early entry to the networking mixer',
                'Exclusive TechXperience 2024 merchandise'
            ],
        },
        {
            type: 'Regular Registration (After May 1, 2024)',
            fee: '$249',
            benefits: [
                'Full access to all event sessions, workshops, and activities on Days 1, 2, and 3',
                'Networking opportunities with industry leaders and fellow attendees',
                'TechXperience 2024 conference materials'
            ],
        },
        {
            type: 'Group Registration (5 or more attendees)',
            fee: '$199 per person',
            benefits: [
                'Same benefits as regular registration',
                'Group seating arrangements for sessions and workshops'
            ],
        },
        {
            type: 'Student Registration',
            fee: '$99 (with valid student ID)',
            benefits: [
                'Access to all conference sessions',
                'Student-specific networking events',
                'Certificate of participation'
            ],
        },
    ]

    const [countItem, setCountItem] = useState(0)
    const [itemActive, setItemActive] = useState(0)

    useEffect(() => {
        setCountItem(data.length);
    }, [])

    const handleNextClick = () => {
        setItemActive((prevItemActive) => (prevItemActive + 1) % countItem)    
    }

    const handlePrevClick = () => {
        setItemActive((prevItemActive) => (prevItemActive - 1 + countItem) % countItem)
    }

    return (
        <div className='registration' id='registration'>
            <h1>Registration</h1>
            <div className="slider">
            {data.map((data,index) => {
                return(
                    <div className={`item ${index === itemActive ? 'active' : ''}`}>
                        <div className="content">
                            <h2>{data.type}</h2>
                            <p>Fee: {data.fee}</p>
                            <ul>
                                <p>Benefits:</p>
                                {data.benefits.map((ben) => {
                                    return (
                                        <li>{ben}</li>
                                    )
                                })}
                            </ul>
                            <button>Buy Now</button>
                        </div>
                    </div>                   
                )
            })}
            </div>
            <div className="buttons">
                <button className='prev' onClick={handlePrevClick}>{'<'}</button>
                <button className='next' onClick={handleNextClick}>{'>'}</button>
            </div>            
        </div>
    )
}

export default Registration