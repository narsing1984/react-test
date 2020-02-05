import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import "./index.css";
import history from "../../../history";

const Territories: React.FC = () => {
  const [territories, setTerritories] = useState([]);
  const getTerritories = () => {
    axios
      .get("http://localhost:3000/territories.json")
      .then(function(response: any) {
        let list = response.data.map(function(eachTerritory: any, i: any) {
          return {
            value: eachTerritory.TerritoryID,
            label: eachTerritory.TerritoryName
          };
        });
        setTerritories(list);
      })
      .catch(function(error: any) {
        console.log(error);
      });
  };

  useEffect(() => {
    getTerritories();
  }, []);
  return (
    <main className="territories__dialog">
      <div className="select-territory">
        <label className="select-territory__input-label">
          Select Territory
        </label>
        <div className="select-territory__input-wrapper">
          <div className="select-territory__input">
            <Select
              options={territories}
              autosize={true}
              className="territories-width"
              onChange={(selctedTerritory: any) => {
                history.push("/territories/" + selctedTerritory.value);
              }}
            ></Select>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Territories;
