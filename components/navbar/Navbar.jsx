"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo.png";
import "../../styles/css/navbar.css";
import "../../styles/responsive/responsive.css";

import Link from "next/link";
import ButtonComp from "../button/ButtonComp";

const Navbar = () => {
  const navlist = [
    {
      id: 1,
      name: "Home",
    },

    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Services",
    },
    {
      id: 4,
      name: "Projects",
    },
    {
      id: 5,
      name: "Testimonial",
    },
    {
      id: 6,
      name: "Contact",
    },
  ];
  return (
    <div className="nav-container-div">
      <div>
        <Image
          className="logo-img"
          src={logo}
          height={100}
          width={150}
          alt=""
        />
      </div>

      <div className="nav-list-container">
        {navlist.map((item) => (
          <li className="nav-list" key={item.id}>
            <Link href="">{item.name}</Link>
          </li>
        ))}
        <ButtonComp text={"Download CV"} />
      </div>
    </div>
  );
};

export default Navbar;
