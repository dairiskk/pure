import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [UserModule, NoteModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
