import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginHeader.css'

function LoginHeader() {

    const navigate = useNavigate()

    const goToLandPage = () =>{
        navigate('/')
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light background">
        <div className="container-fluid">
            <h1 className="nav-title" onClick={goToLandPage}><img src="https://res.cloudinary.com/da3j7arz0/image/upload/v1650100154/20541067_knahqu.jpg" className="logo" alt='workout logo'/>Workout</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav nav-items">
                <Link to="/login" className='link' ><p className="nav-bar">Login</p></Link>
                <Link to="/register" className="link"><p className="nav-bar">Register</p></Link>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default LoginHeader