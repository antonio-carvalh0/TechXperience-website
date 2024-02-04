import React from 'react'
import './footer.css'

const Footer = () => {

    const [isPopupVisible, setPopupVisibility] = React.useState(false);
  
    const togglePopup = () => {
      setPopupVisibility(!isPopupVisible);
    };

  return (
    <div className='footer'>
        <h1><a href="#">TechXperience</a></h1>
        <div className='info'>
          <p>For inquiries and sponsorship opportunities, <br/> please contact:</p>
          <ul>
              <li>Email: info@techxperience2024.com</li>
              <li>Phone: +1 (555) 123-4567</li>
          </ul>
        </div>
        <div className="smallscreen">
          <ul>
              <li onClick={togglePopup}>Contacts</li>
              <div className={`hidden ${isPopupVisible ? 'show' : ''}`}>
                <li>Email: <br />info@techxperience2024.com</li>
                <li>Phone: <br />+1 (555) 123-4567</li>
              </div>             
          </ul>
        </div>
        
    </div>
  )
}


export default Footer