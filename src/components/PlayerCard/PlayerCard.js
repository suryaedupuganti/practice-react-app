import React from "react";
import SportDetail from "../SportDetail/SportDetail";
import CricketImage from "../../assets/images/Cricket.jpg";

const PlayerCard = ({
  header = "Batting",
  label1 = "Average",
  label2 = "HS",
  value1 = "52",
  value2 = "123",
  header2 = "Bowling",
  label3 = "Econ.",
  label4 = "Best",
  value3 = "4.2",
  value4 = "3/12"
}) => {
  return (
    <div className="container-fluid min-width: 768px">
      <div className="card text-center">
        <div className="card-header" className="p-3 mb-2 bg-info text-white">
          INDIA
        </div>
        <div class="span4" align="center">
          <div class="hero-unit" align="center">
            <div className="card-body">
              <div className="row">
                <div className="col" style={{ backgroundColor: "red" }}>
                  <div
                    className="row h-50"
                    style={{ backgroundColor: "green" }}
                  >
                    <SportDetail
                      header={header}
                      label1={label1}
                      label2={label2}
                      text1={value1}
                      text2={value2}
                    />
                  </div>
                  <div
                    className="row h-50"
                    style={{ backgroundColor: "yellow" }}
                  >
                    <SportDetail
                      header={header2}
                      label1={label3}
                      label2={label4}
                      text1={value3}
                      text2={value4}
                    />
                  </div>
                </div>

                <div className="col " style={{ backgroundColor: "blue" }}>
                  <div className="row h-50">
                    <div className="m-auto">
                      <img
                        src={CricketImage}
                        className="rounded-circle h-100"
                        alt="no picture"
                      />
                    </div>
                  </div>
                  <div
                    className="row h-50 w-200"
                    style={{ backgroundColor: "green" }}
                  >
                    <div className="w-100">
                      <div className="w-100 mx-auto">
                        <h3>RANKING</h3>
                      </div>
                      <label>
                        ODI RANKING: <p>1</p>
                      </label>{" "}
                      <br />
                      <label>
                        TEST RANKING:<p>2</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
