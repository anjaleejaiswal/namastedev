import React from "react";
import ReactDOM from "react-dom";
import logo from "./img/Logo.jpg";
import Search from "./Search.js";
import profile from "./img/userProfile.jpg";


const HeaderDiv = () => (
    <div className="headerClss container-fluids" >
        <div className="row">
            <div className="col-4"><img src={logo} className="logo-img"/></div>
            <div className="col-4 text-center"><Search /></div>
            <div className="col-4"><img src={profile} className="logo-img profile-img"/></div>
        </div>
    </div>
);

export default HeaderDiv;