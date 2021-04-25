import React, {useEffect} from "react";
import '../App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "../firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";

const promise = loadStripe('pk_test_51IfNTySIipYjUl4At03zSf7u0L7AadW8Hlfpn1M7JcSfGMjmeGULT2F5f0xVpGKQeku71WJrHADen2hVzmNTU8aJ00ey4hpvnF');

function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {             // This acts like a listener
      console.log('The user is >>> ', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    // eslint-disable-next-line
  }, [])
  return (
    <Router>
      <div className="App">
      <Switch>                     {/* Switch is same as in programming i.e when we have multiple conditions (paths) */}

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
                                  {/* We can have a number of routes but */}
          <Route path="/">         {/* the default route '/' should always be placed at the bottom-most */}
            <Header />
            <Home />
            <Footer />
          </Route>

      </Switch>
        
      </div>
    </Router>
  );
}

export default App;