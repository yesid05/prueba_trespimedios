//import { XMLHttpRequest } from 'xmlhttprequest-ts';

export default class Servicio{

    static obtenerDatos():void{

            var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
            var xhr = new XMLHttpRequest();
            
            xhr.open("GET","/bd/bd.json",true);
            
            xhr.onreadystatechange = function () {
                
                if(xhr.readyState == 4){
                    console.log(xhr.statusText);
                    if(xhr.status == 200){
                        
                    }else{
                        
                    }
                }else{

                }
            }
            
            xhr.send();
    
    }
    
}