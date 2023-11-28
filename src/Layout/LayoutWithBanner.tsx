import Footer from "../Components/footer/footer";
import GlobalBanner from "../Components/Banner/banner";
import NewNavbar from "../Components/navbar/navbar";

type props = {
    bgImage: string;
    children: React.ReactNode;
    firstElement: React.ReactNode;
};

const LayoutWithBanner = ({
    children,
    bgImage,
    firstElement,
}: props) => {
    return (
        <div className="mx-auto max-w-[1710px]">
            <NewNavbar />
            <GlobalBanner
                bgImage={bgImage}
                firstElement={firstElement}
            />
            {children}
            <Footer />
        </div>
    );
};

export default LayoutWithBanner;
