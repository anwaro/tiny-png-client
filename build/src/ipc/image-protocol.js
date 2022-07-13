"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var electron_1 = require("electron");
var types_1 = require("./types");
function setupImageProtocol() {
    electron_1.protocol.registerFileProtocol(types_1.IcpProtocol.Atom, function (request, callback) {
        return callback(decodeURI((0, path_1.normalize)(request.url.substr(7))));
    });
}
exports.default = setupImageProtocol;
//# sourceMappingURL=image-protocol.js.map