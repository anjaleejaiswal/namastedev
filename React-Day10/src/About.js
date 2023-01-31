import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
//import Profile from "./ProfileClass";

const About = () => {
    return (
        <div>
            About
            {/* <Outlet /> */}
            <Profile name={"Anjali"} />
            {/* <Profile name={"Anjali Class"}/> */}
        </div>
    );
}

// class About extends React.Component{
//     constructor(props){
//         super(props);
//         //console.log("Parent-constructor");
//     }

//     componentDidMount(){
//         this.timer = setInterval(()=>{
//             //console.log("setInterval")
//         },1000);
//         //console.log("Parent-componentDidMount");
//     }

//     componentDidUpdate(){
//         //console.log("parent componentDidUpdate");
//     }
    
//     componentWillUnmount(){
//         clearInterval(this.timer);
//         //console.log("component will unmount");
//     }

//     render(){
//         //console.log("Parent-render");
//         return (
//             <div>
//                 About
//                 <ProfileFunctionalComponent name={"Anjali"} />
//                 {/* <Profile name={"First Child"}/> */}
//                 {/* <Profile name={"Second Child"} /> */}
//             </div>
//         )
//     }
// }


export default About;