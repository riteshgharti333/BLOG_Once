import "./contactUs.css";
import contactImg from "../../assets/images/contact.png"


const ContactUs = () => {
  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="left">
          <div className="contactImg">
            <img className="contact-Img"
              src={contactImg}
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <h1 className="contactTitle">CONTACT US</h1>
          <form>
            <div className="inputForm">
              <input className="inputType" type="text" placeholder="NAME" />
            </div>

            <div className="inputForm">
              <input className="inputType" type="text" placeholder="EMAIL" />
            </div>

            <div className="inputForm">
              <input className="inputType" type="text" placeholder="MESSAGE" />
            </div>
            <button className="submitBtn">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
