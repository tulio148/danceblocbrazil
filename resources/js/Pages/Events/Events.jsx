import { Head } from "@inertiajs/react";
import gsap from "gsap";
import Layout from "@/Layouts/Layout";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import EventEnquire from "@/Components/EventEnquire";

export default function Events({ auth }) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    useGSAP(() => {
        gsap.to("#top-header1", {
            duration: 1.2,
            text: {
                value: "ignite",
            },
            ease: "back.in",
        });
        gsap.to("#top-header2", {
            duration: 1.2,
            delay: 1,
            text: {
                value: "your event",
            },
            ease: "power4.out",
        });
        gsap.from("#button", {
            duration: 2,
            delay: 1,
            autoAlpha: 0,
            ease: "power4.inOut",
        });
        gsap.to("#header", {
            scrollTrigger: {
                id: "header",
                trigger: "#header",
                start: "top center",
                // end: " bottom",
                toggleActions: "play none restart reverse",
                // markers: true,
                // duration: 3,
            },
            text: {
                value: "Send an inquiry",
                speed: 1,
                rtl: true,
                preserveSpaces: true,
            },
        });
    });
    const handleClick = (id, offset = 0) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            const elementPosition =
                targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };
    return (
        <Layout user={auth.user}>
            <Head title="Events" />
            <div className="grid grid-rows-3 bg-[url('/events1.webp')] bg-cover bg-center mb-3  h-screen w-full lg:bg-center">
                <button
                    id="button"
                    className="row-start-2 justify-self-start md:justify-self-center mx-7 "
                    onClick={() => handleClick("form", 80)}
                >
                    <div className="flex gap-3 items-center animate-bounce">
                        <div className="text-white font-light bg-db-pink text-4xl max-w-40 sm:max-w-fit p-2 rounded sm:text-6xl">
                            enquire
                        </div>
                        <div className="">
                            <FontAwesomeIcon
                                icon={faArrowDownLong}
                                size="3x"
                                style={{
                                    color: "white",
                                }}
                            />
                        </div>
                    </div>
                </button>
                <div className="row-start-3 self-end max-w-2xl w-fit">
                    <div
                        id="top-header1"
                        className="mx-7 text-white font-extralight h-14 sm:h-16 bg-db-pink text-6xl md:text-7xl text-right"
                    ></div>
                    <div
                        id="top-header2"
                        className="mx-7 text-white font-thin h-14 sm:h-20  text-6xl md:text-7xl  mb-20 "
                    ></div>
                </div>
            </div>

            <div id="form" className="mt-56 max-w-2xl w-full">
                <div className="w-full  mt-14">
                    <h1
                        id="header"
                        className="tracking-widest text-4xl sm:text-6xl h-[48px] text-white/95  font-medium  my-4 px-4 text-right"
                    ></h1>
                </div>
                <EventEnquire />
            </div>
        </Layout>
    );
}
