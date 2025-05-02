export const getWeeklyRange = (today = new Date()) => {
    const startDate = new Date(today);
    const dayOfMonth = startDate.getDate();
    const weekStart = Math.floor((dayOfMonth - 1) / 7) * 7 + 1;
    const weekEnd = weekStart + 6;

    const year = startDate.getFullYear();
    const month = startDate.getMonth();

    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    const days = [];

    for (let i = weekStart; i <= weekEnd; i++) {
        const date = new Date(year, month, i);
        const day = date.toLocaleDateString("en-US", { weekday: "short" }); 
        const dateStr = String(date.getDate()).padStart(2, "0");

        const isToday =
            date.getDate() === todayDate &&
            date.getMonth() === todayMonth &&
            date.getFullYear() === todayYear;

        const dayObj = {
            date: dateStr,
            day,
            ...(isToday ? { active: true } : {}),
        };

        days.push(dayObj);
    }

    return days;
}