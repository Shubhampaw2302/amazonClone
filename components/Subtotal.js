import React from "react";
import "../Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../reducer";


function Subtotal() {
    const [{ basket }] = useStateValue();
    const history = useHistory();

    return (
        <div className="subtotal">
           <CurrencyFormat renderText={(value) => (
               <>
                    <p>Subtotal ({basket?.length} items): <strong>{value}</strong></p>           {/* These lines are the text part */}
                    <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
               </>
           )}
           decimalScale={2}          // Decimal places
           value={getBasketTotal(basket)}                 // Amount
           displayType={"text"}      
           thousandSeparator={true}  // 1,80,456 separates the placess
           prefix={"₹"}
           />
           <button onClick={event => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;