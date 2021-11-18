import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { DatabaseModule } from 'src/config/database.module';
import { subjectProvider } from './subjects.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [SubjectsController],
  providers: [...subjectProvider, SubjectsService],
})
export class SubjectsModule {}