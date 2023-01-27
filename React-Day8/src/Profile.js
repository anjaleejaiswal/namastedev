import {useEffect, useState} from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count1] = useState(1);
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("useeffect Interval")
        },1000);
        //console.log("useeffect")

        return ()=> {
            clearInterval(timer);
            console.log("return interval");
        }

    },[]);
    console.log("render");
    return (
        <>
            <div>Profile {props.name}</div>
            <div>{count}</div>
            <button onClick={() => setCount(1)}>Count</button>
            <div>{count1}</div>
        </>
        

    )
}

export default Profile;