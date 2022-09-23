
const express= require('express');
const dotenv= require('dotenv').config();
const userRouter=require('./routes/user')

// init environment variable
const PORT= process.env.PORT || 8080;

// express init
const app = express();

//express middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// api route

app.use('/api/v1/user', userRouter);

//lieten port
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})