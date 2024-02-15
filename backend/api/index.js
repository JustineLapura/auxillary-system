require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const facilityRoutes = require("./routes/facilities");
const studentRoutes = require("./routes/student");
const dormManagementRoutes = require("./routes/dormManagement");
const dormListRoutes = require("./routes/dormList");
const bookingRoutes = require("./routes/bookings");
const inquiryRoutes = require("./routes/inquiries");

const app = express();

// Allow requests only from your frontend domain
// const corsOptions = {
//   origin: ["http://localhost:5173", "https://auxillary-services-sysyem.vercel.app"],
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 204,
// };
// app.use(cors(corsOptions));

app.use(cors());

// MIDDLEWARE
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/facility", facilityRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/dormManagement", dormManagementRoutes);
app.use("/api/dormList", dormListRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/inquiry", inquiryRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "api/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json({ mssg: "File has been uploaded" });
});

module.exports = app;
