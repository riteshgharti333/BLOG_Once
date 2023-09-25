import { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import "./burgerMenu.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";


const BurgerMenu = () => {
  const { user, dispatch } = useContext(Context);

  const handLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      <Menu width={"280px"} right isOpen={ false }>
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
        {user ? (
          <>
            {/* <Link to="/settings" className="link">
              <h1 className="username">{user.username}</h1>
            </Link> */}
            <li onClick={handLogout}>
              {user && "Logout"}
            </li>
          </>
        ) : (
          <>
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
            </>
        )}
      </ul>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
