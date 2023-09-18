'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import {Autoplay} from 'swiper/modules';
  


const iconList = ['Block','Bloomberg_Logo','Forbes_logo','Inc._magazine_logo','YahooFinanceLogo','Block','Bloomberg_Logo','Forbes_logo','Inc._magazine_logo','YahooFinanceLogo'];

const Featured = () => {
  return (
    <div className='bg-black w-full text-white flex relative py-10'>
        <Swiper
            spaceBetween={10}
            slidesPerView={5}
            slidesPerGroup={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
        > 
            {
               iconList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex-center">
                            <Image src={`/assets/images/featured/${item}.webp`} alt={`${item} icon`} width={200} height={100}  style={{width: 'auto', height: 50}}/>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default Featured;