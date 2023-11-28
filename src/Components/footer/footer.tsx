import { AiFillCaretUp } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import "../footer/footer.css";
import { imageList } from "./imageList";

const Footer = () => {
    let Logo = require('../../assets/logo.png')

    // Fungsi untuk menavigasi ke navbar
    const scrollToNavbar = () => {
        window.scrollTo({
            top: 0, // Atur posisi scroll ke bagian atas halaman
            behavior: "smooth", // Animasi scroll
        });
    };

    return (
        <div className="h-auto">
            <div className="flex">
                {imageList.map((image, index) => (
                    <div key={index} className="image-container">
                        <img src={image.imageSrc} alt='' />
                        <div className="overlay">
                            <a href={image.link} rel="noopener noreferrer">
                                <FaInstagram style={{ fontSize: '3em' }} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="footer" style={{ marginTop: 300 }}>
                <div className="sb__footer">
                    <div className="sb__footer-links">
                        <div className="sb__footer-links_div">
                            <div className="logo">
                                <a href="">
                                    <img src={Logo} alt="" />
                                </a>
                                <p>Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
                            </div>
                        </div>
                        <div className="sb__footer-links_div">
                            <div className="contact-us">
                                <h4 style={{ fontWeight: "bold", fontSize: "15px" }}>
                                    Navigation
                                </h4>
                            </div>
                            <div>
                                <ul className="grid gap-3">
                                    <li><a href="/" className="hover:underline">Home</a></li>
                                    <li><a href="/about" className="hover:underline">About</a></li>
                                    <li><a href="/services" className="hover:underline">Services</a></li>
                                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sb__footer-links_div">
                            <div className="contact-us">
                                <h4 style={{ fontWeight: "bold", fontSize: "15px" }}>
                                    Services
                                </h4>
                            </div>
                            <div>
                                <ul className="grid gap-3">
                                    <li><a href="/" className="hover:underline">Blackforest</a></li>
                                    <li><a href="/about" className="hover:underline">Bodhubon</a></li>
                                    <li><a href="/services" className="hover:underline">Rondhonu</a></li>
                                    <li><a href="/contact" className="hover:underline">Menghrong</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sb__footer-links_div">
                            <div className="contact-us">
                                <h4 style={{ fontWeight: "bold", fontSize: "15px" }}>
                                    Services
                                </h4>
                            </div>
                            <div>
                                <ul className="grid gap-3">
                                    <li><a href="/">test</a></li>
                                    <li><a href="/about">demo@gmail.com</a></li>
                                    <li><a href="/services">+12 345 678</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="sb__footer-below">
                        <div className="sb__footer-copyright">
                            <p>Copyright © 2023 Chibeee</p>
                        </div>
                    </div>
                </div>
                <button className="scroll-to-top-button" onClick={scrollToNavbar}>
                    <AiFillCaretUp />
                </button>

            </div>
        </div>
    );
};

export default Footer;
