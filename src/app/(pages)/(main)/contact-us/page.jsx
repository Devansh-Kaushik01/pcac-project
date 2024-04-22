"use client"
import { Fragment } from "react";
import Hero from "./components/hero/hero";
import GetInTouch from "./components/getInTouch/getInTouch";
import GetMobileApplication from "../(home)/components/getMobileApplication/getMobileApplication";
import ContactInfo from "../(home)/components/contactUs/contactUs";

const ContactUs = () => {
    return (
        <Fragment>
            <Hero />
            <GetInTouch />
            <GetMobileApplication />
            <ContactInfo />
        </Fragment>
    );
};
export default ContactUs;