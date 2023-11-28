import LayoutWithBanner from "../../Layout/LayoutWithBanner"
import Cardhome from '../../Components/Card/Card-Home/cardHome'
import Cardabout from '../../Components/Card/Card-About/card'
import Comments from "../../Components/Comments/comment"
import Qna from "../../Components/Qna/qna"
import Youtube from "../../Components/Youtube/youtube"
import CardDetails from "../../Components/Card/Card-Details/card"

const Home = () => {

    return (
        <LayoutWithBanner
            bgImage={`./images/banner-home.jpg`}
            firstElement={
                <div className="flex justify-center items-center flex-col gap-5">
                    <p className="lg:text-5xl md:text-xl sm:text-xl font-bold text-white">
                        Explore the World With Us
                    </p>
                    <p className="text-xl font-bold text-white">
                        Your Dream Vacation Awaits You
                    </p>
                    <button
                        className="py-2 px-20 rounded-md bg-[#ffc81b] text-white font-bold"
                    >
                        Join Now
                    </button>
                </div>
            }
        >
            <Cardhome />
            <Cardabout />
            <Comments />
            <Qna />
            <Youtube />
            <CardDetails />
        </LayoutWithBanner>
    )
}

export default Home
