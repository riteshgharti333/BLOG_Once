import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.pageYOffset !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className={`${isScrolled ? "scrolled" : "top"}`}>
      <div className="logo">
        <Link to="/" className="link">
          <h1 className="title">BLOG</h1>
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className=" topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className=" topListItem">
            <Link className="link" to="/aboutUs">
              ABOUT
            </Link>
          </li>
          <li className=" topListItem">
            <Link className="link" to="/contactus">
              CONTACT
            </Link>
          </li>
          <li className=" topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <Link to="/settings">
              <img className="topImg" src={PF + user.profilepic} alt="" />
            </Link>
            <button className="logoutBtn" onClick={handLogout}>
              {user && "Logout"}
            </button>
          </>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
