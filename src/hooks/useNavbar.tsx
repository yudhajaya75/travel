import useWindowSize from "./useWindowsSize";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useNavbar() {
    const { width } = useWindowSize();
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(false);
    const logo = require('../assets/logo.png');
    const [nav, setNav] = useState(false);

    const isActive = (path: string) => {
        return location.pathname === path ? "text-[#074288]" : "text-black";
    };

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        if (width >= 767) {
            setNav(false);
        }
    }, [width]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    useEffect(() => {
        if (isScrolled) {
            setTimeout(() => {
                setShowNavbar(true);
            }, 500);
        } else {
            setShowNavbar(false);
        }
    }, [isScrolled]);

    return {
        logo,
        isScrolled,
        width,
        handleNav,
        showNavbar,
        isActive,
        location,
        nav,
    };
}

export default useNavbar;
