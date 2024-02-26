import express from 'express';

const activity = express.Router();

activity.get('/',()=>console.log('hola'));
activity.post('/',()=>console.log('hola') );

export  default activity;