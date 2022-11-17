import Link from 'next/link'
import Image from 'next/image'

import home from '../public/images/home_circle_icon_137496.svg'

export default function Nav () {
  return (
    <div id='navbar' className='navbar'>
      <Link className='home-link' href='#'>
        <Image
          className='home-icon'
          src={home}
          width={40}
          height={40}
          alt='alt'
        ></Image>
      </Link>
      <ul className='navbar__list'>
        <li className='navbar__list__item'>
          <Link className='link' href='#portfolio'>
            Portfolio
          </Link>
        </li>
        <li className='navbar__list__item'>
          <Link className='link' href='#about'>
            About
          </Link>
        </li>
        <li className='navbar__list__item'>
          <Link className='link' href='#contact'>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}
