import ResponsiveNavLink from "./ResponsiveNavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightToBracket,
    faDoorOpen,
    faUserTie,
    faCalendarDays,
    faMusic,
    faPhone,
    faMask,
    faCircleInfo,
    faCircleQuestion,
    faFeather,
} from "@fortawesome/free-solid-svg-icons";

export default function ResponsiveNav({ user }) {
    return (
        <div className="absolute z-50 flex justify-end md:justify-center lg:hidden w-full bg-gradient-to-r from-white/10 to-db-pink to-55% drop-shadow-xl">
            <div className="flex flex-col gap-6 p-5 z-50">
                {user ? (
                    <>
                        <div className="flex flex-col gap-2">
                            {user.admin == 1 && (
                                <ResponsiveNavLink
                                    href={route("admin")}
                                    active={route().current("admin")}
                                >
                                    <div className="flex items-center gap-5">
                                        {route().current("admin") ? (
                                            <FontAwesomeIcon
                                                icon={faUserTie}
                                                size="lg"
                                                style={{
                                                    color: "#00FFA0",
                                                }}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faUserTie}
                                                size="lg"
                                                style={{
                                                    color: "#FFFFFF",
                                                }}
                                            />
                                        )}
                                        Admin
                                    </div>
                                </ResponsiveNavLink>
                            )}
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                <div className="flex items-center gap-5">
                                    {route().current("dashboard") ? (
                                        <FontAwesomeIcon
                                            icon={faCalendarDays}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faCalendarDays}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                    My Dashboard
                                </div>
                            </ResponsiveNavLink>
                        </div>
                        <div className="flex flex-col gap-2">
                            <ResponsiveNavLink
                                href={route("mission")}
                                active={route().current("mission")}
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5 ">
                                    About Us
                                    {route().current("mission") ? (
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("classes")}
                                active={
                                    route().current("classes") ||
                                    route().current("classes.show")
                                }
                                className="self-end"
                            >
                                <div className="flex items-center gap-5">
                                    Dance Classes
                                    {route().current("classes") ||
                                    route().current("classes.show") ? (
                                        <FontAwesomeIcon
                                            icon={faMusic}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faMusic}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("events")}
                                active={route().current("events")}
                                className="self-end"
                            >
                                <div className="flex items-center gap-5">
                                    Book a Show
                                    {route().current("events") ? (
                                        <FontAwesomeIcon
                                            icon={faMask}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faMask}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("costumes")}
                                active={route().current("costumes")}
                                className="self-end"
                            >
                                <div className="flex items-center gap-5">
                                    Costume Hire
                                    {route().current("costumes") ? (
                                        <FontAwesomeIcon
                                            icon={faFeather}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faFeather}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("contact")}
                                active={route().current("contact")}
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5 ">
                                    Contact
                                    {route().current("contact") ? (
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("faq")}
                                active={route().current("faq")}
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5 ">
                                    FAQ
                                    {route().current("faq") ? (
                                        <FontAwesomeIcon
                                            icon={faCircleQuestion}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faCircleQuestion}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                        </div>

                        <ResponsiveNavLink
                            method="post"
                            href={route("logout")}
                            as="button"
                            className="self-end"
                        >
                            <div className="flex items-start gap-3  mt-4">
                                Sign Out
                                <FontAwesomeIcon
                                    icon={faDoorOpen}
                                    size="lg"
                                    style={{
                                        color: "#FFFFFF",
                                    }}
                                />
                            </div>
                        </ResponsiveNavLink>
                    </>
                ) : (
                    <>
                        <ResponsiveNavLink
                            href={route("login")}
                            active={route().current("login")}
                            className="self-end"
                        >
                            <div className="flex items-center gap-5">
                                Sign In
                                <FontAwesomeIcon
                                    icon={faArrowRightToBracket}
                                    size="lg"
                                    style={{
                                        color: "#00FFA0",
                                    }}
                                />
                            </div>
                        </ResponsiveNavLink>
                        <div className="flex flex-col gap-2">
                            <ResponsiveNavLink
                                href={route("mission")}
                                active={route().current("mission")}
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5 ">
                                    About Us
                                    {route().current("mission") ? (
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("classes")}
                                active={
                                    route().current("classes") ||
                                    route().current("classes.show")
                                }
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5 ">
                                    Dance Classes
                                    {route().current("classes") ||
                                    route().current("classes.show") ? (
                                        <FontAwesomeIcon
                                            icon={faMusic}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faMusic}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("events")}
                                active={route().current("events")}
                                className="self-end"
                            >
                                <div className="flex items-center gap-5">
                                    Book a Show
                                    {route().current("events") ? (
                                        <FontAwesomeIcon
                                            icon={faMask}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faMask}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("costumes")}
                                active={route().current("costumes")}
                                className="self-end"
                            >
                                <div className="flex items-center gap-5">
                                    Costume Hire
                                    {route().current("costumes") ? (
                                        <FontAwesomeIcon
                                            icon={faFeather}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faFeather}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("contact")}
                                active={route().current("contact")}
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5 ">
                                    Contact
                                    {route().current("contact") ? (
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                href={route("faq")}
                                active={route().current("faq")}
                                className="self-end"
                            >
                                <div className="flex items-center  gap-5 ">
                                    FAQ
                                    {route().current("faq") ? (
                                        <FontAwesomeIcon
                                            icon={faCircleQuestion}
                                            size="lg"
                                            style={{
                                                color: "#00FFA0",
                                            }}
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faCircleQuestion}
                                            size="lg"
                                            style={{
                                                color: "#FFFFFF",
                                            }}
                                        />
                                    )}
                                </div>
                            </ResponsiveNavLink>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
