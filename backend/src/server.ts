import App from '../app';
import { Router } from 'express';
import { AppDataSource } from './data-source';
import { Account, Transaction, User } from './database/models';
import { AccountServices, TransactionServices, UserServices } from './services';
import {
  AccountControllers,
  TransactionControllers,
  UserControllers
} from './controllers';
import { AccountRouter, TransactionRouter, UserRouter } from './routers';
import { accountSchema, transactionSchema, userSchema } from './schemas';
import { ErrorMiddleware } from './middlewares';

import 'dotenv/config';
import AuthMiddleware from './middlewares/AuthMiddleware';
import transferSchema from './schemas/TransferSchema';

const app = new App();
const authMiddleware = new AuthMiddleware().verifyToken;

const userServices = new UserServices(AppDataSource, User, userSchema, null, Account);
const userControllers = new UserControllers(userServices);
const userRouter = new UserRouter(Router(), userControllers, authMiddleware);
app.routes('/users', userRouter.router);

const accountServices = new AccountServices(
  AppDataSource,
  Account,
  accountSchema,
  transferSchema,
  User
);
const accountControllers = new AccountControllers(accountServices);
const accountRouter = new AccountRouter(Router(), accountControllers, authMiddleware);
app.routes('/accounts', accountRouter.router);

const transactionServices = new TransactionServices(
  AppDataSource,
  Transaction,
  transactionSchema
);
const transactionControllers = new TransactionControllers(transactionServices);
const transactionRouter = new TransactionRouter(
  Router(),
  transactionControllers,
  authMiddleware
);
app.routes('/transactions', transactionRouter.router);

const errorMiddleware = new ErrorMiddleware().errorMiddleware;
app.useErrorMiddleware(errorMiddleware);

const PORT = Number(process.env.APP_PORT);

app.start(PORT);
