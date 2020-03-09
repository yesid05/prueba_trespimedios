"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
var router_1 = require("./router/router");
var servidor = server_1.default.init(3000);
servidor.app.use(router_1.default);
servidor.start();
//# sourceMappingURL=index.js.map