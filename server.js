const express = require("express");
const connectDB = require('./config/db');
const app = express();
//connect DB
connectDB();

//Init Midderware
app.use(express.json({ extended: false })); 

//Define Route 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth')); 
app.use('/api/posts', require('./routes/api/posts')); 
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`));
