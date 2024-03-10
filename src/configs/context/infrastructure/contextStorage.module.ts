import { Global, Module } from '@nestjs/common';
import { ClsModule } from 'nestjs-cls';
import { ContextStorageServiceKey } from '../domain/interfaces/contextStorage.service';
import NestjsClsContextStorageService from './contextStorage.service';
import { v4 } from 'uuid';

@Global()
@Module({
    imports: [
        ClsModule.forRoot({
            global: true,
            middleware: {
                mount: true,
                generateId: true,
                idGenerator: (req: Request) => req.headers['x-correlation-id'] ?? v4(),
            },
        }),
    ],
    controllers: [],
    providers: [
        {
            provide: ContextStorageServiceKey,
            useClass: NestjsClsContextStorageService,
        },
    ],
    exports: [ContextStorageServiceKey],
})
export class ContextModule {}
