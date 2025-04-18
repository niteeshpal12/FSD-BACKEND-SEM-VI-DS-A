const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express();
app.use(express.json());
app.use(cors())
dotenv.config()


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error in connection:", error);
  });

  const BookSchema=new mongoose .Schema({
    title:String,
    author:String,
    data:String,
    image:String
  })
  const Book=mongoose.model('MY BOOK',BookSchema)
  app.post('/books',async(req,res)=>{
    try{
        const newbook=new Book(req,body);
        await newbook.save();
        res.json(newbook)
        res.status(200).send('Book added')
    }catch(error){
        res.status(500).send('server Error')
    }
  })
app.listen(9000,()=>{
    console.log(`server is running on port 9000`)
})