import { Fragment } from "react";
import Hero from "./components/hero/hero";
import Experience from "./components/experience/experience";
import Download from "./components/download/download";
import Team from "./components/team/team"
import Subscribe from "../(home)/components/subscribe/subscribe";
import CarouselDefault from "../(home)/components/carousel/carouselDefault";
import GetMobileApplication from "../(home)/components/getMobileApplication/getMobileApplication";
import ContactUs from "../(home)/components/contactUs/contactUs";

const AboutUs = () => {
  return(
     <Fragment>
        <Hero/>
        <Experience/>
        <Download/>
        <Team/>
        <Subscribe/>
        <CarouselDefault/>
        <GetMobileApplication/>
        <ContactUs/>
     </Fragment>
  );
};
export default AboutUs;