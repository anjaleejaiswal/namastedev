import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/Header";
import Footer from "../src/Footer";
import Body from "../src/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Cart from "./Cart";
import RestaurantMenu from "./RestaurantMenu";
import Profile from "./Profile";
/*
Header
 -Logo
 -NavBar
Body
    -Search
    -Restaurant List 
    -Restaurant Card
        -image
        -Name
        -cuisines
        -Rating
Footer
*/

const AppLayout = () => {
    return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        );
}

const AppRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout /> ,
        errorElement : <Error />,
        children : [
            {
                path : "/",
                element  : <Body />
            },
            {
                path : "/about",
                element  : <About />,
                children : [{
                    path : "profile",
                    element : <Profile />
                }
                ]
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/cart",
                element : <Cart />
            },
            {
                path : "/restaurant/:id",
                element : <RestaurantMenu />
            }
        ]
        
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("Root"));

//root.render(<AppLayout />);
root.render(<RouterProvider router={AppRouter}/>);