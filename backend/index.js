const express=require('express');
const chats=require('./data/data.js')

const app=express();
const dotenv=require('dotenv');
const cors=require('cors');

const userRoutes=require('./routes/userRoutes.js');

const connectDB=require('./config/db.js');
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');

dotenv.config();
connectDB();
const PORT=process.env.PORT || 5000;
app.use(cors())
app.use(express.json());

app.get('/' , (req, res)=>{
    res.send("API IS RUNNING ");
})

app.use('/api/user' , userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log("server started on port" , PORT));