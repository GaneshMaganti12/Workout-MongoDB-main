import React from "react"
import Header from "../Header"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import "./index.css"
import Cookies from "js-cookie"

export default function Fullcard(){

    const [final,setfinal] = useState({})

    const [startDisabled, setStartDisabled] = useState(false)

    const [stopDisabled, setStopDisabled] = useState(false)

    const req = useParams()

    useEffect(()=>{

        const jwtToken= Cookies.get("jwt_token")
        fetch(`http://localhost:4000/workouts/${req.id}`,{method:"GET", headers: {
            Authorization: `Bearer ${jwtToken}`,
            }}).then(res=>(res.json()))
        .then((data)=>{
            console.log("jeff",data)
            setfinal(data)})
    },[req.id])


    const startWorkout = () =>{
        setStartDisabled(!startDisabled)
    }

    const stopWorkout = () =>{
        setStopDisabled(!stopDisabled)
        setStartDisabled(!startDisabled)
    }

    return(
        <>
            <Header/>
            <div className="main-card-container">
                <div className="main-card">
                    <div className="card-content">
                        <h1 className="card-heading">{final.heading}</h1>
                        <p className="card-calories">Loss of Weight : <span className="calorie">{final.Calorieburnperhour} Calorie/hr</span></p>
                        <h1 className="card-descrip">Description:</h1>
                        <p className="card-para1">{final.fulldiscription}</p>
                    </div>
                    <div>
                        <img src={final.imageurl} className="card-image shadow" alt="workout"/>
                        <div className="button-cards">
                            <button className="btn btn-success" onClick={startWorkout} disabled={startDisabled} type="button">Start</button>
                            <button className="btn btn-danger" onClick={stopWorkout} disabled={stopDisabled}  type="button">Stop</button>
                            <button className="btn btn-primary" type="button">result</button>
                        </div>
                    </div>
                </div>
                <div className="video-player">
                    <h1 className="card-title">How To Work</h1>
                    <div className="video-container">
                    <ReactPlayer height="450px" width="800px" url={final.videourl}/>
                    </div>
                </div>
            </div>
        </>
    )
}