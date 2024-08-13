import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

export default function CalendarComponent({ classesData }) {
    const getLastSunday = (date) => {
        const dayOfWeek = date.getDay();
        const lastSunday = new Date(date);
        lastSunday.setDate(date.getDate() - dayOfWeek);
        return lastSunday;
    };

    const getMonthName = (date) => {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        return monthNames[date.getMonth()];
    };

    const [currentWeekStartDate, setCurrentWeekStartDate] = useState(
        getLastSunday(new Date())
    );

    useEffect(() => {
        setCurrentWeekStartDate(getLastSunday(new Date()));
    }, []);

    const [activeDay, setActiveDay] = useState(new Date().getDay());

    const handlePreviousWeek = () => {
        const previousWeekStartDate = new Date(currentWeekStartDate);
        previousWeekStartDate.setDate(previousWeekStartDate.getDate() - 7);
        setCurrentWeekStartDate(previousWeekStartDate);
    };

    const handleNextWeek = () => {
        const nextWeekStartDate = new Date(currentWeekStartDate);
        nextWeekStartDate.setDate(nextWeekStartDate.getDate() + 7);
        setCurrentWeekStartDate(nextWeekStartDate);
    };

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const renderClassesForDay = (dayIndex) => {
        const date = new Date(currentWeekStartDate);
        date.setDate(date.getDate() + dayIndex);
        const dateString = date.toISOString().split("T")[0];

        const classes = classesData.filter(
            (classItem) => classItem.datetime.split("T")[0] === dateString
        );

        if (classes.length === 0) {
            return (
                <p className="text-center border-b py-2 mb-4">
                    No classes on this day
                </p>
            );
        }

        return (
            <>
                {classes
                    .sort((a, b) => new Date(a.datetime) - new Date(b.datetime))
                    .map((classItem, index) => (
                        <div
                            key={index}
                            className="flex gap-4 justify-between items-end border-b pb-1 mb-4"
                        >
                            <div>
                                {new Date(
                                    classItem.datetime
                                ).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true,
                                    timeZone: "UTC",
                                })}{" "}
                            </div>
                            {classItem.name}
                            {/* <Link
                                href={route("order.store")}
                                method="post"
                                as="button"
                                type="button"
                                data={{
                                    id: classItem.id,
                                    name: classItem.name,
                                    price: classItem.price,
                                    }}
                                    className="max-w-fit px-3 my-1 bg-gradient-to-tr from-db-pink to-db-pink/30 rounded-md font-light text-xl text-white tracking-widest hover:bg-gradient-to-br hover:from-db-pink hover:to-db-pink/30 hover:text-opacity-80 focus:bg:db-pink/50 active:bg-db-pink transition ease-in-out duration-150"
                                    >
                                    enrol
                                    </Link> */}
                            <Link
                                href={route("classes.show", classItem.name)}
                                className=" inline-flex items-center max-w-fit px-4 py-1   bg-gradient-to-tr from-db-pink to-db-pink/30 rounded-md font-light text-white tracking-widest  hover:bg-gradient-to-br hover:from-db-pink hover:to-db-pink/30 hover:text-opacity-80 focus:bg:db-pink/50 active:bg-db-pink transition ease-in-out duration-150"
                            >
                                details
                            </Link>
                        </div>
                    ))}
            </>
        );
    };
    const today = new Date().setHours(0, 0, 0, 0);
    const currentWeekStart = new Date(currentWeekStartDate).setHours(
        0,
        0,
        0,
        0
    );
    const showPreviousWeekButton = currentWeekStart >= today;

    return (
        <div className="w-full max-w-5xl border-b bg-gradient-to-b from-white from-90% px-6 pt-10 pb-6 rounded-3xl shadow ">
            <div className="grid grid-cols-3 w-full mb-4">
                {showPreviousWeekButton && (
                    <button
                        onClick={handlePreviousWeek}
                        className="col-start-1 justify-self-start w-fit"
                    >
                        Previous
                    </button>
                )}
                <p className="col-start-2 justify-self-center text-lg font-medium  text-white bg-db-pink rounded py-1 px-3    tracking-widest">
                    {getMonthName(currentWeekStartDate)}
                </p>
                <button
                    onClick={handleNextWeek}
                    className="col-start-3 w-fit justify-self-end"
                >
                    Next
                </button>
            </div>
            <div
                className="flex gap-2 w-full justify-between border-t-2 pt-2
             border-db-pink mb-10"
            >
                {weekdays.map((weekday, index) => {
                    const date = new Date(currentWeekStartDate);
                    date.setDate(date.getDate() + index);
                    const isNotSunday = index !== 0;
                    return (
                        isNotSunday && (
                            <>
                                <div
                                    key={index}
                                    className="font-medium text-center text-md tracking-wider cursor-pointer"
                                    onClick={() => setActiveDay(index)}
                                >
                                    {weekday} {date.getDate()}
                                    <div
                                        className={`w-full border-t-4 border-db-pink  transition duration-500  ${
                                            index === activeDay
                                                ? "scale-x-100"
                                                : "scale-x-0"
                                        }`}
                                    ></div>
                                </div>
                            </>
                        )
                    );
                })}
            </div>
            <div className="px-2">{renderClassesForDay(activeDay)}</div>
        </div>
    );
}
