import express = require('express');

export default class Servidor{
    
    public app:express.Application;

    constructor(private unPuerto:number){
        this.app = express();
    }

    public start():void{
        this.app.listen(this.unPuerto);
    }

    static init(unP: number):Servidor{
        return new Servidor(unP);
    }

}