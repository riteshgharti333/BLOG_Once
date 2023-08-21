import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="left">
          <div className="contactImg">
            <img className="contact-Img"
              src="https://freepngimg.com/download/artwork/90606-wiki-boy-behavior-nobi-doraemon-human-nobita.png"
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
