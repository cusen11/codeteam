const express = require("express");

const app = express();
//connect DB
// connectDB();

//Init Midderware

app.use(express.json({ extended: false }));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`));
