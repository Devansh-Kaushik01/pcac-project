import { Fragment } from "react";
import Hero from "./components/hero/hero";
import Experience from "./components/experience/experience";
import Download from "./components/download/download";
import Team from "./components/team/team"

const AboutUs = () => {
  return(
     <Fragment>
        <Hero/>
        <Experience/>
        <Download/>
        <Team/>
     </Fragment>
  );
};
export default AboutUs;