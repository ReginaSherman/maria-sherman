import Nav from './Nav'
import { useState } from 'react'

export default function Header () {
  // const [scrollTop, setScrollTop] = useState(0)

  // const handleScroll = event => {
  //   setScrollTop(event.currentTarget.scrollTop)
  // }
  return (
    // <div id='header' className='header' onScroll={handleScroll}>
    <div id='header' className='header'>
      <Nav />
    </div>
  )
}
