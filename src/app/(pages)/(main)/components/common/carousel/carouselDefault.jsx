"use client";
import CarouselCard from "./components/carouselCard"
import InvertedComa from "../../../../../../assets/images/invertedComa.png"
import Image from "next/image";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';



const CarouselDefault = ({ }) => {
  return (
    <div className="container mx-auto py-10 ">
      <div className="text-center flex flex-col items-center gap-5">
        <h5 className="uppercase text-sm font-semibold">What people says</h5>
        <div className="lg:text-5xl text-3xl font-semibold flex flex-col gap-2 lg:px-0 px-4  ">
          <h2>Trusted by peoples around</h2>
          <h2 className="text-lightgray">the tricity.</h2>
        </div>
        <Image
          src={InvertedComa}
          alt="InvertedComa"
          className="mb-6 lg:w-14 w-10 lg:h-14 h-10"

        />
      </div>
      <div className="">
        <CarouselCard />
      </div>


      {/* <OwlCarousel className='owl-theme' loop margin={10} nav>
    <div class='item'>
        <h4>1</h4>
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
    <div class='item'>
        <h4>4</h4>
    </div>
    <div class='item'>
        <h4>5</h4>
    </div>
</OwlCarousel>; */}
    </div>
  );
}
export default CarouselDefault;