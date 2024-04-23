"use client"
import { Fragment } from "react";
import Hero from "./components/hero/hero";
import GetInTouch from "./components/getInTouch/getInTouch";
import GoogleMap from "./components/googleMap/googleMap"
import GetMobileApplication from "../(home)/components/getMobileApplication/getMobileApplication";
import ContactInfo from "../(home)/components/contactUs/contactUs";

const ContactUs = () => {
    return (
        <Fragment>
            <Hero />
            <GetInTouch />
            <GoogleMap/>
            <GetMobileApplication />
            <ContactInfo />
        </Fragment>
    );
};
export default ContactUs;