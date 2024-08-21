import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Head, Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import HeroSection from "@/Components/HeroSection";
import TextSection from "@/Components/TextSection";

export default function Welcome({ auth }) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        // Animate logo text
        gsap.to("#logo-text", {
            opacity: 1,
            duration: 2,
            ease: "power2.inOut",
        });

        // Animate logo image with scrollTrigger
        gsap.from("#logo-img", {
            scrollTrigger: {
                trigger: "#logo-img",
                start: "top center",
                end: "+=4000px",
                pin: "#logo-img",
                toggleActions: "play none none none",
            },
            autoAlpha: 0,
            scale: 0.2,
            duration: 4,
        });

        // Function to create reusable timeline with scrollTrigger
        function createScrollTriggerTimeline(
            triggerId,
            elementId,
            duration,
            scrub = true
        ) {
            return gsap.timeline({
                scrollTrigger: {
                    id: triggerId,
                    trigger: elementId,
                    start: "top top",
                    end: `+=${duration}px`,
                    pin: elementId,
                    scrub,
                },
            });
        }

        // Create timelines for each section with fade-in/out animation
        const sections = [
            { id: "dancer1", duration: 5000 },
            { id: "events", duration: 5000 },
            { id: "costumes", duration: 3000 },
            { id: "text-1", duration: 2500 },
            { id: "text-2", duration: 2500 },
            { id: "text-3", duration: 2500 },
        ];

        sections.forEach((section) => {
            const tl = createScrollTriggerTimeline(
                section.id,
                `#${section.id}`,
                section.duration
            );
            tl.from(`#${section.id}`, {
                autoAlpha: 0,
                duration: 1,
                ease: "power4.in",
            })
                .to(`#${section.id}`, {
                    autoAlpha: 1,
                    duration: 1,
                    ease: "power4.out",
                })
                .to(`#${section.id}`, {
                    autoAlpha: 0,
                    duration: 1,
                    ease: "power4.in",
                });
        });

        // Animate heading with translateY
        gsap.to("#heading0", {
            autoAlpha: 1,
            delay: 1,
            translateY: -40,
            duration: 6,
            ease: "power4.out",
        });

        // Animate heading text with scrollTrigger (corrected trigger IDs)
        gsap.to("#heading-text-1", {
            scrollTrigger: {
                id: "heading-text-1",
                trigger: "#heading-text-1",
                start: "top top",
                toggleActions: "play none none none",
                markers: true,
            },
            text: {
                delay: 0.5,
                value: "more than just steps",
            },
            duration: 2,
            ease: "power4.out",
        });

        gsap.to("#heading-text-2", {
            scrollTrigger: {
                id: "heading-text-2",
                trigger: "#heading-text-2",
                start: "top center",
                toggleActions: "play none none none",
            },
            text: {
                value: "beyond the studio",
                speed: 1,
            },
        });
        gsap.to("#heading-text-3", {
            scrollTrigger: {
                id: "heading-text-3",
                trigger: "#heading-text-3",
                start: "top center",
                toggleActions: "play none none none",
            },
            text: {
                value: "dress to impress",
                speed: 1,
            },
        });
    });
    return (
        <>
            <Head>
                <title>
                    Welcome to Our Samba Dance School in Perth | Experience the
                    Joy of Dance
                </title>
                <meta
                    name="description"
                    content="Discover the passion of Brazilian Samba with our expert instructors in Perth. Whether you're a beginner or advanced dancer, we offer fun and energetic classes and workshops to suit all levels. Boost your fitness while learning this exciting dance style. Book your first lessons today!"
                />
                <meta
                    name="keywords"
                    content="Samba dance, Perth dance classes, Brazilian Samba, dance workshops, fitness, beginner dance classes, advanced dance lessons, carnival dance, carnival presentation, carnival show, samba show"
                />
            </Head>

            <Layout user={auth.user}>
                {/* HERO */}
                <HeroSection />
                {/* LOGO ANIMATION */}
                <img
                    id="logo-img"
                    src="/logonobg.webp"
                    loading="lazy"
                    alt="Dance Bloc Brazil logo featuring vibrant colors and festive design"
                    className="w-[350px] mb-[2000px]"
                />
                {/* TEXT SECTIONS */}
                <img
                    id="dancer1"
                    src="background.webp"
                    loading="lazy"
                    alt="Three Brazilian Carnival dancers posing in elaborate samba costumes with feathers and sequins"
                    className="h-screen w-full object-cover  mb-[500px] overflow-hidden"
                ></img>

                <TextSection
                    id="text-1"
                    text="At Dance Bloc Brazil, we believe dance is more than just physical activity. It's a celebration of culture, a way to connect with your body, and a chance to build a supportive community."
                    linkHref={route("mission")}
                />

                <img
                    id="events"
                    src="events1.webp"
                    loading="lazy"
                    alt="Brazilian samba dancers performing energetically on stage during a Carnival show"
                    className="h-screen w-full object-cover  mb-[500px] overflow-hidden"
                ></img>

                <TextSection
                    id="text-2"
                    text="We don't just teach dance; we bring it to life! Dance Bloc Brazil is a sought-after entertainment company, adding a touch of Brazilian flair to events throughout Perth."
                    linkHref={route("events")}
                />

                <img
                    id="costumes"
                    src="costume.webp"
                    loading="lazy"
                    alt="Close-up of colorful feathers from a Brazilian Carnival samba costume available for hire"
                    className="h-screen w-full object-cover  mb-[5s00px] overflow-hidden"
                ></img>

                <TextSection
                    id="text-3"
                    text="At Dance Bloc Brazil, we offer a range of eye-catching, authentic costumes that will make your event unforgettable. Whether you're looking for dazzling outfits for a dance performance or a themed party, our costumes are designed to bring the excitement and color of Carnival right to you."
                    linkHref={route("costumes")}
                />
                <div className="mb-[2000px]"></div>
            </Layout>
        </>
    );
}
