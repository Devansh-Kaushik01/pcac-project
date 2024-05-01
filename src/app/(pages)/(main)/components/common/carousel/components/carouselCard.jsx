"use client"
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileLogo from "../../../../../../../assets/logo/profilelogo.jpg"

const data = [

    {
        img: ProfileLogo.src,
        review: `Through PCAC 1, The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English!`,
        name: "Jordan Barrett",
        address: "MD, Jubliee Walk, Mohali"
    },
    {
        img: ProfileLogo.src,
        review: `Through PCAC 2, The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English!`,
        name: "Jordan Barrett",
        address: "MD, Jubliee Walk, Mohali"
    },
    {
        img: ProfileLogo.src,
        review: `Through PCAC 3, The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English!`,
        name: "Jordan Barrett",
        address: "MD, Jubliee Walk, Mohali"
    },
    {
        img: ProfileLogo.src,
        review: `Through PCAC 4, The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English!`,
        name: "Jordan Barrett",
        address: "MD, Jubliee Walk, Mohali"
    }

]
// function SampleArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "black", borderRadius: "50%"}}
//         onClick={onClick}
//       />
//     );
//   }

const CarouselCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <SampleArrow />,
        // prevArrow: <SampleArrow />
    };
    return (
        <div className="w-3/4 m-auto">
            <Slider {...settings}>
                {data.map((d) => (
                    <div className="flex flex-col items-center text-center">
                        <div>
                            <p>{d.review}</p>
                        </div>
                        <div className="flex flex-col gap-1 items-center py-6">
                            <Image src={d.img}
                                alt="ProfileImg"
                                width={40}
                                height={40}
                            />
                            <h4 className="mt-2 font-semibold">{d.name}</h4>
                            <h6 className="text-sm font-medium text-lightgray">{d.address}</h6>
                        </div>
                    </div>
                ))
                }
            </Slider>
        </div>
    )
}
export default CarouselCard;