import React from "react";
import SportDetail from '../SportDetail/SportDetail';
import CricketImage from '../../assets/images/Cricket.jpg';

const PlayerCard = ({ header, label1,label2,header2,text1,text2}) => {
  return (
    <div className="container-fluid">
    <div className="card text-center  ">
      <div className="card-header">INDIA</div>

      <div className="card-body">
        <div className="row">
        
         
          <div className="col" style={{ "backgroundColor": "red" }}>
            <div className="row h-50" style={{ "backgroundColor": "green" }}>
              <SportDetail header={header} text1={label1} text2={label2} />
            </div>
            <div className="row h-50" style={{ "backgroundColor": "yellow" }}>
             
              <SportDetail header={header2} text1={text1} text2={label2} />
            </div>
          </div>
          

          <div className="col " style={{ "backgroundColor": "blue" }}>
            <div className="row h-50 w-200" >
              <h3>PICTURE</h3>
              <img src={CricketImage} className="card-img-top" className="rounded-floatright mx-auto h-100 " alt="no picture"/>
            </div>
            <div className="row h-50 w-200" style={{ "backgroundColor": "green" }}>
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
    </div>
  );
};

export default PlayerCard;
