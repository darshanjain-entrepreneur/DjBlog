const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDb = require('./config/db');


const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')
dotenv.config();


connectDb()

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/user' ,userRoutes);
app.use('/api/v1/blog', blogRoutes);

const PORT = process.env.PORT || 8080
const DEV_MODE = process.env.DEV_MODE

app.listen(PORT , ()=>{
    console.log(`listening on ${DEV_MODE} mode on  port ${PORT}`.bgCyan.white);
})