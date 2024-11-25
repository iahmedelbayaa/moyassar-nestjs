import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoyassarService } from './moyassar/moyassar.service';
import { MoyassarController } from './moyassar/moyassar.controller';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, MoyassarController],
  providers: [AppService, MoyassarService],
})
export class AppModule {}
