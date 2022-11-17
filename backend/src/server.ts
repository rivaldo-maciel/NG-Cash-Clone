import { Router } from 'express';
import App from '../app';
import AccountControllers from './controllers/AccountControllers';
import TransactionControllers from './controllers/TransactionControllers';
import UserControllers from './controllers/UserControllers';
import { AppDataSource } from './data-source';
import Account from './database/models/Account';
import Transaction from './database/models/Transaction';
import User from './database/models/User';
import ErrorMiddleware from './middlewares/ErrorMiddleware';
import AccountRouter from './routers/AccountRouter';
import TransactionRouter from './routers/TransactionRouter';
import UserRouter from './routers/UserRouter';
import accountSchema from './schemas/AccountSchema';
import transactionSchema from './schemas/TransactionSchema';
import userSchema from './schemas/UserSchema';
import AccountServices from './services/AccountServices';
import TransactionServices from './services/TransactionServices';
import UserServices from './services/UserServices';
import 'dotenv/config';

const app = new App();

const userServices = new UserServices(AppDataSource, User, userSchema);
const userControllers = new UserControllers(userServices);
const userRouter = new UserRouter(Router(), userControllers);
app.routes('users', userRouter.router);

const accountServices = new AccountServices(AppDataSource, Account, accountSchema);
const accountControllers = new AccountControllers(accountServices);
const accountRouter = new AccountRouter(Router(), accountControllers);
app.routes('accounts', accountRouter.router);

const transactionServices = new TransactionServices(AppDataSource, Transaction, transactionSchema);
const transactionControllers = new TransactionControllers(transactionServices);
const transactionRouter = new TransactionRouter(Router(), transactionControllers);
app.routes('transactions', transactionRouter.router);

const errorMiddleware = new ErrorMiddleware().errorMiddleware;
app.useErrorMiddleware(errorMiddleware);

const PORT = Number(process.env.APP_PORT);

app.start(PORT);




