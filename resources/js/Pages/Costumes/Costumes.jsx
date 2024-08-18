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
            duration: 1,
            delay: 0.5,
            text: {
                value: "Sparkle, shine, ",
            },
            ease: "back.in",
        });
        gsap.to("#top-header2", {
            duration: 2,
            delay: 2,
            text: {
                value: "samba time.",
            },
            ease: "power4.out",
        });

        gsap.from("#button", {
            duration: 2,
            delay: 2,
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
            <Head>
                <title>
                    Hire Brazilian Samba Costumes in Perth | Vibrant Carnival
                    Outfits
                </title>
                <meta
                    name="description"
                    content="Elevate your event with authentic Brazilian Samba costumes available for hire in Perth. Our vibrant carnival outfits bring the spirit of Rio to your celebrations. Perfect for performances, parties, and themed events. Explore our collection and hire the perfect costume today!"
                />
            </Head>
            <div className="grid grid-rows-3  bg-[url('/costume.webp')] bg-cover  bg-center   h-screen w-full lg:bg-center ">
                <button
                    id="button"
                    className="row-start-2 justify-self-start md:justify-self-center mx-7 "
                    onClick={() => handleClick("head", 100)}
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

            <div className="flex justify-center bg-db-pink w-full shadow-md mb-10">
                <div id="head" className="text-white px-10 max-w-5xl my-12">
                    <h1 className="text-3xl font-bold mb-5">
                        Brazilian Samba Costume Hire in Perth
                    </h1>
                    <div className="text-justify text-xl font-medium flex flex-col gap-5 mb-5">
                        <p>
                            Bring the vibrant energy of Brazilian Carnival to
                            your event with our stunning Samba costumes for hire
                            in Perth.
                        </p>
                        <p>
                            Our collection features a range of colorful and
                            authentic outfits, perfect for dance performances,
                            themed parties, or any occasion where you want to
                            stand out.
                        </p>
                        <p>
                            Each costume is crafted with attention to detail,
                            ensuring you not only look the part but also feel
                            the essence of Rio de Janeiro's famous Carnival.
                        </p>
                        <p>
                            Whether you're a professional dancer or simply
                            looking to make a splash at your next event, our
                            costumes will elevate your experience.
                        </p>
                        <p>
                            Contact us today to explore our selection and find
                            the perfect Samba outfit for your next celebration!
                        </p>
                    </div>
                </div>
            </div>
            <div id="costumes" className="mb-96">
                <CostumeGrid />
            </div>
        </Layout>
    );
}
