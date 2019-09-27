import React from "react";
import yellowbar from "../assets/img/yellow-bar.png";
import pinkbar from "../assets/img/pink-bar.png";

let tech = [
  "HTML",
  "React",
  "Angular 2",
  "Wordpress",
  "Javascript",
  "CSS",
  "Bootstrap"
];
function Technologies() {
  return (
    <div>
      <h1 class="display-2 text text-left">Technologies</h1>
      <img src={yellowbar} />
      <img src={pinkbar} />
    </div>
  );
}

export default Technologies;
