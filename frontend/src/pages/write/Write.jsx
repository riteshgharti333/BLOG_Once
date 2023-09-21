import React, { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import uploadToCloudinary from "../../upload"; 

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      try {
        // Upload the file to Cloudinary and get the secure URL
        const cloudinaryResponse = await uploadToCloudinary(file);

        // Set the Cloudinary URL in your newPost object
        newPost.photo = cloudinaryResponse.secure_url;
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }

    try {
      // Now, you can send your post data (including the image URL) to your server or API
      const res = await axios.post(`${process.env.REACT_APP_API_URL}posts`, newPost);
      window.location.replace(`/post/` + res.data._id);
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
