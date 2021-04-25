import React from "react";
import "../Basket.css";
import { useStateValue } from "./StateProvider";


function Basket(props) {
    // eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.id
        })
    }
    return (
        <div className="basket">
            <img className="basket_image" src={props.image} alt="" />
            <div className="basket_info">
                <p className="basket_title">{props.title}</p>
                <p className="basket_price">
                    <small>₹</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="basket_rating">
                    {Array(props.rating).fill().map((_, i) => (<p>&#11088;</p>))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default Basket;