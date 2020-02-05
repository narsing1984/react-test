import React from "react";
import "./index.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        <div className="footer__text-large">
          <p>
            Release Date: <span className="footer__date">09/10/2018</span>
          </p>
          <p>
            Formulary Date: <span className="footer__date">08/01/2018</span>
          </p>
        </div>
        <div className="footer__text-small">
          <p>
            Version: 2.1.0 For Internal Use Only. Do Not Detail or Distribute to
            Any Third Parties.
          </p>
        </div>
      </div>
      <img className="footer__logo" src="./images/PX_KO.png" />
    </footer>
  );
};

export default Footer;
