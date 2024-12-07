import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserControler } from './controller/UserControler';
import { UserService } from './services/UserService';


@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, UserControler],
  providers: [AppService, UserService],
})
export class AppModule {}
