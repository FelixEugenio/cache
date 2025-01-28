import express from 'express'
import UserController from './controllers/UsersControllers';
import asyncErrorHandler from './error/asyncErrorHandler';

const userController = new UserController();
const app = express();

app.use(express.json());

app.get('/users',  asyncErrorHandler(UserController.find));
app.listen(3000,()=> {
    console.log('Server is running on port 3000')
});