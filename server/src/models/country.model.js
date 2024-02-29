import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const country = sequelize.define(
    'country',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
          },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        imagenBandera: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        continente: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        capital: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        poblacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
          }
    },
    {
      timestamps: false 
    }
);
