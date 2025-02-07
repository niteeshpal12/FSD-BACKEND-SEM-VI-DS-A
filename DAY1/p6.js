const fs= require('fs')
const data="i am appended to last";
fs.appendFile('./data.txt',data,(err)=>{

    if (err) throw err;
    console.log('Data append to file!');

});