import { DataTypes } from "sequelize";
import { sequelize } from '../database/db.js';

const hours48 = Array.from({ length: 48 }, (_, index) => index + 1);

export const activity = sequelize.define(
    'activity',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allownull: false
        },
        dificultad: {
            type: DataTypes.INTEGER,
            allownull: false,
            validate:{
                isIn:{
                    args: [1,2,3,4,5],
                    msg: 'la dificultad debe se de 1 a 5'
                },
            }
        },
        horas: {
            type: DataTypes.INTEGER,
            allownull: false,
            validate:{
                isIn:{
                    args: [hours48],
                    msg: 'las actividades son de 1 a 48 horas'
                }
            }
        },
        temporada: {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                isIn: ['Primavera','Verano','Otoño','Invierno'],
                msg: "La estación debe ser Primavera, Verano, Otoño o Invierno"
            }
        }
    },
    {
        timestamps: false 
    }
);