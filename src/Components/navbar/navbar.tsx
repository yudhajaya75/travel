import { AiOutlineClose, AiOutlineMenu, AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";
import useNavbar from "../../hooks/useNavbar";
import './navbar.css'

const Navbar = () => {
    const { handleNav, logo, nav, width, isActive, showNavbar } = useNavbar();


    return (
        <div className={`w-full top-0 flex md:h-auto md:flex justify-between lg:justify-around md:items-center ${showNavbar ? "fixed top-0 z-50 shadow-xl bg-white navbar-show show" : "navbar-show"}`}>
            <section className="w-[150px]">
                <a href="/home">
                    <img src={logo} alt="" />
                </a>
            </section>
            <ul className={width < 767 ? "hidden md:hidden" : "hidden md:flex gap-10"}>
                <div className="hidden md:flex gap-10 items-center justify-center">
                    <Link to="/home">
                        <li className={`${isActive("/home")}`}>Home</li>
                    </Link>
                    <Link to="/about">
                        <li className={`${isActive("/about")}`}>About</li>
                    </Link>
                    <Link to="/blog">
                        <li className={`${isActive("/blog")}`}>Blog</li>
                    </Link>
                    <Link to="/contact">
                        <li className={`${isActive("/contact")}`}>Contact</li>
                    </Link>
                    <Link to="/contact">
                        <button className={`rounded-lg bg-[#ffc81b] flex items-center
                     justify-center text-white px-10 py-4 ${isActive("/whatapps")}`}>
                            <AiOutlineWhatsApp />+12 345 678
                        </button>
                    </Link>
                </div>
            </ul>
            <div onClick={handleNav} className="block md:hidden my-14 mx-10 z-50">
                {nav ? <AiOutlineClose size={20} className="text-white" /> : <AiOutlineMenu size={20} />}
            </div>
            {width < 767 && nav && (
                <div className={nav ? " z-40 fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#074288] text-white ease-in-out duration-500" : "hidden"}>
                    <section className="w-[150px] text-3xl font-bold mt-3">
                        <a href="/home">
                            <img src={logo} alt="" />
                        </a>
                    </section>
                    <ul className="uppercase">
                        <Link to="/home">
                            <li className={`text-white p-4 border-b ${isActive("/home")}`}>Home</li>
                        </Link>
                        <Link to="/about">
                            <li className={`text-white p-4 border-b ${isActive("/about")}`}>About</li>
                        </Link>
                        <Link to="/blog">
                            <li className={`text-white p-4 border-b ${isActive("/blog")}`}>Blog</li>
                        </Link>
                        <Link to="/contact">
                            <li className={`text-white p-4 border-b ${isActive("/contact")}`}>Contact</li>
                        </Link>
                        <Link to="https://wa.me/+12 345 678" target="_blank" className="p-4">
                            <button className={`rounded-lg bg-[#ffc81b] flex items-center
                     justify-center text-white px-10 py-4 ${isActive("/whatapps")}`}>
                                <AiOutlineWhatsApp />+12 345 678
                            </button>
                        </Link>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;