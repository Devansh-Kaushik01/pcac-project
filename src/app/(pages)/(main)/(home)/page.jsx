import { Fragment } from "react";
import Hero from "./components/hero/hero";
import AboutUs from "./components/aboutUs/aboutUs";
import WhatWeDo from "./components/whatWeDo/whatWeDo";
import JoinUs from "./components/joinUs/joinUs";
import Explore from "./components/explore/explore";
import Video from "./components/video/video";
import Questions from "./components/questions/questions";
import Subscribe from "../components/common/subscribe/subscribe"
import CarouselDefault from "../components/common/carousel/carouselDefault";
import GetMobileApplication from "../components/common/getMobileApplication/getMobileApplication"
import ContactUs from "../components/common/contactUs/contactUs"

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <AboutUs />
            <WhatWeDo />
            <JoinUs />
            <Explore />
            <Video />
            <Questions/>
            <Subscribe/>
            <CarouselDefault/>
            <GetMobileApplication/>
            <ContactUs/>
        </Fragment>
    );
}

export default Home;