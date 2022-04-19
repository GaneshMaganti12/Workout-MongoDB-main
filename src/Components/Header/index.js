import "./index.css"
import Cookies from "js-cookie"
import { Link, useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate=useNavigate()

  const logout=()=>{
    Cookies.remove('jwt_token')
    navigate("/login")

  }
    return(
        <div className="main-container">
          <h1 onClick={()=>{navigate("/home")}} className="nav-title"><img src="https://res.cloudinary.com/da3j7arz0/image/upload/v1650100154/20541067_knahqu.jpg" className="logo" alt="logo"/>Workout</h1>
          <div className="nav-card">
            <Link to="/home" className="link"><p className="nav-items">Home</p></Link>
            <Link to="/workouts" className="link"><p className="nav-items">Workouts</p></Link>
            <Link to="/about" className="link"><p className="nav-items">About</p></Link>
            <Link to="/contact" className="link"><p className="nav-items">Contact Us</p></Link>
            <button type="button" className="logout-button" onClick={logout}>Logout</button>
          </div>
        </div>
    )
}