const express = require('express');
const fs=require('fs');



const datafile='data.json';
const readUsers=()=>{
    if(!fs.existsSync(datafile)){
        fs.writeFileSync(datafile, '[]');

    }
    const data=fs.readFileSync(datafile);
    return JSON.parse(data);

}
const writeUsers=(users)=>{
    fs.writeFileSync(datafile, JSON.stringify(users,null,2));

};
const app=express();
const port=3000;
app.use(express.json());
app.get('/api/users',(req,res)=>{
    res.json(readUsers());
});
app.post('/api/users',(req,res)=>{
    const users=readUsers();
    const name=req.body;
    const newUser={
        "id":users.length>0?users[users.length-1].id+1:1,
        ...name
    }
    users.push(newUser);
    writeUsers(users);
    res.status(201).json(newUser);
})

app.delete('/api/users/:id',(req,res)=>{
    const users=readUsers();
    const id=parseInt(req.params.id);
    const index=users.findIndex(user=>user.id===id);
    if(index===-1){
        return res.status(404).json({message:'User not found'});
    }
    users.splice(index,1);
    writeUsers(users);
    res.status(200).json({message:'User deleted'});
});


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
 });
