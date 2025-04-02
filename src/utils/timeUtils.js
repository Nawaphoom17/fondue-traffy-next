export function convertMinutesToDayHourMinute(minutes) {
    const days = Math.floor(minutes / 1440); // 1 วัน = 1440 นาที
    const leftoverMinutes = minutes % 1440;
    const hours = Math.floor(leftoverMinutes / 60);
    const mins = leftoverMinutes % 60;
  
    return { days, hours, mins };
  }