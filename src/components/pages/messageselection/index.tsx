import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SelectedHCP from "../../common/selectedhcp";
import messageTypes from "./messageTypes.json";

const MessageSelection: React.FC = () => {
  return (
    <div>
      <SelectedHCP />

      <div className="message-selection">
        <ul className="message-selection__list">
          {messageTypes.map((eachMessageType, index) => {
            return (
              <Link to="/plans" key={index}>
                <li className="message-selection__list-item">
                  <p className="message-selection__message-flavor">
                    {eachMessageType.message_type}
                  </p>
                  <p className="message-selection__message">
                    {eachMessageType.description}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="forward-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
                    <path fill="none" d="M0 0h24v24H0z" />
                  </svg>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MessageSelection;
