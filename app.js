import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import {userRouter} from './router'

const app = express();

const handleHome=(req,res)=>{
    res.send("Hi from Home");
}

const handleProfile=(req,res)=>{
    res.send("You are on my profile");
}

app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/",handleHome);
app.get("/profile",handleProfile);

app.use("/user",userRouter);

export default app;