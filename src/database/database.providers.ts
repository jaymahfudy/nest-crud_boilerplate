import { Sequelize } from "sequelize-typescript";
import { User } from "../user/user.entity";


export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'db',
                port: 5432,
                username: 'ezlearn',
                password: 'fer32fsdd3',
                database: 'ezlearn'
            });
            /**
             * Add Models Here
             * ===============
             * You can add the models to
             * Sequelize later on.
             */
            sequelize.addModels([User]);
            await sequelize.sync({logging: true, alter: true});
            return sequelize;
        },
    }
];