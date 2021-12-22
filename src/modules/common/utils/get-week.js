export function getWeek(d) {
    d = new Date(d);
    const day = d.getDay();
    const monday = d.getDate() - day + (day == 0 ? -6:1);
    const sunday = d.getDate() - day + (day == 0 ? 1:7);
    return {
        monday: new Date(d.setDate(monday)),
        sunday: new Date(d.setDate(sunday))
    }
}