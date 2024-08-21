import { Link } from "@inertiajs/react";

export default function TextSection({ id, heading, text, linkHref }) {
    return (
        <div
            id={id}
            className="z-40 flex flex-col justify-center items-center pt-12 max-w-5xl h-screen mb-[800px]"
        >
            <div className="max-w-3xl m-4 px-4 py-14 sm:p-8 border border-white/50 bg-gradient-to-b from-db-pink/80 to-db-pink/80 shadow-lg shadow-white/40 rounded-xl">
                <div
                    id={"heading-" + id}
                    className="self-start mx-7  rounded-sm h-24 sm:h-fit pr-[1px] text-white font-extrabold text-5xl md:text-7xl mb-12"
                >
                    {heading}
                </div>
                <p className="text-white font-normal text-xl sm:text-2xl tracking-widest leading-8 md:text-justify">
                    {text}
                    <br />
                    <br />
                    <Link
                        className="underline underline-offset-4 font-bold"
                        href={linkHref}
                        aria-label="Learn more about Dance Bloc Brazil"
                    >
                        &nbsp;Learn about us!&nbsp;
                    </Link>
                </p>
            </div>
        </div>
    );
}
