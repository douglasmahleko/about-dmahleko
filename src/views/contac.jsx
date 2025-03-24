import './contact.css'
import React from 'react'


export default function Contact(){
    return(
        <section id="contact" className='containerContacts'>
            <h1 className="title">Contact</h1>
            <form action="">
                <div className="formGroup">
                    <label htmlFor="name" hidden>Name</label>
                    <input type="text" required placeholder='Name'
                        name='name' id='name'
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>Email</label>
                    <input type="email" required placeholder='Email'
                        name='email' id='email'
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>Message</label>
                    <textarea 
                        placeholder='Message'
                        name='message' 
                        id='message' 
                        required>
                    </textarea>
                </div>
                <input type="submit" value="Submit" className='hover btn' />
            </form>
        </section>
    )
}