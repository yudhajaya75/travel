import React from "react";
import Footer from "../Components/footer/footer";
import NewNavbar from "../Components/navbar/navbar";

type props = {
    children: React.ReactNode;
};

const GlobalLayout = ({ children }: props) => {
    return (
        <div className="mx-auto max-w-[1710px]">
            <NewNavbar />
            {children}
            <Footer />
        </div>
    );
};

export default GlobalLayout;
