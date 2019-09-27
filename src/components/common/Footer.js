import React from "react";
import linkedin from "../../assets/img/linkden.svg";
import git from "../../assets/img/git.svg";
import email from "../../assets/img/email.svg";

const footer = {
  background: "#E6E8E6",
  height: "90px",
  color: "black",
  padding: "0px 30px"
};

function Footer() {
  return (
    <div style={footer}>
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-sm-4 text-left">
            <p>Kaitrin Callahan &#x24B8;</p>
          </div>
          <div className="col-sm-8 text-right footer-links">
            <a href="">
              <img src={git} alt="github" />
            </a>
            <a href="">
              <img src={linkedin} alt="linkedin"></img>
            </a>
            <a href="">
              <img src={email} alt="email"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
