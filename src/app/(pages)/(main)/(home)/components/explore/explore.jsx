"use client"
import DefaultButton from "../../../../components/defaultbutton/defaultbutton";
import Image from 'next/image'
import ExploreImg1 from "../../../../../../assets/images/exploreimg1.jpg"
import ExploreImg2 from "../../../../../../assets/images/exploreimg2.jpg"
import ExploreCard from "./components/exploreCard"

const exploredata = [
    {
        serialno: "01",
        heading: "Pioneer In Everything"
    },
    {
        serialno: "02",
        heading: "Empowering Talent",
    },
    {
        serialno: "03",
        heading: "Strive For Excellence",
    }
]

const Explore = () => {
    return (
        <div className="container mx-auto pt-10 md:px-0 px-4">
            <div className="flex justify-between items-end">
                <div className="lg:text-5xl text-3xl font-medium flex flex-col gap-4 ">
                    <h2>Explore Our</h2>
                    <h2 className="text-gray">PCAC Playbook</h2>
                </div>
                <DefaultButton classNames={"bg-blue text-white "}>
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
            <div className='lg:flex gap-14 py-8'>
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
