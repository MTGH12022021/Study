/**
 * ConfigModule is a global module that imports the ConfigModule from the @nestjs/config package.
 */

import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import appConfig from 'src/configs/app.config';
import { ConfigService } from 'src/configs/service/config.service';

@Global()
@Module({
    imports: [
        NestConfigModule.forRoot({
            envFilePath: ['.env'],
            isGlobal: true,
            load: [appConfig],
        }),
    ],
    controllers: [],
    providers: [ConfigService],
    exports: [ConfigService],
})
export class ConfigsModule {}
