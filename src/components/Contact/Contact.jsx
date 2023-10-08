import React, { useRef } from 'react'
import './contact.css';
import icon1 from "../../assets/facebook-icon.png"
import icon2 from "../../assets/twitter.png"
import icon3 from "../../assets/youtube.png"
import icon4 from "../../assets/instagram.png"
import emailjs from '@emailjs/browser';
//https://dashboard.emailjs.com/sign-in
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_na5j466', 'template_4xstexl', form.current, '0QCKRZxW8DlhiiGUV')
            .then((result) => {
                e.target.reset();
            }, (error) => {
                e.target.reset();
            });
    };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out this form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' name="your_name" placeholder='Your Name' />
                    <input type='email' className='email' name="your_email" placeholder='Your Email' />
                    <textarea className="msg" name='message' cols={20} rows={5} placeholder='Your meassage'></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={icon1} alt="Facebook" className="link" />
                        <img src={icon2} alt="Twitter" className="link" />
                        <img src={icon3} alt="Youtube" className="link" />
                        <img src={icon4} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
