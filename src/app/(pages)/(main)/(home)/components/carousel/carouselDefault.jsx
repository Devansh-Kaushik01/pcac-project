"use client";
import { Carousel } from "@material-tailwind/react";
import CarouselCard from "./components/carouselCard"
import InvertedComa from "../../../../../../assets/images/invertedComa.png"
import Image from "next/image";

const CarouselDefault = () => {
  return (
    <div className="container mx-auto py-10 ">
      <div className="text-center flex flex-col items-center gap-5">
        <h5 className="uppercase text-sm font-medium">What people says</h5>
        <div className="lg:text-5xl text-3xl font-semibold flex flex-col gap-2 lg:px-0 px-4  ">
          <h2>Trusted by peoples around</h2>
          <h2 className="text-gray">the tricity.</h2>
        </div>
        <Image
          src={InvertedComa}
          alt="InvertedComa"
          className="mb-6 lg:w-14 w-10 lg:h-14 h-10"

        />
      </div>
      <Carousel className=" rounded-xl px-12 pb-12 ">
        <CarouselCard
          paragraph=
          {`"Through PCAC, The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English!"`}
          name={"Jordan Barrett"}
          address={"MD, Jubliee Walk, Mohali"}
        />
        <CarouselCard
          paragraph=
          {`"Through PCAC, The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English!"`}
          name={"Jordan Barrett"}
          address={"MD, Jubliee Walk, Mohali"}
        />
        <CarouselCard
          paragraph=
          {`"Through PCAC, The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English!"`}
          name={"Jordan Barrett"}
          address={"MD, Jubliee Walk, Mohali"}
        />
      </Carousel>
    </div>
  );
}
export default CarouselDefault;