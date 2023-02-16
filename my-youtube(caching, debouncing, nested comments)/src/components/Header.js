import { useEffect, useState } from "react";
import {Hamburger_Icon} from "../Constant";
import { useDispatch, useSelector} from "react-redux";
import { toggleMenu } from "../utils/sideBarSlice";
import searchImg from "../assets/search.png"
import { Youtube_search_suggestion_API } from "../Constant";
import {cacheResults} from "../utils/searchSlice";

const Header = () => {
    const [searchValue,setSearchValue] = useState("");
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(false);
    const dispatch = useDispatch();

    function handleToogleMenu(){
        dispatch(toggleMenu())
    }

    const searchCache = useSelector(store => store.search);
    /*
    seacrhCache = {
        "iphone" : ["iphone 11", "ihone"]
    }

    searchValue = "iphone"
    
    */

    useEffect(()=> {
        //api call
        //debouncing
        const timer = setTimeout(()=> {
            //caching or memoization
            if(searchCache[searchValue]){
                setSuggestions(searchCache[searchValue])
            }
            else{
                getApiSuggest();
            }
        }, 200)
        
        //make an api call after every key press
        //if the difference between two key press is <200
        //then decline the api call


        return ()=>{
            clearTimeout(timer);
        }

    },[searchValue])

    async function getApiSuggest(){
        const data = await fetch(Youtube_search_suggestion_API + searchValue);
        const json = await data.json();
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [searchValue] : json[1]
        }))  // caching or memoization
        
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

             <div className="col-span-6 p-2">
                <div className="flex">
                    <input 
                        type="text"
                        value={searchValue}
                        onChange = {(e) => setSearchValue(e.target.value)}
                        className="w-3/4 h-8 p-2 border border-gray-400 rounded-l-full"
                        onFocus={() => setShowSuggestions(true)}
                        onBlur = {() => setShowSuggestions(false)}
                    />
                    <button className="bg-slate-400 h-8 w-16 border border-gray-400 rounded-r-full px-2 "><img src={searchImg} alt="search_icon" className="w-8 h-5"/></button>
                </div>
                {showSuggestions && <div className="bg-white fixed p-2 w-[30rem] shadow-lg">
                    <ul>
                        {suggestions.map((item,index) => (
                            <li key={index} className="flex shadow-sm hover:bg-gray-200">
                                <img 
                                    src={searchImg} 
                                    alt="searchIcon" 
                                    className="w-5 h-3 m-2"
                                />
                                <div>{item}</div>
                            </li>
                        ))}
                    </ul>
                </div>}
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
