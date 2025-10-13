import winston from "winston";
import { Sentry, isSentryEnabled } from "../config/sentryConnection";
import { env } from "../utils/env";

// Winston logger for local logs
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      ({ timestamp, level, message, stack }) =>
      `${timestamp} [${level.toUpperCase()}] ${message} ${stack || ""}`
    )
  ),
  transports: [new winston.transports.Console()],
});

// Wrapper functions
const logInfo = (message: string, context?: Record<string, any>) => {
  logger.info(message, context);
};

const logWarn = (message: string, context?: Record<string, any>) => {
  logger.warn(message, context);
  if (isSentryEnabled) {
    // Convert warning to a message with level "warning"
    Sentry.captureMessage(message, "warning");
  }
};

const logError = (error: Error | string, context?: Record<string, any>) => {
  if (typeof error === "string") {
    logger.error(error, context);
    if (isSentryEnabled) {
      Sentry.captureMessage(error, "error");
    }
  } else {
    logger.error(error.message, { stack: error.stack, ...context });
    if (isSentryEnabled) {
      Sentry.captureException(error);
    }
  }
};

export { logInfo, logWarn, logError };