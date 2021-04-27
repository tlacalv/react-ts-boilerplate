import React from "react";
import "./styles.css";
import Image from "./image.png";
import Logo from './logo.svg';

export default function app() {
  return (
    <>
      <h1>React Typescript webpack starter template</h1>
      <img src={Image} alt="imagen" width="300" />
      <img src={Logo} alt="imagen" width="300" />

    </>
  );
}
