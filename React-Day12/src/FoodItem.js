import { restaurantImageUrl } from "./Config";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";



const FoodItem = ({cloudinaryImageId , name, category, price, id}) => {

    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }
    

    return (
        <div className="w-52 bg-slate-100 shadow-xl m-2 p-2 hover:bg-slate-400">
            {cloudinaryImageId && <img src={restaurantImageUrl+cloudinaryImageId} alt="restaurantName" className="w-52 h-32"/>}
            <h2 className="font-bold text-xl">{name} </h2>
            <h3 className="text-lg">{category} </h3>
            <h4 className="text-sm">{price / 100}</h4>
            <button className="m-2 p-2 bg-red-400" onClick={() => handleRemoveItem(id)}>Remove Item</button>
        </div>
    )
}

export default FoodItem;