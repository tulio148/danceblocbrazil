export function formatDatetime(datetime) {
    const date = new Date(datetime);
    const formattedDate = date.toLocaleDateString("en-AU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "UTC",
    });
    const formattedDateTime = `${formattedDate} at ${formattedTime}`;
    return formattedDateTime;
}

export function formatDate(datetime) {
    const date = new Date(datetime);

    const day = date.getUTCDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getUTCFullYear().toString().slice(-2);

    return `${day} ${month} ${year}`;
}
