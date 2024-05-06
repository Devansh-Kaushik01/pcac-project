"use client"
import Image from "next/image";
import NewsPostImg from "../../../../../../assets/images/news.jpg"
import NewsCard from "../components/newsCard"
import { useEffect, useState } from "react";

const postData = [
    {
        id: 1,
        link: "/news/detail-news/1",
        heading: "The Power of Mobile Applications for Property Associations.",
        para: "In today's fast-paced world, convenience is key. Whether it's ordering groceries or booking a ride, everything is just a tap away on our smartphones. ",
        title: "The Power of Mobile Applications for Property Associations.",
        paragraph: ` In today's fast-paced world, convenience is key. Whether it's ordering groceries or booking a ride, everything is just a tap away on our smartphones. So why should the real estate industry lag behind? Enter mobile applications tailored for property associations, transforming the way users and team members interact in the buying, selling, and renting process.        
      Gone are the days of endless paperwork and tedious processes. With a dedicated mobile app, users can effortlessly create accounts, browse listings, and manage their properties anytime, anywhere. No more scheduling appointments or rushing to meet deadlines—everything is conveniently accessible on your smartphone or tablet.      
      The first step in the real estate journey is often the most daunting—creating an account. But with a user-friendly mobile app, this process becomes a breeze. Users can simply input their details, upload necessary documents, and voilà! They're ready to dive into the world of property buying, selling, or renting.        
      Behind every successful property association is a dedicated team working tirelessly to ensure seamless transactions. Mobile applications empower these team members by providing them with tools to manage listings, communicate with clients, and streamline the entire process. From updating property details to scheduling viewings, everything can be done on the go.        
      Mobile applications for property associations are designed with one goal in mind: to enhance the user experience. Advanced search filters, interactive maps, and personalized recommendations ensure that users find their dream property with ease. And with real-time notifications, they'll never miss out on the latest listings or important updates.       
      In an age where data security is paramount, mobile applications prioritize the privacy and security of users' information. Advanced encryption techniques and robust authentication mechanisms safeguard sensitive data, giving users peace of mind as they embark on their real estate journey.       
      As technology continues to evolve, so does the real estate industry. Mobile applications for property associations are not just a trend—they're the future. By harnessing the power of smartphones and cutting-edge technology, these apps are revolutionizing the way we buy, sell, and rent properties.      
      In conclusion, mobile applications for property associations are a game-changer. From simplifying account creation to empowering property teams and enhancing the user experience, these apps offer a myriad of benefits for both users and industry professionals. So why wait? Download the app, and let the real estate revolution begin! `,

    },
    {
        id: 2,
        link: "/news/detail-news/2",
        heading: "A city designed by Swiss-French architect Le Corbusier",
        para: "Chandigarh, the meticulously planned city designed by Swiss-French architect Le Corbusier, stands as a beacon of urban development and modernity in India.",
        title: "A city designed by Swiss-French architect Le Corbusier.",
        paragraph: ` Chandigarh, the meticulously planned city designed by Swiss-French architect Le Corbusier, stands as a beacon of urban development and modernity in India. Renowned for its organized layout, lush greenery, and high living standards, investing in Chandigarh properties presents a multitude of advantages.
        Firstly, Chandigarh offers a unique blend of urban amenities and natural beauty. With well-maintained parks, broad avenues, and scenic landscapes, the city provides a serene living environment amidst bustling urban life. This makes it an attractive destination for both homebuyers seeking tranquility and investors eyeing rental income.     
        Moreover, Chandigarh boasts robust infrastructure and connectivity networks. The city's efficient public transport system, well-planned roads, and proximity to major highways ensure seamless connectivity within and beyond its borders. This accessibility enhances the appeal of Chandigarh properties for both residents and businesses.
        Furthermore, Chandigarh's status as a major educational and commercial hub in Northern India contributes to its thriving real estate market. The presence of esteemed educational institutions, IT companies, and government offices fuels demand for residential and commercial spaces, making it a lucrative investment opportunity.   
        Additionally, Chandigarh offers a stable and appreciating real estate market. Over the years, property values in the city have shown consistent growth, offering investors the potential for long-term capital appreciation. With a well-regulated real estate sector and transparent property laws, investing in Chandigarh properties provides a sense of security and reliability.
        Beyond financial gains, owning property in Chandigarh affords residents a high quality of life. The city's well-planned neighborhoods, top-notch healthcare facilities, and vibrant cultural scene contribute to a wholesome living experience. Whether it's enjoying leisurely strolls in the iconic Rock Garden or indulging in the culinary delights of Sector 17, Chandigarh offers a lifestyle that is unmatched.   
        In conclusion, investing in Chandigarh properties offers a plethora of benefits ranging from aesthetic appeal and robust infrastructure to financial stability and quality of life. Whether you're looking to buy a home or diversify your investment portfolio, Chandigarh stands as a promising destination that embodies the best of urban living and natural charm. `,

    }
]
const DetailPosts = ({ params }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        if (params && params.id) {
            setData({ ...postData.find((d) => d.id == params.id) })
        }
    }, [params]);
    return (
        <div className="container mx-auto border-t border-lightgray mt-2">
            <h2 className="lg:text-5xl text-3xl font-semibold py-8 ">{data.heading || ""}</h2>
            <div className="flex gap-4 ">
                <div className="bg-blue w-20 text-white text-center p-2">
                    <h4>01</h4>
                    <h4>May</h4>
                </div>
                <div className="border-y border-lightgray w-full flex items-center">
                    <h2 className="text-xl">Posted by: <span className="text-lightgray">PCAC</span></h2>
                </div>
            </div>
            <div className="flex justify-center py-10">
                <Image
                    src={NewsPostImg}
                    alt="NewsPostImg"
                    className="w-full"
                />
            </div>
            <div className='flex flex-col gap-14 pb-10 '>
                <NewsCard
                    item={data}
                />
            </div>
        </div>
    )
}
export default DetailPosts;

