const express = require("express");
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
//connect DB
connectDB();

//Init Midderware
app.use(express.json()); 
app.use(cors());

//Define Route 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth')); 
app.use('/api/posts', require('./routes/api/posts')); 

if(process.env.NODE_ENV === 'production'){
    // set statuc folder
    app.use(express.static('client/build'))
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`));
