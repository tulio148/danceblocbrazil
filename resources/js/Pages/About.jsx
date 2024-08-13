import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { InstagramEmbed } from "react-social-media-embed";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

export default function About({ auth }) {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to("#top-header1", {
            duration: 1.2,
            // delay: 1,
            text: {
                value: "samba",
            },
            ease: "back.in",
        });
        gsap.to("#top-header2", {
            duration: 1.2,
            delay: 1,
            text: {
                value: "is rhythmic love",
            },
            ease: "power4.out",
        });

        gsap.to("#heading-text-1", {
            scrollTrigger: {
                id: "heading-text-1",
                trigger: "#heading-text-1",
                start: "top center",
                toggleActions: "play none restart reverse",
            },
            text: {
                value: "Dance Bloc Brazil",
                speed: 1,
                rtl: true,
            },
        });
        gsap.to("#heading-text-2", {
            scrollTrigger: {
                id: "heading-text-2",
                trigger: "#heading-text-2",
                start: "top center",
                toggleActions: "play none restart reverse",
            },
            text: {
                value: "Our Mission",
                speed: 1,
                rtl: true,
            },
        });

        gsap.from("#ig1", {
            scrollTrigger: {
                id: "ig1",
                trigger: "#ig1",
                start: "top bottom",
                toggleActions: "play none none none",
            },
            autoAlpha: 0,
            xPercent: -20,
            scale: 0.8,
            duration: 2,
        });
        gsap.from("#ig2", {
            scrollTrigger: {
                id: "ig2",
                trigger: "#ig2",
                start: "top bottom",
                toggleActions: "play none none none",
                // markers: true,
                // duration: 3,
            },
            autoAlpha: 0,
            xPercent: 20,
            scale: 0.8,
            duration: 2,
        });

        gsap.from("#button", {
            duration: 2,
            delay: 0.3,
            autoAlpha: 0,
            ease: "power4.inOut",
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
            <Head title="About Us" />
            <div className="grid grid-rows-3  bg-[url('/about.webp')] bg-cover bg-left mb-[200px]  h-screen w-full lg:bg-center">
                <button
                    id="button"
                    className="row-start-2 justify-self-start mx-7"
                    onClick={() => handleClick("heading-text-1", 200)}
                >
                    <div className="animate-pulse ">
                        <FontAwesomeIcon
                            icon={faArrowDownLong}
                            size="5x"
                            style={{
                                color: "white",
                            }}
                        />
                    </div>
                </button>
                <div className="row-start-3 self-end max-w-2xl w-fit">
                    <div
                        id="top-header1"
                        className="mx-7 text-white  font-extralight h-14 sm:h-20 bg-db-pink text-5xl md:text-7xl text-right"
                    ></div>
                    <div
                        id="top-header2"
                        className="mx-7 text-white font-thin h-14 sm:h-20  text-5xl md:text-7xl  mb-20"
                    ></div>
                </div>
            </div>
            <div className="flex flex-col max-w-5xl gap-2 mb-[100px]  max-h-fit border-b bg-gradient-to-b from-white from-90% px-6 py-16 mx-3 rounded-3xl z-40 shadow">
                <div
                    id="heading-text-1"
                    className="   text-db-pink/90 font-extrabold text-4xl h-[36px] md:text-7xl md:h-[72px] text-right  mb-5"
                ></div>
                <p className="text-2xl  text-justify text-slate-600">
                    Located in the vibrant heart of Perth, Dance Bloc Brazil is
                    dedicated to bringing the exhilarating energy and rich
                    cultural heritage of Brazilian samba to our community.
                    Whether you’re a seasoned dancer or a complete beginner, our
                    school offers a welcoming and dynamic environment for
                    everyone.
                </p>
            </div>
            <div
                id="ig1"
                className=" w-full mb-[100px] max-w-xl px-3 overflow-hidden"
            >
                <InstagramEmbed url="https://www.instagram.com/p/C5TAzo2P5VR/" />
            </div>
            <div className="flex flex-col max-w-5xl gap-2 max-h-fit border-b bg-gradient-to-b from-white from-90% px-6 py-16 mx-3 rounded-3xl z-40 shadow mb-[100px]">
                <div
                    id="heading-text-2"
                    className="   text-db-pink/90 font-extrabold text-4xl h-[36px] md:text-7xl md:h-[72px] text-right mb-5"
                ></div>
                <p className="text-2xl  text-justify text-slate-600">
                    At Dance Bloc Brazil, our mission is to share the joy,
                    rhythm, and spirit of samba with people of all ages and
                    backgrounds. We strive to create a supportive and inclusive
                    space where students can explore the beauty of Brazilian
                    dance, improve their skills, and connect with a passionate
                    community.
                </p>
            </div>
            <div
                id="ig2"
                className=" w-full mb-[100px] max-w-xl px-3 overflow-hidden"
            >
                <InstagramEmbed url="https://www.instagram.com/p/C73GELmvjpf/" />
            </div>
        </Layout>
    );
}
