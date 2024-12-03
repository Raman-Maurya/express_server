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

app.get("/profile",(req,res)=>{
    res.send({name:"raman",age:19});
});
app.post("/profile",(req,res)=>{
    res.send("database updated");
});
app.delete("/user",(req,res)=>{
    res.send("database deleted");
});


