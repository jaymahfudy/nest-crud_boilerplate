import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { CreateUserDto } from './dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiBearerAuth()
// @ApiTags('ezlearn')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async getUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @ApiOperation({ summary: 'Create user' })
    @UseGuards(AuthGuard('jwt'))
    @Post()
    public async ceateUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }

}
