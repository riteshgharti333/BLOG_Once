import "./settings.css";
import Sidebar from "../../component/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import uploadToCloudinary from "../../upload";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user , dispatch } = useContext(Context);
  console.log(user)


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "UPDATE_START"})

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      try {
        const cloudinaryResponse = await uploadToCloudinary(file);

        // Set the Cloudinary URL in your newPost object
        updatedUser.photo = cloudinaryResponse.secure_url;
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
    try {
     const res =  await axios.put(`${process.env.REACT_APP_API_URL}users/` + user._id, updatedUser);
      setSuccess(true);
    dispatch({type: "UPDATE_SUCCESS" , payload: res.data})

    } catch (err) {
    dispatch({type: "UPDATE_FAILURE"})
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          {/* <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : user.profilepic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className=" settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div> */}
          <div className="username"><h1>{user.username}
            </h1></div>
          <label>UserName</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has Been Updated..
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
