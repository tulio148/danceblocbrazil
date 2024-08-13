import { useState } from "react";
import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import ClassCard from "@/Components/ClassCard";
import TermCard from "@/Components/TermCard";
import SelectInput from "@/Components/SelectInput";
import InputLabel from "@/Components/InputLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowDownLong,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import CalendarComponent from "@/Components/CalendarComponent";
import { formatDate, formatDatetime } from "@/Lib/dateformatter";

export default function Classes({ auth, classes, terms }) {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from("#buttons", {
            duration: 3,
            delay: 0.3,
            autoAlpha: 0,
            ease: "power4.inOut",
        });

        gsap.to("#top-header1", {
            duration: 1.2,
            // delay: 1,
            text: {
                value: "unlock the",
            },
            ease: "back.in",
        });
        gsap.to("#top-header2", {
            duration: 1.2,
            delay: 1,
            text: {
                value: "samba groove",
            },
            ease: "power4.out",
        });

        gsap.to("#header-terms", {
            scrollTrigger: {
                id: "header-terms",
                trigger: "#header-terms",
                start: "top center",
                toggleActions: "play none restart reverse",
            },
            text: {
                value: "Courses",
            },
            duration: 2,
            ease: "back.out",
        });
        gsap.to("#header-classes", {
            scrollTrigger: {
                id: "header-classes",
                trigger: "#header-classes",
                start: "top center",
                toggleActions: "play none restart reverse",
            },
            text: {
                value: "Classes",
                // speed: 1.5,
            },
            duration: 2,
            ease: "back.out",
        });
    });

    const groupClassesByTerm = (terms, classes) => {
        const sortedTerms = terms.sort(
            (a, b) => new Date(a.start_date) - new Date(b.start_date)
        );

        return sortedTerms.map((term) => {
            return {
                ...term,
                classes: classes
                    .filter((cls) => cls.term_id === term.id)
                    .sort(
                        (a, b) => new Date(a.datetime) - new Date(b.datetime)
                    ),
            };
        });
    };

    const groupedData = groupClassesByTerm(terms, classes);
    console.log(groupedData[0].end_date);
    console.log(groupedData[0].classes[0].datetime);
    // const [showFilter, setShowFilter] = useState(false);
    // const [style, setStyle] = useState("");
    // const [level, setLevel] = useState("");

    console.log(groupedData);

    // const filteredClasses = classes.filter((item) => {
    //     if (level !== "" && item.level !== level) return false;
    //     if (style !== "" && item.style !== style) return false;
    //     return true;
    // });
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
            <Head title="Classes" />

            <div className="grid grid-rows-3 gri-cols-3 bg-[url('/classes1.webp')] bg-cover bg-top mb-3  h-screen w-full lg:bg-top">
                <div className="row-start 1 col-span-3 "></div>
                <div
                    id="buttons"
                    className=" row-start-2 col-start-3 col-span-1 flex flex-col justify-center items-end mx-7 gap-4"
                >
                    <button onClick={() => handleClick("header-terms", 80)}>
                        <div className="flex gap-3 items-center">
                            <div className="text-white bg-db-pink text-xl max-w-40 sm:max-w-fit p-2 rounded sm:text-3xl">
                                next course starts:{" "}
                                {formatDate(groupedData[0].start_date)}
                            </div>
                            <div className="animate-bounce">
                                <FontAwesomeIcon
                                    icon={faArrowDownLong}
                                    size="2xl"
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </div>
                        </div>
                    </button>
                    <button onClick={() => handleClick("header-classes", 80)}>
                        <div className="flex gap-3 items-center">
                            <div className="text-white bg-db-pink text-xl max-w-40 p-2  rounded sm:text-3xl sm:max-w-fit">
                                next class:{" "}
                                {formatDatetime(
                                    groupedData[0].classes[0].datetime
                                )}
                            </div>
                            <div className="animate-bounce">
                                <FontAwesomeIcon
                                    icon={faArrowDownLong}
                                    size="2xl"
                                    style={{
                                        color: "white",
                                    }}
                                />
                            </div>
                        </div>
                    </button>
                </div>
                <div className="row-start-3 col-span-3 self-end max-w-2xl w-fit">
                    <div
                        id="top-header1"
                        className="mx-7 text-white font-extralight h-14 sm:h-20 bg-db-pink rounded   text-5xl md:text-7xl text-right "
                    ></div>
                    <div
                        id="top-header2"
                        className="mx-7 text-white font-thin h-14 sm:h-20  text-5xl md:text-7xl  mb-20"
                    ></div>
                </div>
            </div>
            <div className=" flex bg-db-pink  w-full justify-center min-h-[80px] md:h-[100px] shadow-md mb-10 ">
                <div
                    id="header-terms"
                    className="lg:min-w-[700px] sm:min-w-[500px] min-w-[320px] rounded-xl text-white font-thin tracking-widest text-7xl md:text-8xl   "
                ></div>
            </div>
            {/* <div className=" lg:min-w-[700px] sm:min-w-[500px] min-w-full flex flex-wrap gap-3 mt-8 px-5">
                <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="self-start max-w-fit bg-db-pink text-white font-normal border border-white/70 tracking-wider px-4 py-2 rounded-xl"
                >
                    {showFilter ? "hide filters" : "show filters"}
                </button>
                {style != "" && (
                    <div className="bg-white/95 font-normal border tracking-wider flex items-center p-2 rounded h-fit">
                        <button onClick={() => setStyle("")}>
                            <span className="mr-2 text-slate-500">{style}</span>
                            <FontAwesomeIcon
                                icon={faX}
                                size="xs"
                                style={{ color: "#00FFA0" }}
                            />
                        </button>
                    </div>
                )}
                {level != "" && (
                    <div className="bg-white/95 font-normal border tracking-wider flex items-center p-2 rounded h-fit">
                        <button onClick={() => setLevel("")}>
                            <span className="mr-2 text-slate-500">{level}</span>
                            <FontAwesomeIcon
                                icon={faX}
                                size="xs"
                                style={{ color: "#00FFA0" }}
                            />
                        </button>
                    </div>
                )}
            </div>
            {showFilter && (
                <div className="flex flex-wrap justify-between gap-3 py-8 px-12 rounded-3xl sm:top-20  lg:sm:min-w-[700px] sm:min-w-[500px] min-w-full ">
                    <div className="flex flex-col max-w-fit gap-2">
                        <InputLabel className=" text-white font-normal tracking-wider  ">
                            Style
                        </InputLabel>
                        <SelectInput
                            options={["", "Samba"]}
                            value={style}
                            onChange={(e) => setStyle(e.target.value)}
                            className="bg-db-pink text-white font-medium border border-white/70 tracking-wider"
                        />
                    </div>
                    <div className="flex flex-col max-w-fit  gap-2">
                        <InputLabel className="text-white font-normal tracking-wider">
                            Level
                        </InputLabel>
                        <SelectInput
                            options={[
                                "",
                                "Open",
                                "Beginner",
                                "Intermediate",
                                "Advanced",
                            ]}
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            className="bg-db-pink text-white font-medium border border-white/70 tracking-wider"
                        />
                    </div>
                </div>
            )} */}
            <div className="flex flex-wrap max-w-5xl justify-center gap-8 py-8 px-4 mb-[400px] ">
                {groupedData.map((term) => (
                    <div key={term.id}>
                        <TermCard term={term} />
                    </div>
                ))}
            </div>

            <div className=" flex bg-db-pink  w-full justify-center min-h-[80px] md:h-[100px] shadow-md mb-10 ">
                <div
                    id="header-classes"
                    className="lg:min-w-[700px] sm:min-w-[500px] min-w-[320px] rounded-xl text-white font-thin tracking-widest text-7xl md:text-8xl   "
                ></div>
            </div>
            <div className="px-4 w-full max-w-5xl mb-[1000px]">
                <CalendarComponent classesData={classes} />
            </div>
        </Layout>
    );
}
