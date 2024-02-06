'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation} from "swiper/modules";


export default function AnnounceMent(){
    return(
        <section className=" w-1/2 max-sm:w-48  p-2">
             <div>
                <Swiper 
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay:10000,
                    disableOnInteraction:false
                }}
                pagination={{
                    clickable:true,
                }}
           
                modules={[Autoplay,Navigation]}
                className=" "
                >
                   
                        
                            <ul>

                                <SwiperSlide><li className=" max-sm:text-xs sm:text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt voluptatem, assumenda temporibus molestiae similique aliquam, itaque officiis quos reiciendis illum et distinctio ratione fugit obcaecati mollitia recusandae alias voluptatibus!s</li></SwiperSlide>
                                <SwiperSlide><li className=" max-sm:text-xs sm:text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi nobis, debitis ad nesciunt ipsa, perspiciatis fugit laborum temporibus fuga voluptatum voluptas eos sequi? Quas praesentium fugit officia nulla magni.</li></SwiperSlide>
                                <SwiperSlide><li className=" max-sm:text-xs sm:text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit nam? Quasi, expedita. Sunt, voluptate mollitia laudantium dolor repudiandae quidem aliquid veritatis voluptatum inventore rem incidunt, dolores dicta aspernatur delectus?</li></SwiperSlide>
                                <SwiperSlide><li className=" max-sm:text-xs sm:text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illum nam consequuntur soluta! Facere perferendis nihil, amet tempore vel rem exercitationem iste praesentium quibusdam architecto error repellendus cupiditate iure laboriosam!</li></SwiperSlide>
                                <SwiperSlide><li className=" max-sm:text-xs sm:text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptatibus fugit reprehenderit adipisci aut neque a corporis hic. Et laudantium dolorem ea ex deleniti mollitia ipsum inventore fugit illum!</li></SwiperSlide>
                                <SwiperSlide><li className=" max-sm:text-xs sm:text-sm ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eligendi velit tempore reprehenderit aliquid accusamus ratione quae quisquam dolore modi, illum beatae molestiae ipsa quis ab perspiciatis iure. Modi, adipisci.</li></SwiperSlide>
                                <SwiperSlide><li className=" max-sm:text-xs sm:text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ea at distinctio quod perspiciatis quam, dolore corporis hic accusantium nam nihil cupiditate consectetur ut dolores aliquid, unde et dolorem enim.</li></SwiperSlide>
                                <SwiperSlide><li className=" max-sm:text-xs sm:text-sm ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, voluptatibus, id ipsum exercitationem ut maxime vel officiis molestiae iste similique magni corrupti? Magnam maiores repudiandae voluptas explicabo nostrum, quis illum!</li></SwiperSlide>
                            </ul>
                        
                  
                </Swiper>
                </div>
        </section>

    )
}