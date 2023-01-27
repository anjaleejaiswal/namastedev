import { useEffect, useState } from "react";


const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    useEffect(()=>{
        const auth = () => 
                    { isLoggedIn ?
                         (setIsLoggedIn(false),document.getElementById("auth").innerHTML="Logout") 
                        : (setIsLoggedIn(true),document.getElementById("auth").innerHTML="Login") 
                    };

        window.addEventListener("click", auth);

        return ()=> {
            window.removeEventListener("click",auth);
        }

    });


    //return boolean
    return isLoggedIn;
}

export default useAuth;