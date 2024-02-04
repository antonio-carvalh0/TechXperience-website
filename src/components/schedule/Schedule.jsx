import React, { useState, useEffect, useRef } from 'react';
import './schedule.css'
import day_1 from '../../assets/day-1.png'
import day_2 from '../../assets/day-2.png'
import day_3 from '../../assets/day-3.png'

const Schedule = () => {

    let schedule_data = [
        {
            date: 'Day 1: June 15, 2024',
            hours: ['9:00 AM - Registration Opens','10:00 AM - Keynote Address by Dr. Allison Techworth','12:00 PM - Lunch Break','2:00 PM - Breakout Sessions','5:00 PM - Networking Mixer'],
            image: day_1
        },
        {
            date: 'Day 2: June 16, 2024',
            hours: ['9:30 AM - Panel Discussion: "Tech Trends 2024"','11:30 AM - Workshops and Hands-on Labs','1:00 PM - Lunch and Poster Presentations','3:00 PM - Fireside Chat with John CodeMaster','6:00 PM - Networking Reception'],
            image: day_2
        },
        {
            date: 'Day 3: June 17, 2024',
            hours: ['10:00 AM - Startup Showcase','12:00 PM - Closing Keynote by Samantha Innovatora','1:30 PM - Awards Ceremony','3:00 PM - Farewell and Thank You'],
            image: day_3
        },
    ]

    const [countItem, setCountItem] = useState(0)
    const [itemActive, setItemActive] = useState(0)
    const refreshIntervalRef = useRef(null)

    useEffect(() => {
        setCountItem(schedule_data.length);
        refreshIntervalRef.current = setInterval(handleNextClick, 5000)

        return () => {
        clearInterval(refreshIntervalRef.current)
        }
    }, [countItem])

    useEffect(() => {
        showSlider();
    }, [itemActive]);

    const handleNextClick = () => {
        setItemActive((prevItemActive) => (prevItemActive + 1) % countItem)    
    }

    const handlePrevClick = () => {
        setItemActive((prevItemActive) => (prevItemActive - 1 + countItem) % countItem)
        showSlider()
    }

    const handleThumbnailClick = (index) => {
        setItemActive(index)
        showSlider()
    }

    const showSlider = () => {
        clearInterval(refreshIntervalRef.current)
        refreshIntervalRef.current = setInterval(handleNextClick, 5000)
    }
    
    return (
        <div className="schedule" id="schedule">
            <h1>Schedule</h1>
            <div className="slider">
                <div className="list">
                {schedule_data.map((data, index) => (
                    <div className={`day ${index === itemActive ? 'active' : ''}`} key={data.date}>
                        <img src={data.image} alt="" />
                        <div className="content">
                            <h1>{data.date}</h1>
                            <ul>
                            {data.hours.map((info, hourIndex) => (
                                <li key={hourIndex}>{info}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                ))}
                </div>

                <div className="arrows">
                    <button id="prev" onClick={handlePrevClick}>
                        {'<'}
                    </button>
                    <button id="next" onClick={handleNextClick}>
                        {'>'}
                    </button>
                </div>

                <div className="thumbnail">
                {schedule_data.map((data, index) => (
                    <div
                    className={`day ${index === itemActive ? 'active' : ''}`}
                    key={data.date}
                    onClick={() => handleThumbnailClick(index)}
                    >
                        <img src={data.image} alt={`Day ${index + 1}`} />
                        <div className="content">
                            Day {index + 1}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Schedule