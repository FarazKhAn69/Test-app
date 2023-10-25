import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user';
import { AuthModule } from 'src/auth';
import { TestModeModule } from './test-mode/test-mode.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'onesayuser',
      password: 'Roq@12345',
      database: 'onesaydb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    TestModeModule
  ],
})
export class AppModule {}
