'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'


export default function Home(){
  const [angka, setAngka] = useState(0)
  const [nama, setNama] = useState('Dwi Afiqah')
  // inputfields
  const [input, setInput] = useState (0)
  const [change, setChange] = useState (false)

  function handlertambahAngka(){
    setAngka(angka + 1);
  }

  function handlerGantiNama(){
    setNama('afiqah cantik!');
  }

  // function button input
  function inputData(val){
    console.warn(val.target.value)
    setInput(val.target.value)
    setChange(false)
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
            {
              change?
              <h1>{input}</h1> :null
            }
            <div className='bio-nim-header-banner'> 
            <p>D121211014</p>
            <p>Tetap semangat {angka} </p>
            </div>
          </div>
        </div>
        <div className='cta-banner-wrapper'>
          {/* button menambahkan angka jika mengklik "Halo!" */}
          <button className='cta-button' onClick={handlertambahAngka}>
            <p>
              Halo!
            </p>
          </button>

          {/* button mengganti nama dengan function yang telah disediakan */}
          <button className='cta-button' style={{
            marginTop: '12px'
          }} 
          onClick={handlerGantiNama}>
            <p>Ganti nama</p>
          </button>

          {/* membuat button untuk input fields */}
          <input className='input' 
            style={{marginTop: '12px'}} type='text' onChange={inputData}/>
          <button className='cta-button' style={{
            marginTop: '12px'
          }} onClick={()=>setChange(true)}>
            <p>Other Name</p>
          </button>
        </div>
      </div>
    </div>
  )
}