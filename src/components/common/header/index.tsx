import React, { useState } from "react";
import $ from "jquery";
import "./index.css";
import history from "../../../history";
import { connect } from "react-redux";
import { logOut } from "../../../redux/actions/current";

interface IProps {
  logOutConnect: () => void;
}

const Header = ({ logOutConnect }: IProps) => {
  const handleChangeTerritories = () => {
    history.push("/territories");
  };

  const drugMenu = [
    [
      {
        id: "1",
        drugName: "Cardiocap 200mg",
        logo: "cardiocap@2x.png",
        type: "logo"
      },
      {
        id: "2",
        drugName: "Cardiocap 400mg",
        logo: "cardiocap@2x.png",
        type: "logo"
      },
      {
        id: "3",
        drugName: "Cardiocap 600mg",
        logo: "cardiocap@2x.png",
        type: "logo"
      }
    ],
    [
      { id: "3", drugName: "Humidify 30ml", logo: "Humidify", type: "text" },
      { id: "4", drugName: "Humidify 60ml", logo: "Humidify", type: "text" }
    ]
  ];

  const [drug, setDrug] = useState({
    id: "1",
    drugName: "Cardiocap 200mg",
    logo: "cardiocap@2x.png",
    type: "logo"
  });
  const handleSetDrug = (params: any) => {
    setDrug(params);
    $("#drug-menu").toggleClass("drug-menu-show");
  };
  return (
    <div className="portal-header">
      <button
        className="portal-header__nav-toggle"
        onClick={() => {
          $("#nav-menu").toggleClass("nav-menu-show");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="menu-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
      <nav className="nav-menu" id="nav-menu">
        <ul>
          <li className="nav-menu__item selected">Pre-Call Planning</li>
          <li className="nav-menu__item">Create Leave-Behinds</li>
          <li className="nav-menu__item">Batch Print</li>
          <li className="nav-menu__item">Print History</li>
          <li className="nav-menu__item">FAQ</li>
          <li className="nav-menu__item">Contact Us</li>
          <li className="nav-menu__item">
            User Guide PDF
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="open-in-new-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
          </li>
          <li className="nav-menu__divider"></li>
          <li className="nav-menu__item" onClick={() => logOutConnect()}>
            Sign Out
          </li>
        </ul>
      </nav>
      <p
        className="portal-header__company-name"
        onClick={() => handleChangeTerritories()}
      >
        General Pharma Co.
      </p>
      <button
        className="portal-header__drug-selection-toggle"
        onClick={() => {
          $("#drug-menu").toggleClass("drug-menu-show");
        }}
      >
        {drug.type === "logo" ? (
          <img
            className="portal-header__drug-logo"
            src={`images/${drug.logo}`}
          />
        ) : (
          <span className="drug-menu-lower_ele">{drug.logo}</span>
        )}

        <p className="portal-header__drug-name">{drug.drugName}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="drop-up-down-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5-5 5 5z" />
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M7 14l5 5 5-5z" />
        </svg>
      </button>
      <nav className="drug-menu" id="drug-menu">
        <ul>
          {drugMenu.map((val, index) => {
            return val.map((v, i) => {
              if (v.type === "logo") {
                return (
                  <li
                    className="drug-menu__item"
                    key={i}
                    onClick={() => handleSetDrug(v)}
                  >
                    <img
                      className="drug-menu__item-logo"
                      src={`../images/${v.logo}`}
                      alt={v.drugName}
                    />
                    {v.drugName}
                  </li>
                );
              } else {
                return (
                  <li
                    className="drug-menu__item"
                    key={i}
                    onClick={() => handleSetDrug(v)}
                  >
                    <span className="drug-menu-lower_ele">{v.logo}</span>
                    {v.drugName}
                  </li>
                );
              }
            });
          })}
        </ul>
      </nav>
      <div className="portal-header__right">
        <p className="portal-header__greeting">Welcome, User Name</p>
        <p className="portal-header__territory">
          Abilene, TX 256
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="edit-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => handleChangeTerritories()}
          >
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  logOutConnect: logOut
};

export default connect(null, mapDispatchToProps)(Header);
