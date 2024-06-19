import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { LibraryModule } from './library/library.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TaskModule, ProjectsModule, UsersModule, LibraryModule, PaymentsModule],
  controllers: [HelloController],

})
export class AppModule {}
