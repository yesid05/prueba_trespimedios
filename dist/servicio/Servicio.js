"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servicio = (function () {
    function Servicio() {
    }
    Servicio.obtenerDatos = function () {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/bd/bd.json", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                console.log(xhr.statusText);
                if (xhr.status == 200) {
                }
                else {
                }
            }
            else {
            }
        };
        xhr.send();
    };
    return Servicio;
}());
exports.default = Servicio;
//# sourceMappingURL=Servicio.js.map