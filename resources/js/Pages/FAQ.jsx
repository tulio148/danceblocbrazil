import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TextPlugin } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FAQ({ auth }) {
    const [expandedIndices, setExpandedIndices] = useState([]);
    const faqData = [
        {
            question:
                "Do I need any prior dance experience to take your classes?",
            answer: "Not at all! We offer classes for all levels and welcome everyone, from experienced dancers to those who've only danced as a guest at a wedding. We believe anyone can learn to love these rhythms and move their body with confidence! So come along for a dance, and see if you don't surprise yourself!",
        },
        {
            question: "What should I wear to class?",
            answer: "Wear comfortable clothing that allows for movement. Comfortable shoes, like sneakers, are a great option. If you can wear it to the gym, you can wear it to dance!",
        },
        {
            question: "Do I need a partner for the classes?",
            answer: "No partner is necessary - that's the beauty of our classes. Of course, if you have a partner or friend who wants to join the fun, they're totally welcome, too.",
        },
        {
            question: "Do you offer drop-in classes?",
            answer: "We totally understand that commitment is a scary word these days! That's why we're happy to offer drop-in classes and they are advertised as casual classes on the class bookings page.",
        },
        {
            question: "What's the atmosphere like?",
            answer: "We have a fun and welcoming atmosphere! Our classes are a great way to meet new people, learn a new skill and get some exercise.",
        },
        {
            question: "Can I take photos or videos to post to my social media?",
            answer: "Absolutely! We only ask two things: (1) try to be a stealthy ninja and avoid capturing any classmates if they are camera-shy, and (2) tag us @danceblocbrazil so we can shower your post with likes (because, let's face it, everyone loves a little social media validation, and you deserve it!)",
        },
        {
            question: "Will I have to perform?",
            answer: "Occasionally we have performance opportunities for our students and the spotlight is all yours, if you want it. But fear not, there's absolutely no pressure to perform if that's not your thing. We believe in having fun and learning at your own pace. So, come for the supportive atmosphere, stay for the killer dance moves, and perform only if you're feeling like a total superstar (which you will be!)",
        },
    ];

    const toggleExpand = (index) => {
        setExpandedIndices((prevIndices) =>
            prevIndices.includes(index)
                ? prevIndices.filter((i) => i !== index)
                : [...prevIndices, index]
        );
    };

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
        gsap.to("#header", {
            text: {
                value: "Frequently Asked Questions",
                padSpace: true,
                // rtl: true,
            },
            ease: "power1.inOut",
            duration: 1,
        });
    });

    return (
        <Layout user={auth.user}>
            <Head title="FAQ" />
            <div className="w-full max-w-5xl mt-14 mb-14 h-56 sm:h-fit">
                <h1
                    id="header"
                    className="tracking-widest text-5xl text-white/95 font-medium  p-5 mt-16"
                ></h1>
            </div>
            <div className="flex flex-col gap-7 mx-3">
                {faqData.map((faq, index) => (
                    <div
                        onClick={() => toggleExpand(index)}
                        key={index}
                        className="flex flex-col justify-center cursor-pointer gap-2 max-h-fit border-b bg-gradient-to-b from-white from-90% max-w-5xl px-6 py-4 rounded-3xl z-40 shadow"
                    >
                        <div className="flex items-center justify-between gap-2 h-full">
                            <p className=" font-bold tracking-wide text-xl text-slate-700">
                                {faq.question}
                            </p>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                size="lg"
                                style={{
                                    transform: expandedIndices.includes(index)
                                        ? "rotate(90deg)"
                                        : "rotate(0deg)",
                                    color: "#FF00F7",
                                    transition: "transform 0.3s ease in",
                                }}
                            />
                        </div>
                        <div
                            className={`transition-max-height duration-1000 linear overflow-hidden flex flex-col ${
                                expandedIndices.includes(index)
                                    ? "max-h-[2000px]"
                                    : "max-h-0"
                            }`}
                        >
                            <div className="border-t border-1 border-black/10 mb-4"></div>
                            <p className="text-lg tracking-wide text-slate-500">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
