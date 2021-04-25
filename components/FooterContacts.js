import React from "react";
import "../Footer.css";

function FooterContacts(props) {
    return (
        <div className="columns">
            <span className="footer_contact_heading">{props.heading}</span>
            <span>{props.one}</span>
            <span>{props.two}</span>
            <span>{props.three}</span>
            <span>{props.four}</span>
            <span>{props.five}</span>
            <span>{props.six}</span>
            <span>{props.seven}</span>
        </div>
    )
}

export default FooterContacts;