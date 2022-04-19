import React from 'react'
import "./LandingPage.css"
import LoginHeader from '../LoginHeader/LoginHeader'

export default function LandingPage() {


  return (
        <>
            <LoginHeader/>
            <div className='land-page-container'>
                <img className='workout-image' src="https://img.freepik.com/free-vector/athletes-doing-fitness-exercise-gym-with-panoramic-windows-isolated-flat-vector-illustration-cartoon-people-cardio-training-weight-lifting_74855-8225.jpg?t=st=1647401572~exp=1647402172~hmac=eeb0ef11e13e8a5915ff749c640181cebfe33d919dc9aa9ec3cebb7fa1a57536&w=1060" alt="workout" />
                <div>
                    <h1 className='welcome-title'>Welcome to the</h1>
                    <h1 className='workout-title'>Workouts</h1>
                </div>
            </div>
        </>
  )
}