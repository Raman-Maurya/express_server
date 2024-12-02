const express = require("express");

const app = express();  //app = instance of express

// app.use((req,res) => {
//     res.send("Hello World");
// })

//making request handlers
app.use("/profile", (req,res) => {
    res.send("profile page");
})

app.use("/",(req,res)=>{
    res.send("Home page");
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});