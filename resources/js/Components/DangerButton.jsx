export default function DangerButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-6 py-2 bg-gradient-to-tr from-red-500 to-red-500/30 rounded-md font-normal text-md text-white tracking-widest hover:bg-gradient-to-br  hover:from-red-500 hover:to-red-500/30  focus:bg:db-pink/50 active:bg-red-500 transition ease-in-out duration-150 ${
                    disabled && "opacity-70"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
