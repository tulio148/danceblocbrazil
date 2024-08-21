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
        gsap.to("#logo-text", {
            opacity: 1,
            duration: 2,
            ease: "power2.inOut",
        });

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

        gsap.to("#heading0", {
            autoAlpha: 1,
            delay: 1,
            translateY: -50,
            duration: 4,
            ease: "power4.out",
        });

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

        const sections = [
            { id: "dancer1", duration: 5000 },
            { id: "events", duration: 5000 },
            { id: "costumes", duration: 5000 },
            { id: "text-1", duration: 3000 },
            { id: "text-2", duration: 3000 },
            { id: "text-3", duration: 3000 },
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

        function HeadingAnimation(id) {
            const heading = gsap.timeline({
                scrollTrigger: {
                    id: id,
                    trigger: "#" + id,
                    start: "top top",
                    toggleActions: "play none none none",
                    // markers: true,
                },
            });
            return heading;
        }
        const headings = ["heading-text-1", "heading-text-2", "heading-text-3"];

        headings.forEach((id) => {
            const tl = HeadingAnimation(id);
            tl.from(`#${id}`, {
                autoAlpha: 0,
                translateY: -40,
                duration: 6,
                ease: "power4.out",
            });
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
                    heading="more than just steps"
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
                    heading="beyond the studio"
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
                    heading="dress to impress"
                    text="At Dance Bloc Brazil, we offer a range of eye-catching, authentic costumes that will make your event unforgettable. Whether you're looking for dazzling outfits for a dance performance or a themed party, our costumes are designed to bring the excitement and color of Carnival right to you."
                    linkHref={route("costumes")}
                />
                <div className="mb-[4000px]"></div>
            </Layout>
        </>
    );
}
