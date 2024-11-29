const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const DB=require('./db/db')
const userRoutes=require('./routes/userRoutes')
const productRoutes=require('./routes/productRoute')

dotenv.config();

const app = express();

// Middleware
const corsOptions = {
  origin: "http://localhost:3000", // Allow your frontend origin
  methods: ["GET", "POST"], // Allow methods as needed
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use("/user",userRoutes)
app.use("/product",productRoutes)


DB()

// Start the server
const PORT =  7000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
