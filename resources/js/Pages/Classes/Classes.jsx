import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import TermCard from "@/Components/TermCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
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
        gsap.to("#buttons", {
            duration: 3,
            delay: 1,
            autoAlpha: 1,
            ease: "power4.out",
        });

        gsap.from("#top-header1", {
            duration: 1.5,
            width: "0%",
            delay: 0.5,
            ease: "power4.out",
        });
        gsap.to("#top-header1", {
            duration: 2,
            delay: 0.5,
            autoAlpha: 1,
            ease: "power4.out",
        });
        gsap.to("#top-header2", {
            duration: 2,
            delay: 0.5,
            autoAlpha: 1,
            ease: "power4.out",
        });

        // gsap.to("#top-header2", {
        //     duration: 1.2,
        //     delay: 1,
        //     text: {
        //         value: "samba groove",
        //     },
        //     ease: "power4.out",
        // });

        gsap.to("#header-terms", {
            scrollTrigger: {
                id: "header-terms",
                trigger: "#header-terms",
                start: "top center",
                toggleActions: "play none restart reverse",
            },
            text: {
                value: "Terms",
                rtl: true,
            },
            duration: 1,
            ease: "back.inOut",
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
            duration: 1,
            ease: "back.inOut",
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
    const today = new Date();
    const groupedData = groupClassesByTerm(terms, classes);
    const nextCourse = groupedData.find(
        (term) => new Date(term.start_date) > today
    );

    // const [showFilter, setShowFilter] = useState(false);
    // const [style, setStyle] = useState("");
    // const [level, setLevel] = useState("");

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
            <Head>
                <title>
                    Learn Samba in Perth | Fun and Exciting Dance Classes
                </title>
                <meta
                    name="description"
                    content="Discover the passion of Brazilian Samba with our expert instructors in Perth. Whether you're a beginner or advanced dancer, we offer fun and energetic classes and workshops to suit all levels. Boost your fitness while learning this exciting dance style. Book your first lessons today!"
                />
            </Head>

            <div className="grid grid-rows-3 gri-cols-3 bg-[url('/classes1.webp')] bg-cover bg-top h-screen w-full lg:bg-top">
                <div className="row-start 1 col-span-3 "></div>
                <div
                    id="buttons"
                    className=" row-start-2 col-start-3 col-span-1 flex flex-col justify-center items-end mx-7 gap-4 opacity-0"
                >
                    <button onClick={() => handleClick("terms", 100)}>
                        <div className="flex gap-3 items-center">
                            <div className="text-white bg-db-pink text-xl max-w-40 sm:max-w-fit p-2 rounded sm:text-3xl">
                                {nextCourse ? (
                                    <>
                                        next term starts:{" "}
                                        {formatDate(nextCourse.start_date)}
                                    </>
                                ) : (
                                    "No upcoming courses"
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
                    <button onClick={() => handleClick("classes", 100)}>
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
                        className="mx-7 text-white font-extralight h-14 sm:h-20 bg-db-pink rounded   text-5xl md:text-7xl text-right opacity-0"
                    >
                        unlock
                    </div>
                    <div
                        id="top-header2"
                        className="mx-7 text-white font-thin h-14 sm:h-20  text-5xl md:text-7xl text-right  mb-20 opacity-0"
                    >
                        the samba groove
                    </div>
                </div>
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
            <div className="flex justify-center bg-db-pink w-full shadow-md mb-10">
                <div id="terms" className="text-white px-10 max-w-5xl my-12">
                    <h1 className="text-3xl font-bold mb-5">
                        Samba Dance Terms in Perth
                    </h1>
                    <div className="text-justify text-xl font-medium flex flex-col gap-5 mb-5">
                        <p>
                            Ignite your passion for Brazilian dance with our
                            structured Samba courses in Perth.
                        </p>
                        <p>
                            Learn the foundations and intricacies of Samba from
                            our expert instructors.
                        </p>
                        <p>
                            Our comprehensive curriculum is designed to guide
                            you from beginner to advanced, ensuring you master
                            the rhythmic and energetic moves of this captivating
                            dance form.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end max-w-5xl min-h-[80px] md:h-[100px]">
                <div
                    id="header-terms"
                    className="rounded-xl text-white font-thin tracking-widest text-7xl  md:text-8xl "
                ></div>
            </div>
            <div className="flex flex-wrap max-w-5xl justify-center gap-8 py-8 px-4 mb-[400px] ">
                {groupedData.map((term) => (
                    <div key={term.id}>
                        <TermCard term={term} />
                    </div>
                ))}
            </div>

            <div className="flex bg-db-pink w-full justify-center shadow-md mb-10  px-6 ">
                <div id="classes" className="text-white px-4 max-w-4xl  my-12">
                    <h1 className="text-3xl font-bold mb-5">
                        Samba Dance Classes in Perth
                    </h1>
                    <div className="text-justify text-xl font-medium flex flex-col gap-5 ">
                        <p>
                            Discover the joy of Samba with our fun and flexible
                            casual and drop-in classes in Perth.
                        </p>
                        <p>
                            Perfect for those seeking a spontaneous workout or
                            wanting to commit to structured training, our
                            classes offer a vibrant atmosphere to learn and
                            practice Samba.
                        </p>
                        <p>
                            Immerse yourself in the rhythm of Brazilian dance
                            and experience the ultimate fitness boost.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end max-w-5xl min-h-[80px] md:h-[100px]">
                <div
                    id="header-classes"
                    className="rounded-xl text-white font-thin tracking-widest text-7xl  md:text-8xl "
                ></div>
            </div>
            <div className="w-full max-w-5xl mb-[2000px] px-6 py-8">
                <CalendarComponent classesData={classes} />
            </div>
        </Layout>
    );
}
