import { formatDatetime } from "@/Lib/dateformatter";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function Calendar({ user, enrolled_classes }) {
    const upcomingClasses = enrolled_classes.filter(
        (classItem) =>
            new Date(classItem.datetime).getTime() > new Date().getTime()
    );
    // console.log(upcomingClasses);
    // console.log(enrolled_classes);
    return (
        <div className="sm:pt-52 pt-20 px-5 w-full max-w-2xl flex flex-col items-center gap-10">
            <h1 className="w-full tracking-widest text-4xl text-white font-extralight text-right py-10 ">
                upcoming classes
            </h1>
            {upcomingClasses.length != 0 ? (
                upcomingClasses.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-wrap items-center gap-4 p-4 sm:p-8 border-b bg-gradient-to-br from-white from-60% shadow rounded-xl font-light text-2xl text-slate-500"
                    >
                        <p className="text-lg font-normal underline decoration-2 decoration-db-green/80 underline-offset-4 text-slate-600 pb-2">
                            <span className="mr-4">
                                <FontAwesomeIcon
                                    icon={faCalendar}
                                    size="lg"
                                    style={{ color: "#FF00F7" }}
                                />
                            </span>
                            <span>{formatDatetime(item.datetime)}</span>
                        </p>
                        <div className="flex flex-wrap gap-4 justify-between w-full items-center sm:px-8">
                            <span className="text-xl">{item.name}</span>
                            <Link
                                href={route("classes.show", item.name)}
                                className=" inline-flex items-center max-w-fit px-6 py-1   bg-gradient-to-tr from-db-pink to-db-pink/30 rounded-md font-light text-white tracking-widest  hover:bg-gradient-to-br hover:from-db-pink hover:to-db-pink/30 hover:text-opacity-80 focus:bg:db-pink/50 active:bg-db-pink transition ease-in-out duration-150"
                            >
                                details
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <div className="w-full flex flex-wrap items-center gap-4 border-b bg-gradient-to-br from-white from-60% p-6 rounded-xl shadow font-light text-2xl text-slate-500 tracking-wider">
                    <h2>No upcoming classes.</h2>
                </div>
            )}
        </div>
    );
}
