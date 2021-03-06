import React, { useState } from "react";
import { connect } from "react-redux";
import { logIn, globaldata } from "../../../redux/actions/current";
import "../login/index.css";
import Footer from "../../common/footer";

interface IProps {
  logInConnect: () => void;
  globaldata: () => void;
  globalData: any;
}
const TokenAuthentication = ({ logInConnect,globaldata, globalData }: IProps) => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (token === "") {
      setError("Please enter token");
    } else {
      logInConnect();
    }
  };

  return (
    <div className="login" style={{background:globalData && "url("+globalData.background_image+") no-repeat"}}>
      <main className="login__dialog">
      <h2
          className="login__dialog-heading"
          dangerouslySetInnerHTML={{
            __html: globalData && globalData.company_name
          }}
        ></h2>
        <p
          className="login__dialog-message"
          dangerouslySetInnerHTML={{
            __html: globalData && globalData.welcome_message
          }}
        ></p>
        <label className="login__input-label">
          Enter received token in Email
        </label>
        <div className="login__email-input-container">
          <input
            className="login__email-input"
            type="email"
            onChange={e => setToken(e.target.value)}
          />
          <button
            type="button"
            className="login__email-input-button"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
        <span className="error">{error}</span>
        <footer className="login__dialog-footer">
          <button className="login__dialog-footer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="perm-phone-message"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z" />
            </svg>
            Contact Us
          </button>
        </footer>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const globalData = state.globalData.data;
  return { globalData };
};

const mapDispatchToProps = {
  logInConnect: logIn,
  globaldata
};

export default connect(mapStateToProps, mapDispatchToProps)(TokenAuthentication);
