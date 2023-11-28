import LayoutWithBanner from "../../Layout/LayoutWithBanner"
import Cardabout from "../../Components/Card/Card-About/card"
import Comments from "../../Components/Comments/comment"
import Qna from "../../Components/Qna/qna"

const About = () => {
    return (
        <LayoutWithBanner
            bgImage="./images/banner-about.jpg"
            firstElement={
                <div className="flex flex-col gap-5">
                    <p className="text-4xl lg:text-5xl font-bold text-white">
                        We Make Every Journey a Story.
                    </p>
                    <p></p>
                </div>
            }
        >
            <Cardabout />
            <Comments />
            <Qna />
        </LayoutWithBanner>
    )
}

export default About
