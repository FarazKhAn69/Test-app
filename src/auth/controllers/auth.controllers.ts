import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/services';
import { UserInterface } from 'src/user/interfaces';
import { AuthAccountActivationDto, AuthLoginDto, AuthRegisterDto ,SendTokenDto } from 'src/auth/dtos';
import { LoginInterface } from 'src/auth/interfaces';
import { ApiTags, ApiOperation, ApiResponse  } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(
    private readonly authService : AuthService
  ){}

  
  @ApiOperation({ summary: 'Register user and send token link' })
  @ApiResponse({ status: 201, description: 'User registered and token link sent' })
  @ApiResponse({ status: 409, description: 'Email Already Exists' })
  @Post('register')
  async register(@Body() userRegisterDto: AuthRegisterDto): Promise<UserInterface> {
    const createdUser = await this.authService.register(userRegisterDto);

    // Call the "send link" API
    // const sendLinkDto: SendTokenDto = { email: createdUser.email };
    await this.authService.sendTokenByEmail(createdUser.email);

    return createdUser;
  }

  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 200, description: 'Returns access token' })
  @Post('login')
  async login(@Body() authLoginDto: AuthLoginDto): Promise<LoginInterface> {
    return this.authService.login(authLoginDto);
  }

    @ApiOperation({ summary: 'Request token to be sent to email' })
    @ApiResponse({ status: 200, description: 'Return link sent sucessfully' })
    @Post('send-link')
    async sendToken(@Body() sendTokenDto: SendTokenDto): Promise<void> {
      await this.authService.sendTokenByEmail(sendTokenDto.email);
    }


  @ApiOperation({ summary: 'Activate user account' })
  @ApiResponse({ status: 200, description: 'Returns true if account has been activated' })
  @Post('account-activation')
  async accountActivation(@Body() authAccountActivationDto: AuthAccountActivationDto): Promise<boolean> {
    return this.authService.accountActivation(authAccountActivationDto);
  }


}
