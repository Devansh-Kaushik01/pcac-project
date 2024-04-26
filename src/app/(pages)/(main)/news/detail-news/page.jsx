"use client"
import Image from "next/image";
import NewsPostImg from "../../../../../assets/images/news.jpg"
import NewsCard from "./components/newsCard"

const newsData = [
    {
        title: "Navigating the Complexities of the Real Estate Landscape",
       paragraph: "Welcome to our blog! Today, we're thrilled to invite you to an enlightening discussion that will unravel the mysteries of the real estate market and introduce you to the revolutionary Property Sale Purchase app, PCAC."
    }
]
const DetailPosts = ({}) => {
    return (
        <div className="container mx-auto border-t border-lightgray mt-2">
            <h2 className="lg:text-5xl text-3xl w-3/5 font-semibold py-8 uppercase">Unveiling the Future of Real Estate with PCAC</h2>
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
                {newsData.map((item, index) => {
                    return (
                        <NewsCard
                            key={index}
                            item={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default DetailPosts;

// "Welcome to our blog! Today, we're thrilled to invite you to an enlightening discussion that will unravel the mysteries of the real estate market and introduce you to the revolutionary Property Sale Purchase app, PCAC.
//        Navigating the Complexities of the Real Estate Landscape:
//        In our fast-paced world, the real estate market can seem like a maze of complexities. From fluctuating prices to evolving trends, staying ahead can be daunting. Join us as we dissect the intricacies of the real estate landscape and unveil strategies for success.
       
//        Revolutionizing Property Transactions with PCAC:
//        Gone are the days of cumbersome property transactions. With PCAC, buying, selling, or investing in real estate has never been easier. Discover how our innovative app streamlines the process, empowering users to make informed decisions with confidence.
       
//        Expert Insights and Industry Trends:
//        In this discussion, we'll be joined by esteemed real estate experts who will share their insights into the latest industry trends. From market analysis to investment strategies, prepare to be inspired by their wealth of knowledge and experience.
       
//        Personalized Solutions for Every Property Journey:
//        Whether you're a first-time buyer or a seasoned investor, PCAC caters to your unique needs. Learn how our app offers personalized solutions tailored to your preferences, helping you find your dream home or maximize your investment potential.
       
//        Real-Life Success Stories:
//        Curious about the real-world impact of PCAC? Dive into our collection of success stories and discover how our app has transformed the lives of users worldwide. From seamless transactions to lucrative deals, the possibilities are endless with PCAC.
       
//        Anticipating the Future of Real Estate:
//        As the real estate landscape continues to evolve, PCAC remains at the forefront of innovation. Join us as we explore the future of real estate and how our app anticipates and adapts to industry changes, ensuring that you stay ahead of the curve.
       
//        Reserve Your Spot Today:
//        Don't miss out on this unique opportunity to gain valuable insights, connect with industry experts, and unlock the possibilities with PCAC. Reserve your spot today and embark on a journey to success in the dynamic world of real estate."