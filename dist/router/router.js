"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Servicio_1 = require("../servicio/Servicio");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send(Servicio_1.default.obtenerDatos());
});
exports.default = router;
//# sourceMappingURL=router.js.map