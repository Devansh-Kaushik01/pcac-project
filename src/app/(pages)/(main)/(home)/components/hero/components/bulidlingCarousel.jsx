"use client"
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import Building3 from "../../../../../../../assets/images/building3.jpg";
import Building2 from "../../../../../../../assets/images/building2.jpg";
import Building1 from "../../../../../../../assets/images/building1.jpg"
 
const BuildingCarousel = () => {
  return (
    <Carousel className="rounded-xl">
      <Image
        src={Building3}
        alt="Building 3"
        className="h-full w-full object-cover"
      />
      <Image
        src={Building2}
        alt="Building 2"
        className="h-full w-full object-cover"
      />
      <Image
        src={Building1}
        alt="Building 1"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};
export default BuildingCarousel;