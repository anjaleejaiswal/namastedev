import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <>
            <div className="text-xs p-2 m-2 text-center">This app is maintained and developed by {user.name}. Please write to {user.email} for any support.</div>
        </>
    )
}

export default Footer;