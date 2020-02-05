import React from "react";
import "./index.css";
import SelectedHCP from "../../common/selectedhcp";
import planTypes from "./plans.json";
import history from "../../../history";

const Plans: React.FC = () => {
  return (
    <div>
      <SelectedHCP />
      <div className="message-customization">
        <div className="message-customization__top-panel">
          <div className="message-customization__top-panel-left">
            <div className="message-customization__flavor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="back-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
                <path fill="none" d="M0 0h24v24H0z" />
              </svg>
              Improved Access
            </div>
            <p className="message-customization__message">
              85% of prescriptions for CARDIOCAP&#174; (brexpiprazole) in Texas
              are covered without restrictions or with a single generic step
              edit.
            </p>
          </div>
          <div className="message-customization__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="94.824"
              height="101.117"
              viewBox="0 0 94.824 101.117"
            >
              <defs></defs>
              <g transform="translate(-30 -143.7)">
                <rect
                  className="a"
                  width="70.199"
                  height="88.485"
                  transform="translate(33.607 153.233)"
                />
                <rect
                  className="b"
                  width="67.199"
                  height="66.029"
                  transform="translate(34.607 174.688)"
                />
                <path
                  className="a"
                  d="M72.573,97.472H4.8a4.315,4.315,0,0,1-4.3-4.3V8.4A4.315,4.315,0,0,1,4.8,4.1h17a4.3,4.3,0,1,1,0,8.606H8.891V89.081H68.27v-25.8a4.3,4.3,0,0,1,8.606,0V93.169A4.315,4.315,0,0,1,72.573,97.472Z"
                  transform="translate(29.5 147.345)"
                />
                <g transform="translate(80.128 151.445)">
                  <path
                    className="a"
                    d="M46.316,62.531a4.315,4.315,0,0,1-4.3-4.3l-.571-45.522H28.1a4.3,4.3,0,0,1,0-8.606H45.744a4.315,4.315,0,0,1,4.3,4.3l.571,50.04A4.136,4.136,0,0,1,46.316,62.531Z"
                    transform="translate(-23.8 -4.1)"
                  />
                </g>
                <g transform="translate(49.063 143.7)">
                  <path
                    className="a"
                    d="M9.5,16.9V4.8A4.315,4.315,0,0,1,13.8.5H42.847a4.315,4.315,0,0,1,4.3,4.3V16.9Z"
                    transform="translate(-9.5 -0.5)"
                  />
                </g>
                <g transform="translate(50.654 172.959)">
                  <path
                    className="c"
                    d="M14.4,36.044a4.315,4.315,0,0,1-4.3-4.3V18.4a4.3,4.3,0,1,1,8.606,0V31.742A4.454,4.454,0,0,1,14.4,36.044Z"
                    transform="translate(-10.1 -14.1)"
                  />
                </g>
                <g transform="translate(43.769 179.628)">
                  <path
                    className="c"
                    d="M24.757,25.806H11.2a4.3,4.3,0,0,1,0-8.606H24.542a4.315,4.315,0,0,1,4.3,4.3A4.136,4.136,0,0,1,24.757,25.806Z"
                    transform="translate(-6.9 -17.2)"
                  />
                </g>
                <rect
                  className="d"
                  width="60"
                  height="76"
                  transform="translate(38 161)"
                />
                <g transform="translate(79.711 187.593)">
                  <path
                    className="a"
                    d="M57.237,64.2a6.344,6.344,0,0,1-4.481-1.839L23.732,31.86a1.6,1.6,0,0,1-.575-1.149L21.2,20.139a2.358,2.358,0,0,1,.575-1.953,1.867,1.867,0,0,1,1.953-.575L34.3,19.565a3.594,3.594,0,0,1,1.149.575l29.024,30.5c2.758,2.758,2.3,7.584-.919,10.8A9.535,9.535,0,0,1,57.237,64.2Z"
                    transform="translate(-21.175 -17.523)"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="message-customization__top-panel-right">
            <div className="message-customization__preview">
              <p className="message-customization__number-selected">
                Plans selected: <span id="plans-selected">1</span>
              </p>
              <button className="message-customization__preview-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="file-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <span
                  className="message-customization__preview-button-text"
                  onClick={() => {
                    history.push("/print");
                  }}
                >
                  Preview
                </span>
              </button>
            </div>
            <div className="message-customization__options">
              <div className="message-customization__checkbox-group message-customization__hcp-name">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="check-box-outline-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </button>
                <label className="message-customization__checkbox-label">
                  Include HCP Name
                </label>
              </div>
              <div className="message-customization__checkbox-group message-customization__ehr">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="check-box-outline-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </button>
                <label className="message-customization__checkbox-label">
                  EHR Back Page
                </label>
              </div>
              <div className="message-customization__checkbox-group message-customization__co-pay">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="check-box-outline-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </button>
                <label className="message-customization__checkbox-label">
                  Include Co-Pay Info
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="message-customization__bottom-panel">
          <div className="message-customization__plan-table-wrapper">
            <table className="message-customization__plan-table">
              <thead>
                <tr>
                  <th className="message-customization__plan-table-select-all"></th>
                  <th>Channel</th>
                  <th>Plan Name</th>
                  <th>Status</th>
                  <th>Co-Pay</th>
                </tr>
              </thead>
              <tbody>
                {planTypes.map((eachPlanType, index) => {
                  return (
                    <tr key={index}>
                      <td className="message-customization__plan-table-select-cell">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="check-box-outline-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      </td>
                      <td>{eachPlanType.channel}</td>
                      <td>{eachPlanType.plan_name}</td>
                      <td>{eachPlanType.status}</td>
                      <td>{eachPlanType.copay}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
