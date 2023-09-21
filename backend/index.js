const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const path = require("path");
dotenv.config();
const cloudinary = require('cloudinary').v2;

app.use(express.json());
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
  
  cloudinary.config({ 
    cloud_name: 'ddmucrojh', 
    api_key: '259723169395997', 
    api_secret: 'U840rM5b3aQoHYZG4UCjJQzuGUE' 
  });

  async function uploadSampleImage() {
    try {
      const result = await cloudinary.uploader.upload("sample.jpg");
      console.log(result);
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  }
  uploadSampleImage();

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(5000, () => {
  console.log("Backend is runnning");
});
