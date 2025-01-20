import React from 'react'
import linkedin from "../../public/assets/linkedin.png";
import insta from "../../public/assets/insta.png";
import twitter from "../../public/assets/twitter.png";
import fb from "../../public/assets/fb.png";
import Image from 'next/image';



const SocialSite = () => {
  return (
    <div>
                  <Image src={fb} height={32.48} width={32.48} alt="" />
                  <Image src={twitter} height={32.48} width={32.48} alt="" />
                  <Image src={insta} height={32.48} width={32.48} alt="" />
                 
                  <Image src={linkedin} height={32.48} width={32.48} alt="" />
        
    </div>
  )
}

export default SocialSite