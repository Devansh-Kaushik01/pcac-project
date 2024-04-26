"use client"
import PostCard from "./components/postCard"

const postData = [
  {
    heading: "Unveiling the Future of Real Estate with PCAC",
     para: "In our fast-paced world, the real estate market can seem like a maze of complexities. From fluctuating prices to evolving trends, staying ahead can be daunting."
  },
  {
    heading: "space 2018 movie",
    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet magna aliquam"
  },
  {
    heading: "history of lions",
    para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet magna aliquam"
  }
]
const Posts = ({}) => {
  return (
    <div className="container mx-auto flex justify-center gap-8 py-10">
      <div className='grid lg:grid-cols-3 gap-10 '>
        {postData.map((item, index) => {
          return (
            <PostCard
              key={index}
              item={item}
            />
          )
        })}
      </div>
    </div>
  )
};
export default Posts;