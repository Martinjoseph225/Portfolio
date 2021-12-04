import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>Education</h1>

      <p>Engineering 2014-2018</p>
      <div className="engnr">College Of Engineering Trivandrum </div>
      <div className="course">Mechanical Engineering (CGPA :8.6)</div>
      <br />
      <p>Higher Secondary 2013</p>
      <div className="hss">Little Flower English H.S.S Nilambur</div>
      <div className="course">Computer Science (95.58%)</div>
      <br />
      <p>SSLC 2011</p>
      <div className="sslc">Little Flower English H.S.S Nilambur</div>
      <div className="course">Science (95%)</div>
      <br />
      <br />
      <h1>Languages</h1>
      <div className="lang">
        <div>English</div>
        <div>Hindi</div>
        <div>Malayalam</div>
      </div>
    </div>
  );
};

export default About;
