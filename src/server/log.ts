import pino from "pino";

const logger = pino({
  level: "debug",
  prettyPrint: { colorize: true },
});

export default logger;
