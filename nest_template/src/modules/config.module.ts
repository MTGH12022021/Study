import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import appConfig from 'src/configs/app.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env'],
            isGlobal: true,
            load: [appConfig],
        }),
    ],
})
export class ConfigsModule {}
