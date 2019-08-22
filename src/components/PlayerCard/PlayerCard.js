import React from "react";

const PlayerCard = ({ header="Hello", label1, label2 }) => {
  return (
    <div className="card text-center">
      <div className="card-header">INDIA</div>

      <div className="card-body">
        <div className="row">
          <div className="col" style={{ "backgroundColor": "red" }}>
            <div>
              <h3>{header}</h3>
              <label>{label1}</label> <br />
              <label>{label2}</label>
            </div>
            <div className="row" style={{ "backgroundColor": "yellow" }}>
              <div>
                <h3>BOWLING</h3>
                <label>ECONOMY</label> <br />
                <label>BEST</label>
              </div>
            </div>
          </div>

          <div className="col" style={{ "backgroundColor": "blue" }}>
            <div className="row h-50">
              <h3>PICTURE</h3>
            </div>
            <div className="row h-50" style={{ "backgroundColor": "green" }}>
              <div>
                <h3>RANKING</h3>
                <label>ODI RANKING</label> <br />
                <label>TEST RANKING</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
