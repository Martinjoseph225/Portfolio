import { Link, useLocation } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <div className="box">
          <div className="lightbar">
            <h1>
              <p>Hi,</p>
              <p>I am Martin Joseph</p>
              <p>React Front End Developer</p>
            </h1>
          </div>
        </div>

        <Link to="Portfolio/about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img src={`${process.env.PUBLIC_URL}/image.jpg`} alt="person picture" />
      </div>
    </div>
  );
};

export default Home;
