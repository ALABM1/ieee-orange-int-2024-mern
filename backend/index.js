const express = require("express");
const mongoose = require("mongoose");
const user = require("./models/user.model.js");
const userRoute = require("./routes/user.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/users", userRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    'mongodb://localhost:27017/ieee-orange-int-2024-mern',
     {
        useNewUrlParser:true,
    }
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

  // Define routes here...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));