/**
 * Defines the log levels, which are used to determine the severity of the log message.
 */

export enum LogLevel {
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error',
    DEBUG = 'debug',
    FATAL = 'fatal', // A person must take an action immediately
    EMERGENCY = 'emergency', // One or more systems are unusable.
}

export interface Log {
    timestamp: number; // Unix timestamp
    level: LogLevel; // Log level
    message: string; // Log message
    data: LogData; // Log data
}

export interface LogData {
    organization?: string; // Organization or project name
    context?: string; // Bounded Context name
    app?: string; // Application or Microservice name
    sourceClass?: string; // Classname of the source
    correlationId?: string; // Correlation ID
    error?: Error; // Error object
    props?: NodeJS.Dict<any>; // Additional custom properties
}
