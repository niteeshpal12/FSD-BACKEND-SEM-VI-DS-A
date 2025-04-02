const express=require('express');
const app=express();
app.use(express.json() );
let users=[];
app.get('/api/users',(req,res)=>{
    res.json(users);
});
app.get('/users',(req,res)=>{
    res.send('welcome to backend server using express');
});
app.post('/users',(req,res)=>{
    const data=req.body;
    const newid=users.length>0?users[users.lenght-1].id+1:1;
    data.id=newid;
    users.push(data);
    res.status(200).json({message:'data received',data:data});
})
app.listen(9000,()=>{
    console.log('server is running  at http://localhost:9000/users');   
})