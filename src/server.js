require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/user.routes");

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API Absensi jalan 🚀",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
