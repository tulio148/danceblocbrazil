import { useState, useEffect, useRef } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, Head } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ResponsiveNav from "@/Components/ResponsiveNav";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";

export default function ({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        // if (typeof window !== "undefined") {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setShowingNavigationDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // }
    }, []);

    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        // if (typeof window !== "undefined") {
        const handleScroll = () => {
            setIsTransparent(window.scrollY == 0);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
        // }
    }, []);
    return (
        <div>
            <Head>
                <meta
                    head-key="description"
                    name="description"
                    content="Whether you've always dreamed of mastering the captivating moves of Samba or the sassy flow of Funk, Dance Bloc Brazil is your gateway to South American rhythm. "
                />
            </Head>
            <nav
                className={`transition duration-1000 w-full fixed top-0 left-0  z-50 bg-db-pink ${
                    isTransparent
                        ? " bg-transparent lg:opacity-0   "
                        : " opacity-100 "
                }`}
            >
                <div className="py-2 px-6 lg:px-8  ">
                    <div className="max-w-7xl mx-auto  grid grid-cols-2 justify-between h-16">
                        <div className="  col-start-1 lg:col-span-2 justify-self-start flex justify-between items-center w-full">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <span className="sr-only">Home</span>
                                    <ApplicationLogo />
                                </Link>
                            </div>

                            <Nav user={user} />
                        </div>

                        <div className="justify-self-end col-start-2 flex items-center lg:hidden">
                            <button
                                ref={buttonRef}
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 "
                            >
                                <span className="sr-only">Menu</span>
                                {!showingNavigationDropdown ? (
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faBars}
                                            size="xl"
                                            style={{ color: "#FFFFFF" }}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            size="2xl"
                                            style={{ color: "##FFFFFF" }}
                                        />
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div ref={dropdownRef}>
                    <Transition
                        as="div"
                        show={showingNavigationDropdown}
                        enter="transition-transform duration-700"
                        enterFrom="transform translate-x-[-100%]"
                        enterTo="transform translate-x-0"
                        leave="transition-transform duration-200"
                        leaveFrom="transform translate-x-0"
                        leaveTo="transform translate-x-[100%]"
                    >
                        <ResponsiveNav user={user} />
                    </Transition>
                </div>
            </nav>

            <main className="flex flex-col items-center bg-gradient-to-b from-db-pink min-h-screen w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}
