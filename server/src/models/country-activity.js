import { DataTypes } from 'sequelize';
import {sequelize} from '../database/db.js';
import { country } from './country.model.js';
import { activity } from './activity.model.js';

const CountryActivity = sequelize.define(
    'CountryActivity',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        timestamps: false
    }
);

country.belongsToMany(activity, { through: CountryActivity });
activity.belongsToMany(country, { through: CountryActivity });

export default CountryActivity;