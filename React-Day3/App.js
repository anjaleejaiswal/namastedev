
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderDiv from "./Header";



const Heading1 = () => {
return (
    <div>
        <h2 id="title" key="h2" >
            Namaste React1
        </h2>
    </div>
)};

const heading = (
    <div>
        <h1 id="title" key="h1">Namaste React</h1>
    </div>
);



const HeaderComponent = () => {

    return (

        <div>
            <HeaderDiv/>  
            {heading}
            {Heading1()}
            <Heading1></Heading1>
            <Heading1/>
            <h3 style={{backgroundColor: "red"}}>Heading 1</h3>
        </div>
        
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>)