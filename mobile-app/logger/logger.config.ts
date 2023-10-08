import { logger as log, consoleTransport } from "react-native-logs";

const defaultConfig = {
  severity: "debug",
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
    },
  },
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  async: true,
  dateFormat: "time",
  printLevel: true,
  printDate: true,
  enabled: true,
};
const logger = log.createLogger(defaultConfig);

export class Logger {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  info(message: string) {
    logger.info(`[${this.fileName}] ${message}`);
  }

  warn(message: string) {
    logger.warn(`[${this.fileName}] ${message}`);
  }

  error(message: string) {
    logger.error(`[${this.fileName}] ${message}`);
  }
}
