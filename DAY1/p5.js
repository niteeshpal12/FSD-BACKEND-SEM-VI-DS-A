const fs=require('fs')
const data="I am i assync write";
fs.writeFile("./data.txt",data,()=>{
    if(err)
        console.error("Error writing file",err);
    else
        console.log("File Written successfully");


})