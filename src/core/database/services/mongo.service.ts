import { Inject, Injectable } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';
import Logger, { LoggerKey } from 'src/core/logger/interfaces/logger.interface';

@Injectable()
export class MongoService {
    private uri: string;
    private database: string;
    private user: string;
    private pass: string;

    constructor(
        private configService: ConfigService<ConfigModule>,
        @Inject(LoggerKey) private logger: Logger,
    ) {
        this.uri = configService.get<string>('mongoUri');
        this.database = configService.get<string>('mongoDb');
        this.user = configService.get<string>('mongoUser');
        this.pass = configService.get<string>('mongoPass');
    }

    public async connect(): Promise<typeof mongoose> {
        try {
            const mongoUrl: string = this.uri + '/' + this.database;
            const connect = await mongoose.connect(mongoUrl, {
                authSource: 'admin',
                user: this.user,
                pass: this.pass,
                useNewUrlParser: true,
            } as mongoose.ConnectOptions);

            this.logger.info('MongoDB connected: ' + mongoUrl);
            return connect;
        } catch (error) {
            throw new Error(error);
        }
    }
}
