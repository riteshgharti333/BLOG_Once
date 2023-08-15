import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="logo">
        <Link to="/" className="link">
          <h1 className="title">BLOG</h1>
          <span className="desc">One</span>
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
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className=" topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className=" topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className=" topListItem" onClick={handLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilepic} alt="" />
          </Link>
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

        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
