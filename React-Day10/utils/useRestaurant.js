import {useState, useEffect} from "react";
const useRestaurant = (url) => {
    const [restaurant,setRestaurant] = useState(null);
    
    //api call
    useEffect(()=>{
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        setRestaurant(json?.data?.cards);

    }
    //return restaurant data
    return restaurant;
};

export default useRestaurant;