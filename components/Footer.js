import React from "react";
import "../Footer.css";
import FooterContacts from "./FooterContacts";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_contacts">
                <FooterContacts heading="Get to Know Us"
                                one="About Us"
                                two="Careers"
                                three="Press Releases"
                                four="Amazon Cares"
                                five="Gift a smile" />

                <FooterContacts heading="Connect with Us"
                                one="Facebook"
                                two="Twitter"
                                three="Instagram" />

                <FooterContacts heading="Make Money with Us"
                                one="Sell on Amazon"
                                two="Sell under Amazon Accelerator"
                                three="Amazon Global selling"
                                four="Become an Affiliate"
                                five="Fulfilment by Amazon"
                                six="Advertise Your Products"
                                seven="Amazon Pay on Merchants" />

                <FooterContacts heading="Let Us Help You"
                                one="COVID-19 and Amazon"
                                two="Your Account"
                                three="Returns Centre"
                                four="100% Purchase Protection"
                                five="Amazon App Download"
                                six="Amazon Assistant Download"
                                seven="Help" />
            </div>
            <div className="footer_underline"></div>
            <div className="logo">
                <img className="logo_image" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                <div className="language_options">
                    <select className="language">
                        <option value="English">English</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Tamil">Tamil</option>
                    </select>
                </div>
            </div>
            <div className="bottom_most">
                <span>Conditions of Use & Sale</span>
                <span>Privacy Notice</span>
                <span>Interest-Based Ads</span>
            </div>
            <div className="copyright">
                <span>© 1996-2021, Amazon.com, Inc. or its affiliates</span>
            </div>
            
        </div>
    )
}

export default Footer;




// "functions": {
  //   "predeploy": [
  //     "npm --prefix \"$RESOURCE_DIR\" run lint"
  //   ]
  // }