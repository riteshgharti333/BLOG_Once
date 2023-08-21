import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  });

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME </span>
        <img
          src="https://wallpaperaccess.com/full/2362086.png"
          alt=""
        />
        <p className="sidebarDsc">Welcome to my corner of the web! I'm <span className="name">Ritesh Gharti</span>, a passionate MERN stack developer on a mission to craft digital experiences that seamlessly blend technology and creativity.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem" key={c._id}>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-twitter"></i>
          <i className=" sidebarIcon fa-brands fa-linkedin"></i>
          <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
