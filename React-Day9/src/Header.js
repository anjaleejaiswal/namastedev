import logo from "../assets/foodVilla.jpg";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useAuth from "../utils/useAuth";

const Title = () => (
    <a href="/"><img src={logo} alt="logo" className="foodLogo"/></a>

);



const Header = () => {
    //const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();
    const isLoggedIn = useAuth();


    
    return (
        <div className = "header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/instamart">InstaMart</Link></li>
                </ul>
            </div>
            <h1>{isOnline ? "user Online" : "user Offline"}</h1>
            <button id="auth">Login</button>
            {/* {isLoggedIn ? 
                <button onClick={()=> setIsLoggedIn(false)}>Logout</button> 
                :
                 <button onClick={()=> setIsLoggedIn(true)}>Login</button> 
            } */}
            
            
        </div>
    )
}

export default Header;