import Header from "../Header"
import "./index.css"

export default function Notfound(){
    return(
        <div className="notfound-main-container">
            <Header/>
            <div className="notfound-main-container2">
            <img alt="not found" src="https://img.freepik.com/free-vector/isometric-error-lost-404-page-network-user-people-concept-lost-network-website-page-error-available-webpage-vector-illustration-found-404-internet-page_229548-1969.jpg?w=826" className="not-found-image"/>
            </div>
        </div>
    )
}