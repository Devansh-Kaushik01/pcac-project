"use client"
import Image from "next/image";
import ProfileLogo from "../../../../../../assets/logo/profilelogo.jpg"
import Image3 from "../../../../../../assets/images/experience.jpg"
import Image2 from "../../../../../../assets/images/image2.png"
import Image1 from "../../../../../../assets/images/image1.png"
// import BuildingCarousel from "./components/bulidlingCarousel"

const Experience = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row ">
            <div className="w-full lg:pt-16 ">
                <section className=" w-full hidden lg:block mx-auto">
                    <div className="relative cursor-pointer  ">
                        <ImagesCard
                            img={Image3}
                            classnames={"absolute top-6 left-20 !rounded-full"}
                        />
                        <ImagesCard
                            img={Image2}
                            classnames={"absolute -z-10 -top-4 md:right-10 lg:right-20"}
                        />
                        <ImagesCard
                            img={Image1}
                            classnames={"absolute md:top-60 top-52 left-10"}
                        />
                    </div>
                </section>
                {/* <div className='block lg:hidden w-full p-4'>
                <BuildingCarousel/>
                </div> */}
            </div>
            <div className="w-full h-auto">
                <div className="flex flex-col gap-4 py-10 lg:px-0 px-4">
                    <h4 className="text-sm font-semibold uppercase">About Pcac</h4>
                    <h2 className="lg:text-5xl text-3xl font-bold">We aim to Provide Expert</h2>
                    <h2 className="lg:text-5xl text-3xl font-bold text-gray">Advice and Quality Services.</h2>
                    <h3 className="italic text-2xl font-semibold">Ut enin ad minim veniam, quis nostrud nisi et exercitation the
                        ullamco laboris containing Lorem nisi ut aliquip.
                    </h3>
                    <p className="lg:text-lg text-sm font-medium text-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, sunt in culpa
                        qui officia when an unknown. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanges laboris aliquip ex ea
                        commodo consequat.
                    </p>
                    <div className="flex gap-4 ">
                        <Image
                            src={ProfileLogo}
                            alt="ProfileLogo"
                            className="cursor-pointer"
                        />
                        <div className=" cursor-pointer">
                            <h3 className="font-semibold">Kamal Gupta</h3>
                            <h3 className="font-light text-gray">President (PCAC) </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ImagesCard = ({ img, classnames }) => {
    return (
        <div className={`${classnames}`}>
            <Image
                src={img}
                alt={`${img + "img"}`}
                className="rounded-3xl "
            />
        </div>
    )
}

export default Experience;