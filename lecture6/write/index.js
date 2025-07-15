const fs=require("fs");

fs.writeFile("../demo.txt","Hello G27",function(err,data){
    if(err) return console.log(err);
    console.log("Success");
});