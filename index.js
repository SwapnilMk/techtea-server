const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require('../backend/config/dbconnection.js')
const authRoute = require("../backend/routes/authRoute.js");
const usersRoute = require("../backend/routes/usersRoute.js");
const postsRoute = require("../backend/routes/postsRoute.js");
const categoryRoute = require("../backend/routes/categoryRoute.js");

const userRoute = require("../backend/routes/userData.js");

const path = require("path");
const cors = require("cors");

//rest obj:
const app = express();

//middlewares:
app.use(express.json({ limit: "8mb" }));
app.use(express.urlencoded({ limit: "8mb", extended: true }));
app.use(cors());

//config env file:
dotenv.config();

//MongoDB connect:
 connectDB();

//routes:
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoryRoute);
app.use("/userData", userRoute);

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// //static file:
// app.use(express.static(path.join(__dirname, "../frontend/build")));
// // serve index.html
// app.get("*", (req, res) => {
//   res.sendFile(
//     path.resolve(__dirname, "frontend", "build", "index.html"),
//     (err) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send("Error: Unable to serve index.html");
//       }
//     }
//   );
// });

//PORT:
const PORT = process.env.PORT || 3000;

//listen:
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
