import Sequelize from 'sequelize';


export const sequelize = new Sequelize(
    'countries',
    'postgres',
    'anzu240996',
    {
    host: 'localhost',
    dialect: 'postgres',
    }
);

