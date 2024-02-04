import React from 'react'
import './speakers.css'

let person_data = [
    {
        name: 'Dr. Allison Techworth',
        topic: 'Artificial Intelligence: Shaping the Future',
        bio: 'Dr. Techworth is a leading expert in AI research, with numerous publications and innovations under her belt.',
        image: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    {
        name: 'John CodeMaster',
        topic: 'Coding for a Better Tomorrow',
        bio: 'CodeMaster is a renowned software engineer and author, known for simplifying complex coding concepts.',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'Samantha Innovatora',
        topic: 'Innovation in Tech Startups',
        bio: 'Innovatora is the founder of a successful tech startup, disrupting the industry with creative solutions.',
        image: 'https://randomuser.me/api/portraits/women/27.jpg'
    },
]

const Speakers = () => {
  return (
    <div className='Speakers container'  id='speakers'>
        <h1>Speakers</h1>
        <div className="speakers">
            {person_data.map((person) => {
                return(
                    <div className="speaker" key={person.name}>
                        <div className="image">
                            <img src={person.image}/>
                        </div>

                        <div className="content">
                            <p><span>Name: </span><br/> {person.name}</p>
                            <p><span>Topic: </span> <br/>{person.topic}</p>
                            <p><span>Bio: </span><br/>{person.bio}</p>
                        </div>                    
                    </div>                
                )
            })}
        </div>
    </div>
  )
}

export default Speakers