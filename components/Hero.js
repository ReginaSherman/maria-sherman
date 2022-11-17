import Image from 'next/image'

import logo from '../public/images/Maria-Logo.svg'
import cursive from '../public/images/Cursive.svg'
import floral1 from '../public/images/floral1.svg'
import floral2 from '../public/images/floral2.svg'

export default function Hero () {
  return (
    <div id='hero' className='hero section'>
      <div className='logo'>
        <Image
          className='logo__1'
          src={logo}
          width={600}
          height={600}
          alt='alt'
        ></Image>
        <Image
          className='logo__2'
          src={cursive}
          width={600}
          height={600}
          alt='alt'
        ></Image>
      </div>
      <div className='deco'>
        <Image
          className='deco__2'
          src={floral2}
          width={500}
          height={500}
          alt='alt'
        ></Image>
        <Image
          className='deco__1'
          src={floral1}
          width={500}
          height={500}
          alt='alt'
        ></Image>
      </div>
    </div>
  )
}
