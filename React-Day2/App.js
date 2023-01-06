
import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <div>
        <h1 id="title" key="h1">Namaste React</h1>
    </div>
);

const Heading1 = () => (
    <div>
        <h2 id="title" key="h2" >
            Namaste React1
        </h2>
    </div>
    );

const HeaderComponent = () => {
    return (
        <div>
            {heading}
            <Heading1/>
            <h3>Heading 1</h3>
        </div>
        
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>)