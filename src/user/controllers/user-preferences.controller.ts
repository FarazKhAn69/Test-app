import { Body, Controller, Post, UseGuards, Req, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { UserPreferenceInterface } from 'src/user/interfaces';
import { UserPreferenceService } from 'src/user/services';
import { UserPreferenceCreateDto } from 'src/user/dtos';
import { AuthGuard } from 'src/auth/guards';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('User')
@ApiBearerAuth()
@Controller()
export class UserPreferenceController {
  constructor(
    private readonly userPrefService: UserPreferenceService
  ) {}

  @ApiOperation({ summary: 'Create user preference' })
  @ApiResponse({ status: 200, description: 'Returns created user preference' })
  @UseGuards(AuthGuard)
  @Post('create-user-preference')
  async createUserPreference(
    @Body() preference: UserPreferenceCreateDto,
    @Req() request: any, 
  ): Promise<UserPreferenceInterface> {
    const authenticatedUserId = request.user.sub;
    if (authenticatedUserId !== preference.userId) {
      throw new ForbiddenException('You are not authorized to create a preference for this user.');
    }
    return this.userPrefService.createUserPreference(preference);
  }
}
