import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/eduverse_assets/msg-icon.png'
import mail_icon from '../../assets/eduverse_assets/mail-icon.png'
import phone_icon from '../../assets/eduverse_assets/phone-icon.png'
import location_icon from '../../assets/eduverse_assets/location-icon.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "321c9537-aba7-48cf-a9f7-8e70c2cc9579"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
   <div className='contact' id='contact'>
  <div className='contact-content'>
    <div className='contact-info'>
      <div className='contact-header'>
        <h3>Send a message <img src={msg_icon} alt="Message icon" /></h3>
        <p>We'd love to hear from you! Whether you're curious about our courses, need support, or just want to share feedback...</p>
      </div>
      <ul className='contact-details'>
        <li><img src={mail_icon} alt="" />EduVerse@gmail.com</li>
        <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
        <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge MA 02139, USA</li>
      </ul>
    </div>
    
    <div className='contact-form'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
        </div>
        
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
        </div>
        
        <div className="form-group">
          <label>Write Your message here</label>
          <textarea name="message" placeholder='Enter your message' required></textarea>
        </div>
        
        <button type='submit' className='dark-btn'>Submit Now</button>
      </form>
      <span className={`result-message ${result.includes("Success") ? "success" : result.includes("Sending") ? "sending" : "error"}`}>{result}</span>
    </div>
  </div>
</div>
  )
}

export default Contact
