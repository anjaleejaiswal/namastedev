import { useState } from "react";
import {Hamburger_Icon} from "../Constant";
import { useDispatch} from "react-redux";
import { toggleMenu } from "../utils/sideBarSlice";
const Header = () => {
    const [value,setValue] = useState("");
    const dispatch = useDispatch();

    function handleToogleMenu(){
        dispatch(toggleMenu())
    }

    return (
        <div className="grid grid-flow-col shadow-lg">
            <div className="col-span-3 flex">
                <img 
                    src={Hamburger_Icon}
                    alt = "hamburger_icon"
                    className=" h-12 w-15"
                    onClick={()=> handleToogleMenu()}
                />

                <img 
                    src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
                    alt="Youtube_logo"
                    className="h-14 w-15 mx-4"

                />
             </div>

             <div className="col-span-6 flex p-2">
                <input 
                    type="text"
                    value={value}
                    onChange = {(e) => setValue(e.target.value)}
                    className="w-3/4 h-8 p-2 border border-gray-400 rounded-l-full"
                />
                <button className="bg-slate-400 h-8 w-16 border border-gray-400 rounded-r-full px-2 ">Search</button>
             </div>
             
            <div className="col-span-3">
                <img 
                    src="https://th.bing.com/th/id/R.fd5a137d4cc43657449836c511c422e1?rik=xs4NJnZD7SrL9w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_24787.png&ehk=XT7ycIEO1QBstZHkYYA%2fmHm7bSjaBM1nSo61Bl%2bnJSs%3d&risl=&pid=ImgRaw&r=0"
                    alt="user_logo"
                    className="h-12 w-15 mx-15"
                />
            </div>
            
        </div>

    )

}

export default Header;
