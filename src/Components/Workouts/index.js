import Header from "../Header"
import { useEffect, useState } from "react"
import { Carousel} from "react-bootstrap"
import "./index.css"
import Card from "../Card"
import Cookies from "js-cookie"

export default function Workouts(){
const[element,setelement]=useState([])

const[initial,setIntial]=useState("")

const order = "Calorieburnperhour"

useEffect(() => {
    const jwtToken= Cookies.get("jwt_token")
    
    fetch(`http://localhost:4000/workouts?sort=${order}`,{
        method:"GET",
        headers: {
                        Authorization: `Bearer ${jwtToken}`,
                      }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setelement(data)
        ;
    })
  }, [])


  const settingvalue=(event)=>{
        setIntial(event.target.value)
        
  }

  const settingorder=(event)=>{
      console.log("selected option",event.target.value)
      const jwtToken= Cookies.get("jwt_token")
      const ele=event.target.value
      console.log("i am in setting order",ele)
    fetch(`http://localhost:4000/workouts?sort=${ele}`,{
        method:"GET",
        headers: {
            Authorization: `Bearer ${jwtToken}`,
          }
    })
    .then(res => res.json())
    .then(data => {
        console.log("ready to render",data);
        setelement(data)
        ;
    })
  }


    return(
        <div className="main-home-container">
        <Header/>
            <div className="main-home-container-2">
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block carousel-width"
                        src="https://img.freepik.com/free-vector/vector-cartoon-background-gym-with-girls-doing-fitness_33099-1205.jpg?w=1380&t=st=1648898526~exp=1648899126~hmac=e4346e0a0ecfed1d2e32dcfd360f716cab7eeb1945a8909b976ca0d2f8dd2a88"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block carousel-width"
                        src="https://img.freepik.com/free-vector/gym-isometric-landing-page-fitness-equipment_107791-897.jpg?w=1380&t=st=1648898665~exp=1648899265~hmac=cf8de39d9edce8a758e67fb2b3041efd807728094eb4898bf29624337c61eb55"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block carousel-width"
                        src="https://img.freepik.com/free-vector/sport-home-banner-template_52683-52350.jpg?t=st=1648958180~exp=1648958780~hmac=1ab2ec0bdc4ecc7d62de140c997c791394ae78dfe0d989a8b6f7dc59f18606e4&w=996"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="d-block carousel-width"
                        src="https://img.freepik.com/free-vector/gym-interior-illustration_1262-16321.jpg?w=1060&t=st=1648958665~exp=1648959265~hmac=976acfbdb665de61513313effddff7c9b28d71bb5daa920fbfdaf56f630e64ab"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
                <div className="filter-container">
                    <div className="input-group input-cust">
                        <span className="input-group-text">Search</span>
                        <input type="text" onChange={settingvalue} className="input-cont"/>
                    </div>
                    <div> 
                        <select name="Order" id="cars" onChange={settingorder} className="selectstyle">
                                <option value="Calorieburnperhour">Low-High</option>
                                <option value="-Calorieburnperhour">High-Low</option>
                        </select>
                    </div>
                </div>
                <ul className="list-item-container">
                    {element.length===0?"":element.filter((eachele)=>(eachele.heading.toLowerCase().includes(initial))).map(each=>(<Card key={each._id} each={each}/>))}
                </ul>
            </div>
        </div>
    )
}