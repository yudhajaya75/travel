import React from "react";

type Props = {
    bgImage: string;
    firstElement?: React.ReactNode;
    secondElement?: React.ReactNode;
};

const GlobalBanner = ({
    bgImage = "bg-heroPattern",
    firstElement,
}: Props) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${bgImage})`,
    };

    return (
        <>
            <div
                className="w-[100%]  h-[700px] object-cover aspect-auto bg-cover flex-row flex justify-evenly items-center gap-10"
                style={backgroundImageStyle}
            >
                <div className="flex justify-center items-center z-30">
                    <p>{firstElement}</p>
                </div>
            </div>
        </>
    );
};

export default GlobalBanner;
