import React, { useEffect, useState } from "react";
import "../Payment.css";
import { useStateValue } from "./StateProvider";
import Basket from "./Basket";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import axios from "axios";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies sub-units (Ex:- Amount will be in paise not rupees)
                url: `/payments/create?total=${getBasketTotal(basket)}`
            });
            setClientSecret(response.data.clientSecret)
            console.log(response);
        }
        getClientSecret();
    }, [basket])
   
    console.log("The secret is >>>", clientSecret)

    const handleSubmit = async (event) => {
        // Stripe stuff
        event.preventDefault();
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            history.replaceState('/orders')
        })
    }

    const handleChange = event => {
        // Listen for changes in the CardElement and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout (<Link to="/checkout">{basket.length} items</Link>)</h1>
                {/* Payment section - delivery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>#56, Laxmi nagar</p>
                        <p>Gokul Road, Hubballi</p>
                    </div>
                </div>
                
                {/* Payment Section - Review Items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <Basket id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                                />
                        ))}
                    </div>
                </div>

                {/* Payment section - Payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3 className="payment_bill">Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat renderText={(value) => (
                                  <>
                                    <h3 className="payment_bill">Order Total: {value}</h3>
                                  </>
                                    )}
                                    decimalScale={2}          // Decimal places
                                    value={getBasketTotal(basket)}                 // Amount
                                    displayType={"text"}      
                                    thousandSeparator={true}  // 1,80,456 separates the placess
                                    prefix={"₹"}
                                    />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* {errors && <div>{error}</div>} */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Payment;