"use client"
import TeamImg from "../../../../../../assets/images/team.jpg"
import React from 'react'
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

const ImagesData = [
   {
      img: TeamImg.src
   },
   {
      img: TeamImg.src
   },
   {
      img: TeamImg.src
   },
   {
      img: TeamImg.src
   },
   {
      img: TeamImg.src
   },
   {
      img: TeamImg.src
   },
   {
      img: TeamImg.src
   },
   {
      img: TeamImg.src
   }

]
const ImagesPosts = ({ }) => {
   return (
      <div className="container mx-auto lg:py-10 py-4 ">
         <div className='flex lg:flex-row flex-col justify-center gap-10 lg:px-0 px-4 '>
            <SlideshowLightbox className='container grid lg:grid-cols-4 gap-2 mx-auto '>
               {ImagesData.map((item, index) => {
                  return (
                     <img className='w-full rounded' key={index} src={item.img} />
                  )
               })}
            </SlideshowLightbox>
         </div>
      </div>
   );
}
export default ImagesPosts;