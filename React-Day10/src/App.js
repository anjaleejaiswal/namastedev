import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/Header";
import Footer from "../src/Footer";
import Body from "../src/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Cart from "./Cart";
import RestaurantMenu from "./RestaurantMenu";
import Profile from "./Profile";
import Shimmer from "./Shimmer";

//import InstaMart from "./InstaMart";
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

//chunking 
//code splitting
//dynamic bundling
//lazy loading
//dynamic import

const InstaMart = lazy(() => import("./InstaMart"));
const About = lazy(() => import("./About"));

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
                element  : <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
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
            },
            {
                path : "/instamart",
                element : <Suspense fallback={<Shimmer />}><InstaMart /></Suspense>
            }
        ]
        
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("Root"));

//root.render(<AppLayout />);
root.render(<RouterProvider router={AppRouter}/>);