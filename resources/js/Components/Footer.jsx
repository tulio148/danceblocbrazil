import { Link } from "@inertiajs/react";
import {
    faInstagram,
    faTiktok,
    faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer>
            <div className="w-full mt-36 mb-24 border-t border-slate-300">
                <div className="max-w-7xl  mx-auto flex flex-col justify-center items-center mt-16">
                    <div className="w-full flex justify-around gap-3">
                        <a
                            href="https://www.facebook.com/DanceBlocBrazil/"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faFacebookF}
                                size="3x"
                                style={{ color: "#FF00F7" }}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/danceblocbrazil/"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                size="3x"
                                style={{ color: "#FF00F7" }}
                            />
                        </a>
                        <a
                            href="https://www.tiktok.com/@danceblocbrazil"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faTiktok}
                                size="3x"
                                style={{ color: "#FF00F7" }}
                            />
                        </a>
                    </div>
                    <img
                        className=" w-48 mt-28"
                        src="/faviconpng-removebg-preview.png"
                        alt=""
                    />
                    <p className="mt-8  font-extralight tracking-widest">
                        &copy; 2024 Dance Bloc Brazil
                    </p>
                    <Link href="/privacy">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
