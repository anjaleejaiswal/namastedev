import logo from "../assets/foodVilla.jpg";
import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useAuth from "../utils/useAuth";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Title = () => (
    <a href="/"><img src={logo} alt="logo" className="h-24 px-2 m-2"/></a>
);

const Header = () => {
    //const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();
    const isLoggedIn = useAuth();

    const {user} = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);
    

    return (
        <div className = "flex justify-between bg-slate-100 shadow-lg">
            <Title />
            <div>
                <ul className="flex py-8 ">
                    <li className="p-2 m-2 hover:text-blue-600"><Link to="/">Home</Link></li>
                    <li className="p-2 m-2 hover:text-blue-600"><Link to="/about">About</Link></li>
                    <li className="p-2 m-2 hover:text-blue-600"><Link to="/contact">Contact</Link></li>
                    <li className="p-2 m-2 hover:text-blue-600"><Link to="/instamart">InstaMart</Link></li>
                    <li className="p-2 m-2 hover:text-blue-600"><Link to="/cart">Cart-{cartItems.length} items</Link></li>
                </ul>
            </div>
            <div className="text-sm py-11">{user.name}</div>
            <h1 className="py-11">{isOnline ? "user Online" : "user Offline"}</h1>
            <button id="auth" className="bg-slate-500 h-12 rounded-md px-2 mt-8 mr-6 w-24 hover:bg-slate-700 hover:text-white" >Login</button>
            {/* {isLoggedIn ? 
                <button onClick={()=> setIsLoggedIn(false)}>Logout</button> 
                :
                 <button onClick={()=> setIsLoggedIn(true)}>Login</button> 
            } */}
            
            
        </div>
    )
}

export default Header;