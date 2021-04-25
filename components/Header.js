import React from "react";
import '../Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {

  // const customStyle = {
  //   display: flex,
  //   position: fixed,
  //   left: 70%
  // }

    const mediaQuery = window.matchMedia('(max-width: 600px)')
  
    const [{ basket, user }] = useStateValue();

    const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      }
    }

    return (
        <div className="header">
          <Link to="/">
             <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
          </Link>

          <div className="header_search">
            <input className="header_searchInput" type="text" />
            <SearchIcon className="header_searchIcon" />
          </div>
          
          <Navbar style={{display: 'flex', position: 'fixed', left: '70%'}} expand="lg">      {/* style={{display: 'flex', position: 'fixed', left: '70%'}}  */}
            <Navbar.Toggle style={{backgroundColor: "#cd9042"}} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto color">
                <div className="header_nav">
                  <Nav.Link href={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header_option">
                      <span className="header_optionLineOne">Hello, {user ? user?.email : "Guest"}</span>
                      <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                  </Nav.Link>
                  
                  <Nav.Link>
                    <div className="header_option">
                      <span className="header_optionLineOne">Returns</span>
                      <span className="header_optionLineTwo">& Orders</span>
                    </div>
                  </Nav.Link>

                  <Nav.Link>
                    <div className="header_option">
                      <span className="header_optionLineOne">Your</span>
                      <span className="header_optionLineTwo">Prime</span>
                    </div>
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          

          <Link to="/checkout">
            <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>   
            </div>             {/* If basket becomes undefined due to an error the ?(optional chaining) will gracefully handle it */}
          </Link>
        </div>
    )
}

export default Header;




{/* <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>



*/}