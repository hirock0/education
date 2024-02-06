"use client"

import { Navigation, Pagination,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Images } from "@/components/HomePage_Components/Images/Images";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from "next/image";
export default function Slider(){
    return(
        <section className=" w-96 max-sm:w-48 ">
            <div className="">
                <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay:4500,
                    disableOnInteraction:false
                }}
                pagination={{
                    clickable:true,
                }}
                navigation={true}
                modules={[Autoplay,Pagination,Navigation]}
                className=" h-50 w-full rounded-lg"
                >
                    {
                      Images.map((image,index)=>(
                          <SwiperSlide key={index}>
                                <div>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                          </SwiperSlide>
 
                      ))  
                    }
                </Swiper>
            </div>
        </section>
    )
}