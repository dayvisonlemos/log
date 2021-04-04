import winston from 'winston';
import 'winston-daily-rotate-file';
import { formatToTimeZone } from 'date-fns-timezone';

const timeZone = process.env.timezone || 'GMT';

const format = winston.format.printf(({ level, message, timestamp }) => {
  const localDate = formatToTimeZone(timestamp, 'MMM DD, YYYY @ HH:mm:ss', {
    timeZone,
  });
  return `[${localDate}]-[${level.toLowerCase()}]: ${message}`;
});

const transports = [];

transports.push(
  new winston.transports.Console({
    format,
  }),
);

export default winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), format),
  transports,
});
