import React from "react";
import '../Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                <div className='home_row'>
                    <Product id='1' title='The lean Startup: How constant Innovation Creates Radically Successful Buisnesses Paperback' price={219} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={3} />
                    <Product id='2' title='Lenovo IdeaPad Slim 3 Intel Celeron N4020 15.6-inch HD Thin and Light Laptop (4GB/256GB SSD/Windows 10/Platinum Grey/1.7Kg), 81WQ003LIN' price={4329} image="https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY327_FMwebp_QL65_.jpg" rating={2} />
                </div>

                <div className='home_row'>
                    <Product id='3' title='ARISTO Lenovo Kitchen Organizer Rack with water storing tray (Multi Colour)' price={455} image='https://m.media-amazon.com/images/I/61WpYI6bWCL._AC_UL480_FMwebp_QL65_.jpg' rating={4} />
                    <Product id='4' title='Pigeon by Stovekraft New Handy Mini Polypropylene Chopper with 3 Blades, Green' price={219} image='https://m.media-amazon.com/images/I/51RXzjrUmkL._AC_UL480_FMwebp_QL65_.jpg' rating={5} />
                    <Product id='5' title='MYHEART ABS Plastic 4 Layer Kitchen Storage Space Saving Organizer Rack' price={1699} image='https://m.media-amazon.com/images/I/610q5kL3iCL._AC_UL480_FMwebp_QL65_.jpg' rating={5} />
                </div>

                <div className='home_row'>
                    <Product id='6' title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super ultra wide Dual WOHO S120 x 1440' price={112365} image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home;