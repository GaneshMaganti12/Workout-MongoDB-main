import React from 'react'
import Header from '../Header'
import "./index.css"

function Contact() {
  return (
    <>
        <Header/>
        <div className='contact-container'>
            <div className='contact-card'>
                <div className='contact-content'>
                    <h1 className='contact-title'>Contact Us</h1>
                    <p className='contact-para'> Customer Care</p>
                </div>
                <img alt='contact' src='https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=740&t=st=1648884908~exp=1648885508~hmac=a81c8ee6b713186218c992afc4d770eae4f8501e74ab41f7e8acb08356db83df' className='contact-image'/>
            </div>
        </div>
    </>
  )
}

export default Contact