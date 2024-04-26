import { Fragment } from "react";
import Hero from "./components/hero/hero";
import Experience from "./components/experience/experience";
import Download from "./components/download/download";
import Team from "./components/team/team"
import Subscribe from "../components/common/subscribe/subscribe";
import CarouselDefault from "../components/common/carousel/carouselDefault";
import GetMobileApplication from "../components/common/getMobileApplication/getMobileApplication";
import ContactUs from "../components/common/contactUs/contactUs";


const AboutUs = () => {
   return (
      <Fragment>
         <Hero />
         <Experience />
         <Download />
         <Team />
         <Subscribe />
         <CarouselDefault />
         <GetMobileApplication />
         <ContactUs />
      </Fragment>
   );
};
export default AboutUs;