import "./index.css"
import {Link} from "react-router-dom"

export default function Card(props){
    console.log(`/${props.each.id}`)
    return(
        <Link className="link-card" to={`/workouts/${props.each._id}`}>
            <li className="card-container shadow">
                <img className="card-img" src={props.each.imageurl} alt="workout"/>
                <div className="card-content">
                    <h1 className="card-head">{props.each.heading}</h1>
                    <p className="card-burn">Loss of Weight : <span className="calorie-hour">{props.each.Calorieburnperhour} Calories/hour </span></p>
                    <p className="para-card">{props.each.discriptionforcard}</p>
                </div>
            </li>
        </Link>
    )
}