import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import './index.css'

function Home() {

    const navigate = useNavigate()

    const goTOWorkout = () =>{
        navigate('/workouts')
    }

  return (
    <>
        <Header/>
        <div className='home-container'>
            <div className='home-card'>
                <div className='home-content'>
                    <h1 className='home-title'>Workouts</h1>
                    <p className='home-para'>Most people can increase fitness by increasing physical activity levels. Increases in muscle size from resistance training are primarily determined by diet and testosterone. This genetic variation in improvement from training is one of the key physiological differences between elite athletes and the larger population. There is evidence that exercising in middle age may lead to better physical ability later in life.</p>
                    <button onClick={goTOWorkout} className='home-button'>Let's Start</button>
                </div>
            </div>
            <img className='home-image' alt='home' src='https://img.freepik.com/free-vector/fitness-tracker-concept-illustration_114360-2569.jpg?w=740&t=st=1648875350~exp=1648875950~hmac=621367b72450eebc7b09dba47c05b896918ad0d909e86fdb99ef9e98fdeeb99c' />
        </div>
    </>
  )
}

export default Home