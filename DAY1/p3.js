const fs=require('fs')
const data="I am new data file";
fs.writeFileSync("data.txt",data);