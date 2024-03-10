/**
 * Main module of the application
 * Sets the configuration module as a global module
 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigsModule } from './modules/config.module';
import { LoggerModule } from './core/logger/domain/logger.module';
import { ContextModule } from './configs/context/infrastructure/contextStorage.module';

@Module({
    imports: [LoggerModule, ConfigsModule, ContextModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
