import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import CostumeGrid from "@/Components/CostumeGrid";

export default function About({ auth }) {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to("#top-header1", {
            duration: 1.2,
            // delay: 1,
            text: {
                value: "Sparkle, shine, ",
            },
            ease: "back.in",
        });
        gsap.to("#top-header2", {
            duration: 1.5,
            delay: 1.5,
            text: {
                value: "samba time.",
            },
            ease: "power4.out",
        });

        gsap.from("#button", {
            duration: 2,
            delay: 1,
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
            <Head title="Costume Hire" />
            <div className="grid grid-rows-3  bg-[url('/costume.webp')] bg-cover  bg-center   h-screen w-full lg:bg-center ">
                <button
                    id="button"
                    className="row-start-2 justify-self-start md:justify-self-center mx-7 "
                    onClick={() => handleClick("costumes", 40)}
                >
                    <div className="flex gap-3 items-center animate-bounce">
                        <div className="text-white font-light bg-db-pink text-4xl max-w-52 sm:max-w-fit p-2 rounded sm:text-6xl">
                            see our collection
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
                <div className="row-start-3 self-end max-w-2xl w-fit flex flex-col gap-1">
                    <div
                        id="top-header1"
                        className="mx-7 text-white font-extralight h-14 sm:h-20 bg-db-pink text-5xl md:text-7xl "
                    ></div>
                    <div
                        id="top-header2"
                        className="mx-7 self-end text-db-pink font-light shadow-lg  h-14 sm:h-20 text-5xl md:text-7xl mb-20 text-right bg-white w-fit"
                    ></div>
                </div>
            </div>
            <div id="costumes" className="mb-96">
                <CostumeGrid />
            </div>
        </Layout>
    );
}
