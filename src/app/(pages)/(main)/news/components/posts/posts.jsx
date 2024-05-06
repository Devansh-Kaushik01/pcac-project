"use client"
import PostCard from "./components/postCard"

const postData = [
  {
    id:1,
    link:"/news/detail-news/1",
    heading: "The Power of Mobile Applications for Property Associations.",
    para: "In today's fast-paced world, convenience is key. Whether it's ordering groceries or booking a ride, everything is just a tap away on our smartphones. "
  },
  {
    id:2,
    link:"/news/detail-news/2",
    heading: "A city designed by Swiss-French architect Le Corbusier",
    para: "Chandigarh, the meticulously planned city designed by Swiss-French architect Le Corbusier, stands as a beacon of urban development and modernity in India."
  }
]
const Posts = ({}) => {
  return (
    <div className="container mx-auto flex justify-center gap-8 py-10">
      <div className='grid lg:grid-cols-2 gap-10 '>
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