import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { formatDatetime } from "@/Lib/dateformatter";
import { Link } from "@inertiajs/react";
export default function Home({
    user,
    enrolled_classes,
    orders,
    handleTabChange,
}) {
    return (
        <div className="sm:pt-52 pt-20 px-5 w-full max-w-5xl flex flex-col items-center">
            <h1 className="w-full tracking-widest text-2xl text-white font-extralight text-left py-10 ">
                Welcome back, {user.name}!
            </h1>
            <div className="w-full max-w-2xl">
                {orders.some((order) => order.state === "OPEN") && (
                    <button
                        onClick={() => handleTabChange(2)}
                        className="flex justify-around p-4 sm:p-8 w-full border-b bg-gradient-to-br from-white from-50% shadow rounded-xl"
                    >
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            size="2xl"
                            style={{ color: "#FF00F7" }}
                            beatFade
                        />
                        <span className="text-xl font-light text-slate-500 tracking-widest">
                            Go to checkout
                        </span>
                    </button>
                )}
                <h1 className="w-full tracking-widest text-4xl text-white font-extralight text-right py-10 ">
                    next class
                </h1>
                {enrolled_classes.length > 0 ? (
                    <div className="flex flex-wrap items-center gap-4 p-4 sm:p-8 border-b bg-gradient-to-br from-white from-60% shadow rounded-xl font-light text-2xl text-slate-500">
                        <p className="text-lg font-normal underline decoration-2 decoration-db-green/80 underline-offset-4 text-slate-600 pb-2">
                            <span className="mr-4">
                                <FontAwesomeIcon
                                    icon={faCalendar}
                                    size="lg"
                                    style={{ color: "#FF00F7" }}
                                />
                            </span>
                            <span>
                                {formatDatetime(enrolled_classes[0].datetime)}
                            </span>
                        </p>
                        <div className="flex flex-wrap gap-4 justify-between w-full items-center sm:px-8">
                            <span className="text-xl">
                                {enrolled_classes[0].name}
                            </span>
                            <Link
                                href={route(
                                    "classes.show",
                                    enrolled_classes[0].name
                                )}
                                className=" inline-flex items-center max-w-fit px-6 py-1   bg-gradient-to-tr from-db-pink to-db-pink/30 rounded-md font-light text-white tracking-widest  hover:bg-gradient-to-br hover:from-db-pink hover:to-db-pink/30 hover:text-opacity-80 focus:bg:db-pink/50 active:bg-db-pink transition ease-in-out duration-150"
                            >
                                details
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="w-full flex flex-wrap items-center gap-4 border-b bg-gradient-to-br from-white from-50% p-6  rounded-xl shadow font-light text-2xl text-slate-500 tracking-wider">
                        <h2>No upcoming classes.</h2>
                    </div>
                )}
            </div>
        </div>
    );
}
