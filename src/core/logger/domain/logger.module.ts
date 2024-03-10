import { Global, Inject, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import Logger, { LoggerBaseKey, LoggerKey } from './logger';
import WinstonLogger, { WinstonLoggerTransportsKey } from '../infrastructure/winston/winstonLogger';
import LoggerService from './logger.service';
import NestjsLoggerServiceAdapter from './logger.adapter';
import { ConfigService } from 'src/configs/service/config.service';
import * as morgan from 'morgan';
import ConsoleTransport from '../infrastructure/winston/consoleTransport';

@Global()
@Module({
    imports: [],
    controllers: [],
    providers: [
        {
            provide: LoggerBaseKey,
            useClass: WinstonLogger,
        },
        {
            provide: LoggerKey,
            useClass: LoggerService,
        },
        {
            provide: NestjsLoggerServiceAdapter,
            useFactory: (logger: Logger) => new NestjsLoggerServiceAdapter(logger),
            inject: [LoggerKey],
        },

        {
            provide: WinstonLoggerTransportsKey,
            useFactory: (configService: ConfigService) => {
                const transports = [];

                transports.push(ConsoleTransport.createColorize());

                // transports.push(FileTransport.create());

                // if (configService.isProduction) {
                //     if (configService.slackWebhookUrl) {
                //         transports.push(SlackTransport.create(configService.slackWebhookUrl));
                //     }
                // }

                return transports;
            },
            inject: [ConfigService],
        },
    ],
    exports: [LoggerKey, NestjsLoggerServiceAdapter],
})
export class LoggerModule implements NestModule {
    public constructor(
        @Inject(LoggerKey) private logger: Logger,
        private configService: ConfigService,
    ) {}

    public configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(
                morgan(this.configService.isProduction ? 'combined' : 'dev', {
                    stream: {
                        write: (message: string) => {
                            this.logger.debug(message, {
                                sourceClass: 'RequestLogger',
                            });
                        },
                    },
                }),
            )
            .forRoutes('*');
    }
}
