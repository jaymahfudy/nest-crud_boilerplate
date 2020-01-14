import {
    Table,
    Column,
    Model
} from 'sequelize-typescript';
// import { ApiProperty } from '@nestjs/swagger';


@Table
export class User extends Model<User>{

    // @ApiProperty({ example: 'Jay', description: 'The name of User' })
    @Column
    name: string;

    // @ApiProperty({ example: 1, description: 'The age of the User' })
    @Column
    age: number;

    // @ApiProperty({ example: 'jaymahfudy@gmail.com', description: 'Email address of User'})
    @Column
    email: string;

}