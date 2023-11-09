'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'


export default function Home(){
  const [angka, setAngka] = useState(0)
  const [nama, setNama] = useState('Dwi Afiqah')

  function handlertambahAngka(){
    setAngka(angka + 1);
  }

  function handlerGantiNama(){
    setNama('afiqah cantik!');
  }

  return(
    <div className='body'>
      <div className='banner-container'>
        <div className='header-banner-wrapper'>
          <div className='profil-header-banner'>
            <Image
              src="/assets/gambar1.png"
              alt='gambar autor'
              fill
              objectFit='contain'
            />
          </div>
          <div className='content-header-banner'>
            <h1>{nama}</h1>
            <div className='bio-nim-header-banner'> 
            <p>D121211014</p>
            <p>Tetap semangat {angka} </p>
            </div>
          </div>
        </div>
        <div className='cta-banner-wrapper'>
          <button className='cta-button' onClick={handlertambahAngka}>
            <p>
              Halo!
            </p>
          </button>
          <button className='cta-button' style={{
            marginTop: '12px'
          }} 
          onClick={handlerGantiNama}>
            <p>Ganti nama</p>
          </button>
        </div>
      </div>
    </div>
  )
}