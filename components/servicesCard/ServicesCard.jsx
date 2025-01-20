import React from 'react'
import '../../styles/css/services.css'
import Image from 'next/image'

const ServicesCard = ({data}) => {
  return (
    <div className='service-container'>
        {
            data.map((item) => (
                
                <div className='service-div'>
                    <Image
                            //   className="rectangle2"
                              src={item.img}
                              height={82}
                              width={72}
                              alt=""
                            />
                            <p className='text-title'>{item.name}</p>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                    </div>
            ))
        }
    </div>
  )
}

export default ServicesCard