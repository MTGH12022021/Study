import { LogLevel } from 'src/shared/enums/logger.enum';
import * as winston from 'winston';

enum LogColors {
    red = '\x1b[31m',
    green = '\x1b[32m',
    yellow = '\x1b[33m',
    blue = '\x1b[34m',
    magenta = '\x1b[35m',
    cyan = '\x1b[36m',
    pink = '\x1b[38;5;206m',
}

export default class ConsoleTransport {
    public static createColorize() {
        return new winston.transports.Console({
            format: winston.format.combine(
                winston.format.printf(log => {
                    const color = this.mapLogLevelColor(log.level as LogLevel);
                    const prefix = `${log.data.label ? `[${log.data.label}]` : ''}`;
                    return `${this.colorize(color, prefix + '  -')} ${log.timestamp}    ${
                        log.data.correlationId
                            ? `(${this.colorize(LogColors.cyan, log.data.correlationId)})`
                            : ''
                    } ${this.colorize(color, log.level.toUpperCase())} ${
                        log.data.sourceClass
                            ? `${this.colorize(LogColors.cyan, `[${log.data.sourceClass}]`)}`
                            : ''
                    } ${this.colorize(
                        color,
                        log.message + ' - ' + (log.data.error ? log.data.error : ''),
                    )}${
                        log.data.durationMs !== undefined
                            ? this.colorize(color, ' +' + log.data.durationMs + 'ms')
                            : ''
                    }${log.data.stack ? this.colorize(color, `  - ${log.data.stack}`) : ''}${
                        log.data.props
                            ? `\n  - Props: ${JSON.stringify(log.data.props, null, 4)}`
                            : ''
                    }`;
                }),
            ),
        });
    }

    private static colorize(color: LogColors, message: string): string {
        return `${color}${message}\x1b[0m`;
    }

    private static mapLogLevelColor(level: LogLevel): LogColors {
        switch (level) {
            case LogLevel.DEBUG:
                return LogColors.blue;
            case LogLevel.INFO:
                return LogColors.green;
            case LogLevel.WARN:
                return LogColors.yellow;
            case LogLevel.ERROR:
                return LogColors.red;
            case LogLevel.FATAL:
                return LogColors.magenta;
            case LogLevel.EMERGENCY:
                return LogColors.pink;
            default:
                return LogColors.cyan;
        }
    }
}
