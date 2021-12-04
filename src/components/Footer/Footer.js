import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/martin-joseph-ab8675164/"
        target="_blank"
      >
        <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkIn-icon" />
      </a>
    </footer>
  );
};

export default Footer;
