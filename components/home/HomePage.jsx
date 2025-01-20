import Image from "next/image";
import React from "react";
import person1 from "../../public/assets/person1.png";
import person2 from "../../public/assets/person2.png";

import rect from "../../public/assets/rect.png";
import pbar1 from "../../public/assets/pbar1.png";

import "../../styles/css/home.css";
import ButtonComp from "../button/ButtonComp";
import SocialSite from "../socialSite/SocialSite";
import ProgressBar from "../progressbar/ProgressBar";

const HomePage = () => {

  const progress = [
    {
      name:"UX",
      img:pbar1
    },
    {
      name:"Website Design",
      img:pbar1
    },{
      name:"App Design",
      img:pbar1
    },{
      name:"Graphic Design",
      img:pbar1
    }
  ]
  return (
    <>
      {/* SECTIONS 1 STARTS */}
      <div className="section-1">
        <div className="section-1-container">
          {/* description text div */}
          <div>
            <p className="text-hi font-poppins">Hi I am</p>
            <p className="text-name font-poppins">Muhammad Umair</p>
            <p className="text-lg font-poppins">
              UI & UX <br />
              <span className="text-2">Designer</span>
            </p>
            <p className="desc-1 font-poppins">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <ButtonComp text="Hire Me" />
            {/* <button className="hire-me-btn">Hire Me</button> */}
          </div>
          {/* image div */}
          <div className="person-img-div">
            <Image src={person1} height={617} width={538} alt="" />

            <Image
              className="rectangle"
              src={rect}
              height={83}
              width={374}
              alt=""
            />
          </div>
        </div>
        <div className="social-site-div">
          <SocialSite />
        </div>
      </div>

      {/* SECTIONS 1 ENDS */}

      {/* SECTIONS 2 STARTS */}
      <div className="section-2">
      <div className="section-2-container">
        <div className="person-img-div">
          <Image src={person2} height={617} width={538} alt="" />
          <Image
            className="rectangle2"
            src={rect}
            height={83}
            width={374}
            alt=""
          />
        </div>

        <div className="description-div-2">
          <p className="about-me-text">About Me</p>
          <p className="desc-1 font-poppins">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

          <ProgressBar data={progress} />
        </div>
      </div>
      </div>

      

      {/* SECTIONS 2 ENDS */}



      {/* SECTIONS 3 STARTS */}

      {/* SECTIONS 3 ENDS */}

    </>
  );
};

export default HomePage;
