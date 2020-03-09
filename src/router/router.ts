import { Router,Request,Response } from "express";
import Servicio from "../servicio/Servicio";

const router = Router();

router.get('/',(req:Request,res:Response)=>{
    res.send(Servicio.obtenerDatos());
    
});

export default router;