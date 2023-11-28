import { Swiper, SwiperSlide } from 'swiper/react';
import { slideData } from './slideData';
import { Autoplay } from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cardDetails = () => {
    return (
        <>
            <div className="">
                <div className="flex justify-center  relative top-auto lg:top-[300px] md:top-[300px] sm:top-[300px] sm320:top-[300px]">
                    <Swiper
                        spaceBetween={40}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            440: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                        }}
                        modules={[Autoplay, Navigation]}
                        className='navigation'
                    >
                        {slideData.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex justify-center items-center'>
                                    <a href="">
                                        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center transition-opacity duration-300 bg-black">
                                            <img className="w-[300px] h-[200px] bg-cover" src={slide.imageSrc} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default cardDetails;

