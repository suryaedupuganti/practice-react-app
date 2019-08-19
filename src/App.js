import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Loginform from "./components/Loginform/Loginform";
import Alerts from "./components/Alerts/Alerts";
import Badge from "./components/Badge/Badge";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Button from "./components/Button/Button";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Card from "./components/Card/Card";
import Carousel from "./components/Carousel/Carousel";
function App() {
  return (
    <>
      <Loginform />
      <Alerts />
      <Badge />
      <Breadcrumb/>
      <Button/>
      <ButtonGroup/>
      <Card/>
      <Carousel/>
    </>
  );
}

export default App;
