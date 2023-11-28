import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { slideData } from './slideData';

const cardHome = () => {
    return (
        <>
            <div className="mt-20">
                <div className="flex justify-center items-center flex-col mx-10">
                    <p className="text-base text-[#7fa0fe]">Check Our Best Promotional Tour</p>
                    <p className="text-5xl text-[#00095e] font-bold">Upcoming Events</p>
                </div>
                <div className="flex justify-center mt-20 h-[390px]">
                    <Swiper
                        spaceBetween={40}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            440: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Autoplay, Navigation]}
                        className='navigation'
                    >
                        {slideData.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center mx-[150px] h-[380px]">
                                    <div className="shadow-lg rounded-md">
                                        <img className="rounded-lg bg-cover w-[300px] h-[200px]" src={slide.imageSrc} alt="" />
                                        <div className="w-full p-6">
                                            <div className='flex gap-[130px]'>
                                                <h3 className="text-[#070f62] font-semibold lg:text-xl sm:text-sm md:text-md mb-[15px]">
                                                    {slide.title}
                                                </h3>
                                                <h3 className="text-[#7ea0fe] font-semibold lg:text-xl sm:text-sm md:text-md mb-[15px]">
                                                    {slide.price}
                                                </h3>
                                            </div>
                                            <p
                                                className="text-[#7ea0fe] lg:text-xl sm:text-sm md:text-md text-start 
                                            bg-slate-200 mx-12 flex justify-center relative right-12 rounded-lg mt-5 ">
                                                {slide.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default cardHome;

