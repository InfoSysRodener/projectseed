'use client';

import Image from "next/image";
import { Key, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import {Autoplay} from 'swiper/modules';


const NewsCard = ({image} : any) => (
    <div className="rounded-2xl  bg-black bg-opacity-25">
      <Image src={image} alt="Product Image" width={288} height={288} className="rounded-2xl"/>
    </div>
)  

async function getData() {
    try {
        const response = await fetch(`https://api.projectseed.com/v1/newsletter/public-all?show_blog=${1}`);
    
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
    
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error('Failed to fetch data');
      }
   
    
}
   


const LatestNews = () => {
  
   const [news, setNews] = useState<any>([]);  
  
   useEffect( () => {
   
     getData()
     .then(async data => {
        await setNews(data.result.data);
     })
     .catch(error => {
       console.error('Error:', error);
     });

  }, []);

  return (
    <Swiper
            spaceBetween={10}
            slidesPerView={4}
            slidesPerGroup={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
        > 
            {
               news.map((item: { pic_path: any; }, index: Key ) => (
                    <SwiperSlide key={index}>
                        <div className="flex-center gap-5">
                            <NewsCard image={`https://d1udjz1t1e9z0a.cloudfront.net/${item.pic_path}`}/> 
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
  )
}

export default LatestNews;
