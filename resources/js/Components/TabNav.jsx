export default function TabNav({
    tabs,
    activeTab,
    handleTabChange,
    className,
}) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div
            className={`fixed bottom-0 sm:top-20 sm:pt-10 w-full h-fit bg-white sm:bg-db-pink   ${className}`}
        >
            <div className="flex  gap-2 py-5 px-2 sm:px-6 sm:p-0 w-full max-w-7xl mx-auto">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            handleTabChange(index);
                            scrollToTop();
                        }}
                        className={`w-full mx-auto py-3 relative z-10 rounded-tr-md rounded-tl-md sm:bg-gradient-to-b   
                ${
                    index === activeTab
                        ? "transition duration-700 text-white font-semibold from-slate-200/80"
                        : "text-white text-opacity-90 transition duration-700 from-slate-200/50 hover:from-slate-200/60"
                }`}
                    >
                        <span>{tab.icon}</span>
                        <span className="hidden pl-5 sm:inline text-base tracking-widest">
                            {tab.label}
                        </span>
                        <div
                            className={`absolute bottom-0 left-0 w-full border-t border-db-pink/30 sm:border-slate-200/40 transition-transform duration-1000 transform origin-left ${
                                index === activeTab
                                    ? "scale-x-100"
                                    : "scale-x-0"
                            }`}
                        ></div>
                    </button>
                ))}
            </div>
        </div>
    );
}
