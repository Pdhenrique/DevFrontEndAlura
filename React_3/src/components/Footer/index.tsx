import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <img alt="facebook logo" src="./images/fb.png" />
        <img alt="instagran logo" src="./images/ig.png" />
        <img alt="twitter logo" src="./images/tw.png" />
      </div>
      <div className="projectLogo">
        <img alt="project logo" src="./images/logo.png" />
      </div>
      <div className="Alura">Desenvolvido por ...</div>
    </footer>
  );
};

export default Footer;
