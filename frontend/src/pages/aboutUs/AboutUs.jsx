import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="left">
          <img
            className="intoImg"
            src="https://wallpaperaccess.com/full/2362086.png"
            alt=""
          />
          <div className="follow">
            <span className="followUs">Follow Us</span> <br />
            <button className="followUsBtn github">
              <i class="fa-brands fa-github"></i> Github
            </button>
            <button className="followUsBtn linkedin">
              <i class=" fa-brands fa-linkedin"></i> Linkedin
            </button>
          </div>
        </div>
        <div className="right">
          <h1 className="intro">
            <span className="hi">Hi, </span>
            <i className="hibtn fa-solid fa-hand"></i> <br /> I Am Ritesh
            Gharti.
          </h1>
          <p className="introDsc">
            I'm a MERN stack developer with a passion for crafting comprehensive
            web applications. Having created numerous full-stack web solutions,
            I thrive on turning ideas into functional realities. Alongside my
            development journey, I've dedicated time to mastering Data
            Structures and Algorithms, solving a multitude of questions that
            have sharpened my problem-solving prowess. My quest for knowledge is
            ongoing, as I eagerly delve into new horizons, consistently
            broadening my skill set and staying at the forefront of
            technological advancements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
