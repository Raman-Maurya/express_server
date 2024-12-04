const express = require("express");
const app = express();

// app.use((req,res)=>{
//     res.send("hello raman");
// })
// app.use("/", (req,res)=>{
//     res.send("hello raman");
// })
// app.use("/profile",(req,res)=>{
//     res.send({name:"raman",age:23});
// })
// app.use("/profile/123",(req,res)=>{
//     res.send("hello r");
// })
 port = 8000;
app.listen(port,()=>{
    console.log(`server is running on port ${port} `);
})

app.get("/profile/:userid/:name",(req,res)=>{
    res.send({name:"raman",age:19});
    console.log(req.params.userid);
    console.log(req.params.name);
});
app.post("/profile/:userid",(req,res)=>{
    res.send({firstName:"Raman", lastname: "Maurya"});
    // console.log(req.params(userid));
});
app.delete("/user",(req,res)=>{
    res.send("database deleted");
});


