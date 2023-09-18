import "./header.css";
// import headerImg from "../../images/35.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <div className="headerDsc">
          <h1 className="headerTitle">
            Discover endless inspiration on our blog. Let our words fuel your creativity and
            curiosity.
          </h1>
          <Link to="/write">
          <button className="headerBtn">Write <i class="fa-solid fa-pen"></i></button>
          </Link>
        
        </div>
      </div>
      <div className="right">
        {/* <img className="headerImg" src={headerImg} alt="" /> */}
      </div>
    </div>
  );
}
