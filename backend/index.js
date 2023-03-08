const express=require('express');
const chats=require('./data/data.js')
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');

const connectDB=require('./config/db.js');

dotenv.config();
connectDB();
const PORT=process.env.PORT || 5000;
app.use(cors());

app.get('/' , (req, res)=>{
    res.send("API IS RUNNING ");
})

app.get('/api/chat' , (req , res)=>{
    res.send(chats);
});

app.get('/api/chat/:id' , (req, res)=>{
    console.log(req.params.id);
    const singleChat= chats.find((c)=> c._id ===req.params.id);
    res.send(singleChat);
})

app.listen(PORT, console.log("server started on port" , PORT));