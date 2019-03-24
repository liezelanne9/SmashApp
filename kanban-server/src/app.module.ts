import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavBarComponent } from './nav/navbar.component';

@Module({
  imports: [],
  components: [
    NavBarComponent,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
