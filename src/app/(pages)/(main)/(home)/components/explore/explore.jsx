"use client"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton";
import Image from 'next/image'
import ExploreImg1 from "../../../../../../assets/images/exploreimg1.jpg"
import ExploreImg2 from "../../../../../../assets/images/exploreimg2.jpg"
import ExploreCard from "./components/exploreCard"

const exploredata = [
    {
        serialno: "01",
        heading: "Pioneer In Everything",
        paragraph: `Our property association app 
        leads the way in innovation, offering cutting-edge 
        solutions for seamless transactions, community
        engagement, and beyond.`
    },
    {
        serialno: "02",
        heading: "Empowering Talent",
        paragraph: `Our property association app empowers 
        users by providing tools for informed decision-making,
        fostering community engagement, and facilitating 
        seamless property transactions.`
    },
    {
        serialno: "03",
        heading: "Strive For Excellence",
        paragraph: `Our property association app is dedicated
        to delivering top-notch services, setting high standards,
        and continuously improving for unparalleled user experience.`
    }
]

const Explore = () => {
    return (
        <div className="container mx-auto pt-10 md:px-0 px-4">
            <div className="lg:flex justify-between items-end">
                <div className="lg:text-5xl text-3xl font-semibold flex flex-col gap-4 ">
                    <h2>Explore Our</h2>
                    <h2 className="text-lightgray">PCAC Playbook</h2>
                </div>
                <DefaultButton anchor onPress={"/"} classNames={"bg-blue text-white lg:mt-0 mt-4 h-14 w-32 flex justify-center font-semibold rounded-lg "}>
                    View All
                </DefaultButton>
            </div>
            <div className="flex lg:flex-row flex-col gap-10 pt-6 ">
                <Image
                    src={ExploreImg1}
                    alt="ExploreImg1"
                    className="object-cover"
                />
                <Image
                    src={ExploreImg2}
                    alt="ExploreImg2"
                    className="w-full object-cover"
                />
            </div>
            <div className='lg:flex gap-4 py-8'>
                {exploredata.map((item, index) => {
                    return (
                        <ExploreCard
                            key={index}
                            item={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Explore;
