import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'Jay', description: 'The name of User' })
    readonly name: string;
    @ApiProperty({ example: 1, description: 'The age of the User' })
    readonly age: number;
    @ApiProperty({ example: 'jaymahfudy@gmail.com', description: 'Email address of User' })
    readonly email: string;
    @ApiProperty({ example: 'jaymahfudy', description: 'Username for account identifier' })
    readonly username: string;
    @ApiProperty({ example: 'secret', description: 'Make sure your password is not easy to guess'})
    readonly password: string;
}