import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { formatDatetime } from "@/Lib/dateformatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendar,
    faBolt,
    faUser,
    faTag,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Head } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function Show({ auth, class_, enrolled_classes }) {
    const isEnrolled = enrolled_classes.reduce((enrolled, item) => {
        return enrolled || item.id === class_.id;
    }, false);

    return (
        <Layout user={auth.user}>
            <Head title={class_.name} />

            <h1 className="tracking-widest text-4xl text-white font-extralight text-right py-5 mt-16 relative">
                <Transition
                    show={true}
                    appear={true}
                    enter="transition-opacity ease-linear duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {class_.name}
                </Transition>
            </h1>

            <div className="flex flex-col justify-between gap-4 border-b bg-gradient-to-b from-white/90 from-70% max-w-xs w-full h-96 px-6 py-8 rounded-3xl shadow mx-2 my-6 z-40">
                <p className=" text-base  tracking-wider max-w-fit">
                    <span className="mr-4">
                        <FontAwesomeIcon
                            icon={faCalendar}
                            size="xl"
                            style={{ color: "#FF00F7" }}
                        />
                    </span>
                    <span>{formatDatetime(class_.datetime)}</span>
                </p>
                <p className=" text-base  tracking-wider  max-w-fit ">
                    <span className="mr-4">
                        <FontAwesomeIcon
                            icon={faBolt}
                            size="xl"
                            style={{ color: "#FF00F7" }}
                        />
                    </span>
                    <span>{class_.level}</span>
                </p>
                <p className=" text-base  tracking-wider  max-w-fit">
                    <span className="mr-4">
                        <FontAwesomeIcon
                            icon={faUser}
                            size="xl"
                            style={{ color: "#FF00F7" }}
                        />
                    </span>
                    <span>{class_.instructor}</span>
                </p>
                <p className=" text-base  tracking-wider max-w-fit">
                    <span className="mr-4">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            size="xl"
                            style={{ color: "#FF00F7" }}
                        />
                    </span>
                    <span>{class_.location}</span>
                </p>
                <p className=" text-base  tracking-widest  max-w-fit">
                    <span className="mr-4">
                        <FontAwesomeIcon
                            icon={faTag}
                            size="xl"
                            style={{ color: "#FF00F7" }}
                        />
                    </span>
                    <span>${class_.price}</span>
                </p>
                {isEnrolled ? (
                    <div className="self-center inline-flex items-center max-w-fit px-8 py-3 mt-6 bg-gradient-to-tr from-db-pink/30 to-db-pink/30 rounded-md font-normal text-2xl text-white tracking-widest">
                        enrolled
                    </div>
                ) : (
                    <Link
                        href={route("order.store")}
                        method="post"
                        as="button"
                        type="button"
                        data={{
                            id: class_.id,
                            name: class_.name,
                            price: class_.price,
                        }}
                        className="self-center inline-flex items-center max-w-fit px-8 py-3 mt-6 bg-gradient-to-tr from-db-pink to-db-pink/30 rounded-md font-light text-2xl text-white tracking-widest hover:bg-gradient-to-br hover:from-db-pink hover:to-db-pink/30 hover:text-opacity-80 focus:bg:db-pink/50 active:bg-db-pink transition ease-in-out duration-150"
                    >
                        Enrol
                    </Link>
                )}
            </div>
            <div className="border-t border-b border-white/50 my-8 mx-2 rounded-3xl shadow-md shadow-db-pink brightness-105   max-w-7xl h-screen flex flex-col justify-between bg-no-repeat w-full bg-top  bg-black bg-[url('/fb_img_1663987814675.jpg')] ">
                <h2 className="w-full flex items-center tracking-widest  py-5 mt-3 px-4 gap-2">
                    <span className=" text-db-pink/90 font-medium text-3xl">
                        dance
                    </span>
                    <span className=" text-white/90  font-light text-3xl">
                        with
                    </span>
                    <span className=" text-db-green/90 font-medium text-3xl">
                        passion
                    </span>
                </h2>
                {isEnrolled ? (
                    <div className="text-center font-medium tracking-wider text-4xl py-2 text-db-pink/90  mx-2 my-4">
                        enrolled
                    </div>
                ) : (
                    <Link
                        href={route("order.store")}
                        method="post"
                        as="button"
                        type="button"
                        data={{
                            id: class_.id,
                            name: class_.name,
                            price: class_.price,
                        }}
                        className="font-medium tracking-wider text-4xl py-2 text-db-pink/90 underline decoration-db-pink decoration-2  underline-offset-8 mx-2 my-4 hover:animate-pulse"
                    >
                        Enrol Now
                    </Link>
                )}
            </div>
        </Layout>
    );
}
