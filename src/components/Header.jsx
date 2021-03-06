import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import Logo from "../assets/logo_transparent.png";

const Header = () => {
  return (
    <div className="d-flex">
      <img
        style={{
          width: "13rem",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={Logo}
        alt="logo"
      />
      <a
        href="https://github.com/jcai8649/coinscout"
        rel="noreferrer"
        target="_blank"
        style={{
          width: "25px",
          height: "25px",
        }}
      >
        <BiCodeAlt
          style={{
            width: "25px",
            height: "25px",
            color: "white",
          }}
          className="text-white flex mt-3 ml-1"
        />
      </a>
      <a
        href="https://github.com/jcai8649"
        rel="noreferrer"
        target="_blank"
        style={{
          width: "25px",
          height: "25px",
        }}
      >
        <AiOutlineGithub
          style={{
            width: "25px",
            height: "25px",
          }}
          className="text-white flex m-3"
        />
      </a>
    </div>
  );
};

export default Header;
