import logo from "../assets/foodVilla.jpg";
import {useState} from "react";
import { Link } from "react-router-dom";

const Title = () => (
    <a href="/"><img src={logo} alt="logo" className="foodLogo"/></a>

);



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <div className = "header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button> }
            
            
        </div>
    )
}

export default Header;