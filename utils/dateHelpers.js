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
            month: month + 1,
            ...(isToday ? { active: true } : {}),
        };

        days.push(dayObj);
    }

    return days;
}

export const getDateTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
    const today = date.toISOString().split('T')[0];
    return {time, today}
}

export const formatToDayMonth = dateStr => {
    const date = new Date(dateStr);
    const options = { day: '2-digit', month: 'short' };
    return date.toLocaleDateString('en-GB', options);
}

export const formatTime = timeStr => {
    const time = timeStr?.slice(0, 5)
    return time;
}


export const formattedDates = (data) => { 
    let result = []
    data.map(item => {
        const year = new Date().getFullYear();
        const month = String(item.month).padStart(2, '0');
        const day = String(item.date).padStart(2, '0');
        result.push(`${year}-${month}-${day}`);}
    )
    return result
};