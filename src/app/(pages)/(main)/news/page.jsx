import { Fragment } from "react";
import Hero from "./components/hero/hero";
import Pages from "./components/posts/posts"

const News = () => {
 return(
    <Fragment>
        <Hero/>
        <Pages/>
    </Fragment>
 )
}
export default News;