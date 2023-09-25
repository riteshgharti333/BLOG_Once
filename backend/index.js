const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const cors = require('cors');
dotenv.config();

const PORT = 5000;

app.use(express.json());
// app.use(cors());

app.use(cors(
  {
  origin: ["https://blog-once-api.vercel.app/"],
  methods: ["POST", "GET"],
  credentials: true
  }
  ));

app.use("/images", express.static(path.join(__dirname, "/images")));


mongoose
.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been Uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.get("/" , (req,res) => {
  res.json("Hello");
})

app.listen(PORT, () => {
  console.log("Backend is runnning");
});
