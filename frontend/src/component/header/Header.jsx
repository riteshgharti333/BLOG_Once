import "./header.css";
import headerImg from "../../images/35.png";

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <div className="headerDsc">
          <h1 className="headerTitle">
            Discover endless inspiration on our blog. Let our words fuel your creativity and
            curiosity.
          </h1>
          <button className="headerBtn">Write</button>
        </div>
      </div>
      <div className="right">
        <img className="headerImg" src={headerImg} alt="" />
      </div>
    </div>
  );
}
