import Image from 'next/image'
import React from 'react'
import "../../styles/css/progress.css";
// import '../../styles/css/navbar.css'
const ProgressBar = ({data}) => {
  return (
    <div className='progress-container'>
        {
            data.map((item) => (
                <div className='progress-div'>
                <p>{item.name}</p>
                <Image className='' src={item.img} height={20} width={753} alt='' /></div>
            ))
        }
    </div>
  )
}

export default ProgressBar