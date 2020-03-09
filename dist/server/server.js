"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Servidor = (function () {
    function Servidor(unPuerto) {
        this.unPuerto = unPuerto;
        this.app = express();
    }
    Servidor.prototype.start = function () {
        this.app.listen(this.unPuerto);
    };
    Servidor.init = function (unP) {
        return new Servidor(unP);
    };
    return Servidor;
}());
exports.default = Servidor;
//# sourceMappingURL=server.js.map