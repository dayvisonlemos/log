import logger from './src/logger';

process.on('uncaughtException', (error: Error) => {
  logger.error(error);
});

export default logger;
