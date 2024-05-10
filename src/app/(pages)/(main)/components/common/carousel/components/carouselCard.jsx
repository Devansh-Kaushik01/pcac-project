"use client"
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aarav from "../../../../../../../assets/images/aarav.png"
import Vikram from "../../../../../../../assets/images/vikram.png"
import Ananya from "../../../../../../../assets/images/ananya.png"
import Siddharth from "../../../../../../../assets/images/siddharth.png"


const data = [

    {
        img: Aarav.src,
        review: `Absolutely impressed! Found my dream home in no time. Intuitive search, accurate listings. The team's support was exceptional throughout. Highly recommend this platform for its efficiency and reliability in the property market.`,
        name: "Aarav",
        address: "Chandigarh"
    },
    {
        img: Vikram.src,
        review: `Outstanding rental platform! Found the perfect place with ease. Detailed listings, responsive agents. The process was seamless from start to finish. Highly recommend this site for anyone searching for a rental property.`,
        name: "Vikram",
        address: "Mohali"
    },
    {
        img: Ananya.src,
        review: `Top-notch relocation assistance! Comprehensive area insights, attentive service. Made my move stress-free. The platform's user-friendly interface and helpful resources guided me through the process seamlessly. Highly satisfied and grateful for the support!`,
        name: "Ananya",
        address: "Chandigarh"
    },
    {
        img: Siddharth.src,
        review: `Incredible rental experience! Detailed listings, easy communication. Streamlined process from search to move-in. Highly satisfied with the service!`,
        name: "Siddharth",
        address: "Panchkula"
    },
]
function SampleArrow(props) {
    const { style } = props;
    return (
        <div
            style={{ ...style, display: "hidden" }}
        />
    );
}

const CarouselCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />
    };
    return (
        <div className="w-3/4 m-auto">
            <Slider {...settings}>
                {data.map((d) => (
                    <div className="flex flex-col items-center text-center ">
                        <p className="font-semibold text-xl">{d.review}</p>
                        <div className="flex flex-col gap-1 items-center py-3">
                            <Image src={d.img}
                                alt="ProfileImg"
                                width={50}
                                height={10}
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