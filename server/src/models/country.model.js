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
            allowNull: true,
          },
          imagenBandera: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          continente: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          capital: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          poblacion: {
            type: DataTypes.INTEGER,
            allowNull: true,
          }
    },
    {
      timestamps: false 
    }
);