import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faCalendarDays,
    faCartShopping,
    faGear,
    faCalendarPlus,
    faUsers,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

export const DashboardTabs = [
    {
        label: "Home",
        icon: (
            <FontAwesomeIcon
                icon={faHouse}
                size="xl"
                style={{ color: "#00FFA0" }}
            />
        ),
    },
    {
        label: "My Classes",
        icon: (
            <FontAwesomeIcon
                icon={faCalendarDays}
                size="xl"
                style={{ color: "#00FFA0" }}
            />
        ),
    },
    {
        label: "Cart",
        icon: (
            <FontAwesomeIcon
                icon={faCartShopping}
                size="xl"
                style={{ color: "#00FFA0" }}
            />
        ),
    },
    {
        label: "Profile",
        icon: (
            <FontAwesomeIcon
                icon={faUser}
                size="xl"
                style={{ color: "#00FFA0" }}
            />
        ),
    },
];

export const AdminTabs = [
    {
        label: "Home",
        icon: (
            <FontAwesomeIcon
                icon={faHouse}
                size="xl"
                style={{ color: "#00FFA0" }}
            />
        ),
    },
    {
        label: "Terms",
        icon: (
            <FontAwesomeIcon
                icon={faCalendarPlus}
                size="xl"
                style={{ color: "#00FFA0" }}
            />
        ),
    },
    {
        label: "Classes",
        icon: (
            <FontAwesomeIcon
                icon={faCalendarPlus}
                size="xl"
                style={{ color: "#00FFA0" }}
            />
        ),
    },
    {
        label: "Students",
        icon: (
            <FontAwesomeIcon
                icon={faUsers}
                size="xl"
                style={{ color: "#00FFA0" }}
            />
        ),
    },
    {
        label: "Settings",
        icon: (
            <FontAwesomeIcon
                icon={faGear}
                size="xl"
                style={{ color: "#00FFA0" }}
            />
        ),
    },
];
