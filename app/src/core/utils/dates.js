export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const getDayOfWeek = date => {
  const dayOfWeek = date.getUTCDay();
  return isNaN(dayOfWeek) ? null : DAYS[dayOfWeek];
};

export const getMonthName = date => {
  const month = date.getUTCMonth();
  return isNaN(month) ? null : MONTHS[month];
};

export const getDayTitle = datetime => {
  const date = new Date(datetime);
  return `${getDayOfWeek(date)}, ${getMonthName(date)} ${date.getUTCDate()}`;
};

export const getHourTitle = datetime => {
  const date = getUTCDate(datetime);
  const utcHour = date.getUTCHours().toString().padStart(2, '0');
  const utcMinute = date.getUTCMinutes().toString().padStart(2, '0');
  return `${utcHour}:${utcMinute}`;
};

export const getUTCDate = datetime => {
  const date = new Date(datetime); 
  const now_utc =  Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  return new Date(now_utc);
};
