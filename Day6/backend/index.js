import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
});
import connectdb from './db/connectDb.js'
import express from 'express'
import cors from 'cors'
import { registerUser } from './controlus/user.controller.js';

const app=express();
console.log("port: ",process.env.PORT)
const PORT=process.env.PORT||5000;
const corsoptions={
    origin:'https://localhost:3000',
};
app.use(cors(corsoptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
    res.json({message:'welcome to backend'});
});
app.post('/register',registerUser)
connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on http://localhost:${PORT}`);
    })
})

