import { Link } from "@inertiajs/react";
import { formatDatetime } from "@/Lib/dateformatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function ClassCard({ class_ }) {
    const date = formatDatetime(class_.datetime);

    return (
        <div
            className="flex flex-col gap-4 max-w-lg border-b bg-gradient-to-b from-white from-70% lg:min-w-[700px] sm:min-w-[500px] min-w-[300px] px-6 pt-10 pb-6 rounded-3xl mx-3 z-40 shadow
        "
        >
            <p className="text-xl underline decoration-2 decoration-db-green/80 underline-offset-4 text-slate-600">
                <span className="mr-4">
                    <FontAwesomeIcon
                        icon={faCalendar}
                        size="lg"
                        style={{ color: "#FF00F7" }}
                    />
                </span>
                <span>{date}</span>
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-5">
                <h2 className="max-w-fit text-xl font-medium text-slate-800 tracking-widest ">
                    {class_.name}
                </h2>
                <span className="max-w-fit text-lg border border-db-green/50 px-4 py-2 tracking-wide rounded-full text-slate-500 ">
                    {class_.level}
                </span>
            </div>

            <p className=" text-slate-600 text-base text-justify tracking-wider leading-7 whitespace-normal py-5">
                {class_.description}
            </p>
            <Link
                href={route("classes.show", class_.name)}
                className=" self-center inline-flex items-center max-w-fit px-10 py-4 mt-6 bg-gradient-to-tr from-db-pink to-db-pink/30 rounded-md font-light text-2xl text-white tracking-widest  hover:bg-gradient-to-br hover:from-db-pink hover:to-db-pink/30 hover:text-opacity-80 focus:bg:db-pink/50 active:bg-db-pink transition ease-in-out duration-150 "
            >
                learn more
            </Link>
        </div>
    );
}
