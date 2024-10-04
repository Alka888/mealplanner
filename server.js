const express = require('express');
const app = express();
const routes = require('./MealRoutes');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 6600 || process.env.port;
app.use(express.json());
app.use(cors());


mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('We were connected to Mongo'))
.catch((err) => console.log(err))


app.use(routes);
app.listen(PORT,  () => {
    console.log(`I am listening port ${PORT}`);
})


//SZATcG6L5vvRvwNa
//tzhabon

//mongodb+srv://tzhabon:<db_password>@cluster0.omi1k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0