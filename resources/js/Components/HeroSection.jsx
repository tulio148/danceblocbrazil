export default function HeroSection() {
    return (
        <div className="flex flex-col justify-around bg-cover bg-center h-screen w-full max-w-7xl lg:bg-center">
            <div id="logo-text" className="w-full flex justify-end opacity-0">
                <h1 className="max-w-md md:max-w-lg tracking-widest text-6xl sm:text-[12vw] lg:text-[10vw] xl:text-[7vw] text-white font-bold text-right pb-20 mt-16 mx-2 lg:mr-24 md:mr-10">
                    dance bloc Brazil
                </h1>
            </div>
            <div
                id="heading0"
                className="w-full flex justify-center max-7xl h-fit py-1 shadow-md shadow-db-pink/30 mb-12 opacity-0"
            >
                <h1 className="tracking-[0.2em] w-full text-3xl leading-10 font-normal text-left max-w-7xl text-white">
                    Experience Perth's premier dance school, offering diverse
                    styles, a vibrant community, professional event shows, and
                    costume hire services.
                </h1>
            </div>
        </div>
    );
}
