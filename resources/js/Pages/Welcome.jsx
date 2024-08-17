import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Head, Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";

export default function Welcome({ auth }) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.to("#logo-text", {
            opacity: 1,
            duration: 2,
            ease: "power2.inOut",
        });
        gsap.from("#logo-img", {
            scrollTrigger: {
                trigger: "#logo-img",
                start: "center center",
                end: "+=6000px",
                pin: "#logo-img",
                toggleActions: "play none none none",
            },
            autoAlpha: 0,
            scale: 0.2,
            duration: 4,
        });
        gsap.from("#dancer1", {
            scrollTrigger: {
                id: "dancer1",
                trigger: "#dancer1",
                start: "top top",
                end: "+=5000px",
                pin: "#dancer1",
                toggleActions: "play  none none none",
            },
            autoAlpha: 0,
            // opacity: 0,
            duration: 1,
            ease: "power4.in",
        });

        gsap.from("#danceclass", {
            scrollTrigger: {
                id: "danceclass",
                trigger: "#danceclass",
                start: "top top",
                end: "+=5000px",
                pin: "#danceclass",
                toggleActions: "play  none none none",
                // markers: true,
                // preventOverlaps: true,
            },
            // opacity: 0,
            autoAlpha: 0,
            duration: 1,
            ease: "power4.in",
        });

        gsap.from("#events", {
            scrollTrigger: {
                id: "events",
                trigger: "#events",
                start: "top top",
                end: "+=5000px",
                pin: "#events",
                toggleActions: "play none none none",
                // markers: true,
            },
            autoAlpha: 0,
            // opacity: 0,
            duration: 1,
            ease: "power4.in",
        });

        gsap.from("#costumes", {
            scrollTrigger: {
                id: "costumes",
                trigger: "#costumes",
                start: "top top",
                end: "+=3000px",
                pin: "#costumes",
                toggleActions: "play none none none",
                // markers: true,
            },
            autoAlpha: 0,
            // opacity: 0,
            duration: 1,
            ease: "power4.in",
        });

        gsap.to("#text-1", {
            scrollTrigger: {
                id: "text-1",
                trigger: "#text-1",
                start: "top top",
                end: "+=3000px",
                toggleActions: "play none restart reverse",
                pin: "#text-1",
                // markers: true,
            },
        });
        gsap.to("#text-2", {
            scrollTrigger: {
                id: "text-2",
                trigger: "#text-2",
                start: "top top",
                end: "+=3000px",
                toggleActions: "play none restart reverse",
                pin: "#text-2",
                // markers: true,
            },
        });

        gsap.to("#heading0", {
            autoAlpha: 1,
            skewX: 0,
            duration: 6,
            delay: 1,
            ease: "power4.out",
        });
        gsap.to("#heading-text-1", {
            scrollTrigger: {
                id: "heading-text-1",
                trigger: "#heading-text-1",
                start: "top center",
                // end: " bottom",
                toggleActions: "play none restart reverse",
                // markers: true,
                // duration: 3,
            },
            text: {
                value: "more than just steps",
                speed: 1,
            },
        });

        gsap.to("#heading-text-2", {
            scrollTrigger: {
                id: "heading-text-2",
                trigger: "#heading-text-2",
                start: "top center",
                toggleActions: "play none restart reverse",
                // markers: true,
            },
            text: {
                value: "beyond the studio",
                speed: 1,
            },
        });
    });
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <Layout user={auth.user}>
                {/* HERO */}
                <div className="flex flex-col justify-around bg-[url('/background.webp')] bg-cover bg-center h-screen w-full lg:bg-center ">
                    <div
                        id="logo-text"
                        className="w-full flex justify-end opacity-0"
                    >
                        <h1 className=" max-w-md md:max-w-lg  tracking-widest text-6xl sm:text-[12vw] lg:text-[10vw] xl:text-[8.5vw]     text-white font-bold text-right pb-20 mt-16 mx-2 lg:mr-10 ">
                            dance <span className="text-db-pink">bloc</span> Bra
                            <span className=" text-green-600">z</span>
                            <span className=" text-yellow-300">i</span>l
                        </h1>
                    </div>
                    <div
                        id="heading0"
                        className=" w-full bg-gradient-to-b h-fit from-db-pink/70 from-30% to-db-pink/90 to-50% py-1  shadow-md shadow-db-pink/30 mb-12 opacity-0 skew-x-[-16deg]"
                    >
                        <h1 className="min-w-full tracking-[0.2em] px-2 lg:px-28 text-2xl leading-8 font-normal text-center text-white">
                            Experience Perth's premier dance school, offering
                            diverse styles, a vibrant community, professional
                            event shows, and costume hire services.
                        </h1>
                    </div>
                </div>
                {/* LOGO ANIMATION */}
                <img
                    id="logo-img"
                    src="/logonobg.webp"
                    alt=""
                    className="w-[350px] mb-[2000px]"
                />
                {/* DANCER WITH TEXT */}
                <div
                    id="dancer1"
                    className=" flex flex-col justify-around bg-[url('/dancer.webp')] bg-cover bg-center xl:bg-contain h-screen w-full   mb-[2000px]"
                >
                    <div
                        id="heading1"
                        className=" w-full bg-gradient-to-l from-db-pink/90 from-30% py-1 my-32 shadow-md shadow-db-pink/30"
                    >
                        <h1 className="min-w-full tracking-widest px-4 lg:px-24 text-5xl lg:text-5xl text-white  font-extralight lg:font-thin text-right">
                            unleash your
                        </h1>
                    </div>
                    <div
                        id="heading2"
                        className=" w-full bg-gradient-to-r from-db-pink/90 from-30% py-1  my-32 shadow-md shadow-db-pink/30"
                    >
                        <h1 className="min-w-full tracking-widest px-4 lg:px-24  text-5xl lg:text-5xl text-white font-extralight lg:font-thin text-left">
                            inner brazilian
                        </h1>
                    </div>
                </div>
                <div
                    id="danceclass"
                    className=" flex flex-col justify-around bg-[url('/danceclass.webp')] bg-cover bg-center h-screen w-full mb-[2000px] overflow-hidden"
                >
                    <div
                        id="heading3"
                        className=" w-full bg-gradient-to-l from-db-green from-30% py-4 pr-6 my-32 shadow-md shadow-db-green/70 flex justify-end"
                    >
                        <h1 className="tracking-widest lg:px-24 text-5xl lg:text-5xl w-1/2 text-white font-extralight lg:font-thin text-right">
                            dance classes
                        </h1>
                    </div>
                    <div
                        id="heading4"
                        className=" w-full bg-db-green/90 py-4  my-32 shadow-md shadow-db-green/70"
                    >
                        <Link href={route("classes")}>
                            <h1 className="min-w-full tracking-widest px-4 lg:px-24  text-5xl lg:text-5xl text-white font-extralight lg:font-thin text-center">
                                learn more
                            </h1>
                        </Link>
                    </div>
                </div>
                <div
                    id="events"
                    className=" flex flex-col justify-around bg-[url('/events2.webp')] bg-cover bg-center sm:bg-top h-screen w-full mb-[2000px]  overflow-hidden"
                >
                    <div
                        id="heading5"
                        className=" w-full bg-gradient-to-l from-db-pink
                    from-20% py-4 my-32 shadow-md shadow-db-pink/70"
                    >
                        <h1 className="min-w-full tracking-widest px-4 lg:px-24 text-5xl lg:text-5xl text-white font-extralight lg:font-thin text-right">
                            events
                        </h1>
                    </div>
                    <div
                        id="heading6"
                        className=" w-full bg-db-pink/80 from-20% py-4  my-32 shadow-md shadow-db-pink/70"
                    >
                        <Link href={route("events")}>
                            <h1 className="min-w-full tracking-widest px-4 lg:px-24  text-5xl lg:text-5xl text-white font-extralight lg:font-thin text-center">
                                learn more
                            </h1>
                        </Link>
                    </div>
                </div>
                <div
                    id="costumes"
                    className=" flex flex-col justify-around bg-[url('/costume.webp')] bg-cover bg-center h-screen w-full mb-[3500px] overflow-hidden"
                >
                    <div
                        id="heading7"
                        className=" w-full bg-gradient-to-l from-db-green from-20% py-4 my-32 shadow-md shadow-db-green/70"
                    >
                        <h1 className="min-w-full tracking-widest px-4 lg:px-24 text-5xl lg:text-5xl text-white font-extralight lg:font-thin text-right">
                            costumes
                        </h1>
                    </div>
                    <div
                        id="heading8"
                        className=" w-full bg-db-green/80 from-20% py-4  my-32 "
                    >
                        <Link href={route("costumes")}>
                            <h1 className="min-w-full tracking-widest px-4 lg:px-24  text-5xl lg:text-5xl text-white font-extralight lg:font-thin text-center">
                                learn more
                            </h1>
                        </Link>
                    </div>
                </div>
                <div
                    id="text-1"
                    className="flex flex-col justify-center items-center pt-12 max-w-5xl h-screen mb-[3000px]"
                >
                    <div
                        id="heading-text-1"
                        className=" self-start mx-7 bg-white rounded-sm h-24 sm:h-fit  pr-[1px] text-db-pink/90 font-extrabold text-5xl md:text-7xl sm:mb-1"
                    ></div>
                    <div className=" max-w-3xl m-4 px-4 py-14 sm:p-8 border border-white/50 bg-gradient-to-b from-db-pink from-95% shadow-lg shadow-white/40  rounded-xl">
                        <p className="text-white font-normal text-xl sm:text-2xl tracking-widest leading-8 md:text-justify ">
                            At Dance Bloc Brazil, we believe dance is more than
                            just physical activity. It&#39;s a celebration of
                            culture, a way to connect with your body, and a
                            chance to build a supportive community.
                            <br />
                            <br />
                            Our experienced instructors are not just teachers;
                            they are passionate artists who will guide you on
                            your dance journey with enthusiasm and cultural
                            understanding.
                            <Link
                                className="underline underline-offset-4 font-bold "
                                href={route("mission")}
                            >
                                &nbsp;Learn about us!&nbsp;
                            </Link>
                        </p>
                    </div>
                </div>
                <div
                    id="text-2"
                    className="flex flex-col justify-center items-center pt-12 max-w-5xl h-screen mb-[3000px]"
                >
                    <div
                        id="heading-text-2"
                        className="self-start mx-7 bg-white rounded-sm h-24 sm:h-fit pr-[1px] text-db-pink/90 font-extrabold text-5xl md:text-7xl sm:mb-1"
                    ></div>
                    <div className=" max-w-3xl m-4 px-4 py-10 sm:p-8 border border-white/50  bg-gradient-to-b from-db-pink from-95% shadow-lg shadow-white/40 rounded-xl">
                        <p className="text-white font-normal text-xl sm:text-2xl tracking-widest leading-8 md:text-justify ">
                            We don&#39;t just teach dance; we bring it to life!
                            Dance Bloc Brazil is a sought-after entertainment
                            company, adding a touch of Brazilian flair to events
                            throughout Perth.
                            <br />
                            <br />
                            We light up stages at weddings, corporate functions,
                            festivals, and private parties, captivating
                            audiences with our authentic costumes, high-energy
                            routines, and infectious rhythms.
                            <Link
                                className="underline underline-offset-4 font-bold "
                                href={route("events")}
                            >
                                &nbsp;Book your event!&nbsp;
                            </Link>
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    );
}
