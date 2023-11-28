import { Swiper, SwiperSlide } from 'swiper/react';
import './responsive.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper';
import { Skeleton } from '@mui/material';

const Youtube = () => {

    return (
        <section className="mt-20 lg:mt-[200px] h-[500px] lg:h-[700px] sm:h-[780px] ">
            <div className="relative mt-10 lg:mt-[100px]">
                <div>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div
                                className="bg-slate-500 w-[95%] relative md:w-[80%] h-[200px] mt-[100px] left-[3%] md:left-[10%] sm:h-[300px] lg:h-[450px] lg:top-[15%] md:h-[350px] "
                            >
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/s3G2kLruJJo`}
                                    title='test'
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Youtube;
