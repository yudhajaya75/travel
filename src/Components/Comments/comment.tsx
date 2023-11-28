import { slideComments } from './slideComments';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Comment() {
    let BG = require('../../assets/questions-bg.jpg');

    return (
        <div className='mt-[200px]'>
            <div
                className='w-auto h-auto flex justify-center items-center lg:h-[500px]'
                style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <Swiper
                    spaceBetween={40}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
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
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay]}
                    className='navigation'
                >
                    {slideComments.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center items-center mx-auto mt-10 h-[380px]">
                                <div style={{ textAlign: 'center', }}>
                                    <div className='text-3xl lg:text-5xl font-bold text-white mb-4'>
                                        What customers say
                                    </div>
                                    <div className='w-auto lg:w-[500px] sm:w-[450px]'>
                                        <h3 className="text-white font-semibold lg:text-xl sm:text-sm md:text-md mb-[15px]">
                                            {slide.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-5 justify-center items-center">
                                        <img
                                            className="rounded-full w-[100px] h-[100px] bg-cover"
                                            src={slide.imageSrc}
                                            alt="logo"
                                        />
                                        <div className='text-white font-bold'>
                                            <p>Zhuan Al Akbar</p>
                                            <p>CEO In Billiards</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Comment;
