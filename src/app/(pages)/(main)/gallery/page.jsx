"use client";
import { Fragment } from "react";
import Hero from "./components/hero/hero"
import ImagesPost from "./components/images-post/imagesPosts"

const Gallery = () => {
    return(
       <Fragment>
            <Hero/>
             <ImagesPost/>
       </Fragment>
    );
};
export default Gallery;
