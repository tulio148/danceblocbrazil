export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-6 py-2 bg-gradient-to-tr from-db-pink to-db-pink/30 rounded-md font-normal text-md text-white tracking-widest hover:bg-gradient-to-br hover:from-db-pink hover:to-db-pink/30 focus:bg:db-pink/50 active:bg-db-pink transition ease-in-out duration-150 ${
                    disabled && "opacity-70"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
