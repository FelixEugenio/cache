"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsersControllers_1 = __importDefault(require("./controllers/UsersControllers"));
const userController = new UsersControllers_1.default();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/users', UsersControllers_1.default.find);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
