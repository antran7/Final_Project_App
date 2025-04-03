// Chuyển đổi ngày giờ
export const formatDateToUTC7 = (date?: Date | string | null): string => {
    if (!date) return "N/A";
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
    });
};

export const formatDateWithRelative = (isoString?: string) => {
    if (!isoString) return "N/A";

    const date = new Date(isoString);
    const today = new Date();
    const yesterday = new Date();
    if (date.toDateString() === today.toDateString()) {
        return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
        return "Yesterday";
    }

    const formattedDate = new Date(isoString).toLocaleDateString("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return formattedDate;
};