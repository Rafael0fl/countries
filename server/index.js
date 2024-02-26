import server from './src/server.js';
import { sequelize } from './src/database/db.js';
import { getCountriesApi } from './src/controllers/CountriesApi.js'; 

const PORT = 3001;


const main = async()=>{

    /* LEVANTO EL SERVIDOR */
    server.listen(PORT,()=>{
        console.log('\x1b[32m%s\x1b[0m',`\n\tServidor levantado en puerto ${PORT}\n`);
    });


    /* CONECTO CON LA BASE DE DATOS */
    try{
        await sequelize.authenticate();//force:true
        await sequelize.sync({force:false});
        console.log('\x1b[32m%s\x1b[0m','\n\tCONEXION EXITOSA A LA DB\n');
    } 
    catch(error){
        console.error('\x1b[31m%s\x1b[0m','\nNo se ha podido conectar al base de datos\n',error);
    }

    /* TRAIGO LOS DATOS DE LA API A LA BASE DE DATOS */
    //getCountriesApi();
};

main();

