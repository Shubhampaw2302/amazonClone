import React from "react";
import "../Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Basket from "./Basket";

function Checkout() {
    const [{ basket, user }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" alt="" />
                <div className="checkout_body">
                    <h3 className="hello_user">Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your Shopping Basket</h2>

                    {basket.map(item => (
                        <Basket id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                                />
                    ))}
                    
                    {/* Basket Item */}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;