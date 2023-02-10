import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    

    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearItem());
    }

    return (
        <>
            <h2 className="font-bold text-2xl">Cart - {cartItems.length}</h2>
            <button 
                    className="m-2 p-2 bg-slate-500 text-white"
                    onClick  = {()=> handleClearCart()}
            >Clear Cart</button>
            <div className="flex">
                 {cartItems.map((item) => <FoodItem key={item.id}  {...item}/>)}
            </div>
            
        </>

        )
}

export default Cart;