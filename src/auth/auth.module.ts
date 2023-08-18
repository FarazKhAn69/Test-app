import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from 'src/auth/controllers';
import { AuthService } from 'src/auth/services';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constant';
import { NodemailerService } from './services/nodemailer-service';

@Module({
imports: [
    UserModule,
    JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1h' },
      }),

],
controllers: [AuthController],
exports: [AuthService],
providers: [AuthService, NodemailerService],
})
export class AuthModule {}
