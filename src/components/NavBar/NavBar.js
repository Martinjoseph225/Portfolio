import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();
  console.log("test", location);

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="list-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/3lines.png`}
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/close.png`}
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/Portfolio"
                style={{
                  color: location.pathname === "/Portfolio/" && "#4071f4",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio/about"
                style={{
                  color: location.pathname === "/about" && "#4071f4",
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio/skills"
                style={{
                  color: location.pathname === "/Portfolio/skills" && "#4071f4",
                }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio/works"
                style={{
                  color: location.pathname === "/Portfolio/works" && "#4071f4",
                }}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio/contact"
                style={{
                  color:
                    location.pathname === "/Portfolio/contact" && "#4071f4",
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
