import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { CreateUserDto } from './dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('ezlearn')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    public async getUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Post()
    @ApiOperation({ summary: 'Create user' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    public async ceateUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }

/*     @Post()
    @ApiOperation({ summary: 'Used for login process'})
    public async loginUser(){
        
    } */
}
