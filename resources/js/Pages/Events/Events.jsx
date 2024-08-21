import { usePage } from "@inertiajs/react";
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
    const { success, error } = usePage().props;
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    useGSAP(() => {
        gsap.from("#top-header1", {
            duration: 1.5,
            width: "0%",
            delay: 0.5,
            ease: "power4.out",
        });
        gsap.to("#top-header1", {
            duration: 1,
            delay: 0.5,
            autoAlpha: 1,
            ease: "power4.out",
        });
        gsap.to("#top-header2", {
            duration: 1,
            delay: 0.5,
            autoAlpha: 1,
            ease: "power4.out",
        });

        gsap.to("#button", {
            duration: 3,
            delay: 1,
            autoAlpha: 1,
            ease: "power4.out",
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
            <Head>
                <title>Brazilian Samba Carnival Performances in Perth</title>
                <meta
                    name="description"
                    content="Unleash the vibrant energy of Brazil in Perth with our stunning samba carnival performances. Perfect for corporate events, private parties, or festivals, our talented dancers and musicians will create an unforgettable experience. Book our showstopping entertainment today!"
                />
                <meta
                    name="keywords"
                    content="Samba carnival performances, Brazilian Samba Perth, corporate event entertainment, private party entertainment, festival shows, Samba dancers Perth, live music and dance, Perth event entertainment"
                />
            </Head>
            <div className="grid grid-rows-3 bg-[url('/events1.webp')] bg-cover bg-center h-screen w-full lg:bg-center">
                <button
                    id="button"
                    className="row-start-2 justify-self-start md:justify-self-center mx-7 opacity-0"
                    onClick={() => handleClick("top", 80)}
                >
                    <div className="flex gap-3 items-center animate-bounce">
                        <div className="text-white font-light bg-db-green text-4xl max-w-40 sm:max-w-fit p-2 rounded sm:text-6xl">
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
                        className="mx-7 text-white font-extralight h-14 sm:h-16 bg-db-green text-6xl md:text-7xl text-right opacity-0"
                    >
                        ignite
                    </div>
                    <div
                        id="top-header2"
                        className="mx-7 text-white font-thin h-14 sm:h-20  text-6xl md:text-7xl  mb-20 opacity-0"
                    >
                        your event
                    </div>
                </div>
            </div>
            <div className="flex bg-db-pink w-full justify-center  shadow-md mb-10  px-6 ">
                <div id="top" className="text-white px-4 max-w-4xl  my-12">
                    <h1 className="text-3xl font-bold mb-5">
                        Breathtaking Brazilian Samba Carnival Shows in Perth
                    </h1>
                    <div className="text-justify text-xl font-medium flex flex-col gap-5 ">
                        <p>
                            Make a lasting impression with our electrifying
                            Brazilian samba carnival performances. Our talented
                            dancers and musicians bring the vibrant spirit of
                            Brazil to life, creating an unforgettable spectacle
                            for your guests. Whether you're planning a corporate
                            event, a private party, or a festival, our
                            customizable shows will exceed your expectations.
                        </p>
                        <p>
                            From dazzling costumes to infectious rhythms, our
                            samba carnival performances are guaranteed to
                            captivate your audience. Our experienced team will
                            work closely with you to create a tailored show that
                            perfectly complements your event theme. Let us add a
                            touch of Brazilian magic to your special occasion.
                        </p>
                    </div>
                </div>
            </div>
            <div id="form" className="max-w-4xl w-full mb-[1000px]">
                <div className="w-full  mt-14">
                    <h1
                        id="header"
                        className="tracking-widest text-5xl sm:text-6xl h-[48px] text-white/95  font-medium  my-4 px-4 text-right"
                    ></h1>
                </div>
                <EventEnquire success={success} error={error} />
            </div>
        </Layout>
    );
}
