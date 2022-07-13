"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dialog_1 = __importDefault(require("./dialog"));
var file_1 = __importDefault(require("./file"));
var image_protocol_1 = __importDefault(require("./image-protocol"));
function setupIpc() {
    (0, image_protocol_1.default)();
    (0, dialog_1.default)();
    (0, file_1.default)();
}
exports.default = setupIpc;
//# sourceMappingURL=index.js.map