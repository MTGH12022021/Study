import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ConfigsModule } from './modules/config.module';
import NestjsLoggerServiceAdapter from './core/logger/domain/logger.adapter';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
        bufferLogs: true,
    });

    app.useLogger(app.get(NestjsLoggerServiceAdapter));

    //Get the value from the environment variables
    const configService = app.get(ConfigService<ConfigsModule>);
    const port = configService.get<number>('port');

    // Listen on the port
    await app.listen(port, async () => {
        const url = await app.getUrl();

        console.log(`Server running on ${url}`);
    });
}

bootstrap();
