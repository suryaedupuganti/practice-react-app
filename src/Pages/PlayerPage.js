import React from "react";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import SportDetail from "../components/SportDetail/SportDetail";
import LabelText from "../components/LabelText/LabelText";

const PlayerPage = () => {
  return (
    <>
      <PlayerCard
        header="Batting"
        label1="Average:"
        label2="HS:"
        value1="52"
        value2="123"
        
        header2="Bowling"
        label3="Econ:"
        label4="Best:"
        value3="4.2"
        value4="3/12"
      />
    </>
  );
};
export default PlayerPage;
