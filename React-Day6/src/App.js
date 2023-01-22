import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/Header";
import Footer from "../src/Footer";
import Body from "../src/Body";

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
                <Body />
                <Footer />
            </>
        );
}

const root = ReactDOM.createRoot(document.getElementById("Root"));

root.render(<AppLayout />);