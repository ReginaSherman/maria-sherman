/* eslint-disable @next/next/no-img-element */
import React, { use, useState } from 'react'
import Modal from './Modal'
import Link from 'next/link'

export default function Portfolio () {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div id='portfolio' className='portfolio section'>
      <h1>Portfolio</h1>
      <div className='grid'>
        <button onClick={() => setOpenModal(true)}>
          <CoverImage title='Portraits' src='images/portfolio/img1.png' />
        </button>
        <button onClick={() => setOpenModal(true)}>
          <CoverImage title='Portraits' src='images/portfolio/img2.png' />
        </button>
        <button onClick={() => setOpenModal(true)}>
          <CoverImage title='Portraits' src='images/portfolio/img3.png' />
        </button>
        <button onClick={() => setOpenModal(true)}>
          <CoverImage title='Portraits' src='images/portfolio/img4.png' />
        </button>
        <button onClick={() => setOpenModal(true)}>
          <CoverImage title='Portraits' src='images/portfolio/img5.png' />
        </button>
        <button onClick={() => setOpenModal(true)}>
          <CoverImage title='Portraits' src='images/portfolio/img6.png' />
        </button>
        <button onClick={() => setOpenModal(true)}>
          <CoverImage title='Portraits' src='images/portfolio/img7.png' />
        </button>
        <button onClick={() => setOpenModal(true)}>
          <CoverImage title='Portraits' src='images/portfolio/img8.png' />
        </button>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  )
}

const CoverImage = ({ src, title }) => {
  return (
    <div className='portfolioItem'>
      <img className='coverImage' alt='alt' src={src} />
      <h1 className='title'>{title}</h1>
    </div>
  )
}
