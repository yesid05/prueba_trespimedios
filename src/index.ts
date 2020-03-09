import Servidor from "./server/server";
import router from './router/router';

const servidor = Servidor.init(3000);

//Rutas
servidor.app.use(router);

servidor.start();
