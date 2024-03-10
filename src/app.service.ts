import { Inject, Injectable } from '@nestjs/common';
import Logger, { LoggerKey } from './core/logger/domain/logger';

@Injectable()
export class AppService {
    constructor(@Inject(LoggerKey) private logger: Logger) {}

    getHello(): string {
        this.logger.startProfile('getHello');
        console.log('====> Debug <====');
        this.logger.info(
            'I am a debug message!',
            {
                props: {
                    foo: 'bar',
                    baz: 'qux',
                },
            },
            'getHello',
        );
        return 'Hello World!';
    }
}
