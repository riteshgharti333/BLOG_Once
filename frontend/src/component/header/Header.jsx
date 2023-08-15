import "./header.css"
import headerImg from "../../images/write.jpg"

export default function Header() {
  return (
    <div className="header">
      <div className="headerImg">
        <img className="headerImage" src={headerImg} alt="" />
      </div>
    </div>
  )
}