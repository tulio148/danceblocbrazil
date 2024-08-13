import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`inline-flex items-center px-3 gap-3 lg:text-md text-md tracking-widest h-fit focus:outline-none  ${
                active
                    ? "text-white font-bold border-b border-transparent"
                    : "text-white hover:text-white/90 hover:border-b border-white/60 focus:text-white focus:font-normal focus:border-gray-300 "
            } 
                
                ${className}`}
        >
            {children}
        </Link>
    );
}
