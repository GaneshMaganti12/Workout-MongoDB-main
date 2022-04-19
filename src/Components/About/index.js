import React from 'react'
import Header from '../Header'
import "./index.css"

function About() {
  return (
    <>
        <Header/>
        <div className='about-container'>
            <div className='about-card'>
                <div className='about-content'>
                    <h1 className='about-title'>About Us</h1>
                    <p className='about-para'>Improves muscle strength in the lungs, heart, and whole body. Lowers blood pressure. Improves circulation and blood flow in the muscles. Increases the red blood cell count to enhance oxygen transportation.</p>
                    <button className='about-button' type='button'>Get Started</button>
                </div>
                <img alt='about' src='https://img.freepik.com/free-vector/outdoor-workout-training-healthy-lifestyle-open-air-jogging-fitness-activity-male-athlete-running-park-muscular-sportsman-exercising-outdoors-vector-isolated-concept-metaphor-illustration_335657-1338.jpg?w=740&t=st=1648884017~exp=1648884617~hmac=058554d06c19d83f11871e26367539bbf2a698ba694feb508cc421c63ed9ac85' className='about-image'/>
            </div>
        </div>
    </>
  )
}

export default About