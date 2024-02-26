import express from 'express';

const saludo = express.Router();

saludo.get('/',(req,res)=>{
    res.status(200).send('Bienvenido al servidor del PI countries');
});

export default saludo;