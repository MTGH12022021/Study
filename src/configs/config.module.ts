/**
 * ConfigModule is a global module that imports the ConfigModule from the @nestjs/config package.
 */

import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import appConfig from 'src/configs/app/app.config';
import mongoConfig from './database/mongo/mongo.config';
import { ServiceConfig } from 'src/configs/service/service.config';

@Global()
@Module({
    imports: [
        NestConfigModule.forRoot({
            envFilePath: ['.env'],
            isGlobal: true,
            load: [appConfig, mongoConfig],
        }),
    ],
    controllers: [],
    providers: [ServiceConfig],
    exports: [ServiceConfig],
})
export class ConfigsModule {}
