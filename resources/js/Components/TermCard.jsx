import { useState } from "react";
import { Link } from "@inertiajs/react";
import { formatDate, formatDatetime } from "@/Lib/dateformatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendar,
    faBolt,
    faArrowRight,
    faUser,
    faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function TermCard({ term }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const startDate = formatDate(term.start_date);
    const endDate = formatDate(term.end_date);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="flex flex-col   gap-2  max-h-fit border-b bg-gradient-to-b from-white from-90% px-6 py-4 rounded-3xl z-40 shadow">
            <div
                onClick={toggleExpand}
                className="flex items-center justify-between gap-2 h-full cursor-pointer"
            >
                <h2 className="max-w-fit text-xl font-normal text-slate-800 tracking-widest">
                    {term.name}
                </h2>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    size="lg"
                    style={{
                        transform: isExpanded
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                        color: "#FF00F7",
                        transition: "transform 0.3s linear",
                    }}
                />
            </div>
            {/* {isExpanded && ( */}
            <div
                className={`transition-max-height duration-1000 ease-in-out overflow-hidden flex flex-col ${
                    isExpanded ? "max-h-[2000px]" : "max-h-0"
                }`}
            >
                <div className="border-t border-1 border-black/10"></div>
                <p className="text-slate-600 text-lg text-justify  tracking-wider leading-6 whitespace-normal py-5">
                    {term.description}
                    <Link
                        href={route("order.store")}
                        method="post"
                        as="button"
                        type="button"
                        data={{
                            id: term.id,
                            name: term.name,
                            price: term.price,
                        }}
                        className="underline text-db-pink underline-offset-4 font-medium decoration-1"
                    >
                        &nbsp;Enrol Now!&nbsp;
                    </Link>
                </p>
                <div className="flex flex-col flex-wrap gap-3 mt-4 mb-10 mx-8">
                    <p className="text-xl  text-slate-600">
                        <span className="mr-4">
                            <FontAwesomeIcon
                                icon={faCalendar}
                                size="lg"
                                style={{ color: "#FF00F7" }}
                            />
                        </span>
                        <span>
                            {startDate} - {endDate}
                        </span>
                    </p>
                    <div>
                        <span className="mr-4">
                            <FontAwesomeIcon
                                icon={faBolt}
                                size="xl"
                                style={{ color: "#FF00F7" }}
                            />
                        </span>
                        <span className="max-w-fit text-xl  text-slate-600">
                            {term.level}
                        </span>
                    </div>
                    <div>
                        <span className="mr-4">
                            <FontAwesomeIcon
                                icon={faUser}
                                size="xl"
                                style={{ color: "#FF00F7" }}
                            />
                        </span>
                        <span className="text-xl  text-slate-600">
                            {term.instructor}
                        </span>
                    </div>
                    <div>
                        <span className="mr-4">
                            <FontAwesomeIcon
                                icon={faTag}
                                size="xl"
                                style={{ color: "#FF00F7" }}
                            />
                        </span>
                        <span className="text-xl text-slate-600 tracking-wider">
                            ${term.price}
                        </span>
                    </div>
                </div>
                <div className="mx-4 mb-8">
                    <div className="border-x border-b border-black/20 rounded-b-md p-6 flex flex-col gap-4">
                        <p className="mt-4 mb-2 text-xl w-fit tracking-widest underline underline-offset-2 decoration-2 decoration-db-pink">
                            Schedule
                        </p>
                        {term.classes
                            .sort(
                                (a, b) =>
                                    new Date(a.datetime) - new Date(b.datetime)
                            )
                            .map((classItem) => (
                                <div
                                    key={classItem.id}
                                    className="flex gap-3 justify-between"
                                >
                                    <p>{classItem.name}</p>
                                    <p>{formatDatetime(classItem.datetime)}</p>
                                </div>
                            ))}
                    </div>
                </div>

                <Link
                    href={route("order.store")}
                    method="post"
                    as="button"
                    type="button"
                    data={{
                        id: term.id,
                        name: term.name,
                        price: term.price,
                    }}
                    className="self-center  inline-flex items-center max-w-fit px-10 py-4 mt-6 bg-gradient-to-tr from-db-pink to-db-pink/30 rounded-md font-light text-2xl text-white tracking-widest hover:bg-gradient-to-br hover:from-db-pink hover:to-db-pink/30 hover:text-opacity-80 focus:bg:db-pink/50 active:bg-db-pink transition ease-in-out duration-150"
                >
                    Enrol
                </Link>
            </div>
            {/* )} */}
        </div>
    );
}
