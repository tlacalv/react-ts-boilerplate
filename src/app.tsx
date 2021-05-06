import React from "react";
import "./styles.css";
import Image from "./image.png";
import Logo from './logo.svg';
import ClickCounter from './ClickCounter';

export default function app() {
  return (
    <>
      <h1>Reactd Typescript webpack starter template - {process.env.NODE_ENV} {process.env.name}</h1>
      <img src={Image} alt="imagen" width="300" />
      <img src={Logo} alt="imagen" width="300" />
      <ClickCounter />
    </>
  );
}
