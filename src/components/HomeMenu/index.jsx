import React, { useEffect, useRef, useState } from 'react'
import { clearAnimations } from '../../utils/animations'
import './HomeMenu.scss'

const HomeMenu = ({ centerTitleRef }) => {
  const [positions, setPositions] = useState([])

  const calcPositions = () => {
    setPositions([
      { top: centerTitleRef.current.offsetTop - 150, left: centerTitleRef.current.offsetLeft - ((centerTitleRef.current.clientWidth / 2) + 100) },
      { top: centerTitleRef.current.offsetTop - 125, left: centerTitleRef.current.offsetLeft + ((centerTitleRef.current.clientWidth / 2)) },
      { top: centerTitleRef.current.offsetTop + 100, left: centerTitleRef.current.offsetLeft - ((centerTitleRef.current.clientWidth / 2) + 100) },
      { top: centerTitleRef.current.offsetTop + 125, left: centerTitleRef.current.offsetLeft + ((centerTitleRef.current.clientWidth / 2)) }
    ])
  }

  let refs = []
  for (let i = 0; i < 4; i++) {
    const ref = useRef()
    refs.push(ref)
  }

  useEffect(() => {
    calcPositions()
    window.addEventListener('resize', calcPositions)

    clearAnimations(refs)
  }, [])

  return (
    <ul className='home-menu'>
      <li ref={refs[0]} className='animate__animated animate__fadeInLeft animate__delay-1s' style={positions[0]}><a href="#about">Sobre mí</a></li>
      <li ref={refs[1]} className='animate__animated animate__fadeInLeft animate__delay-2s' style={positions[1]}><a href="#whatIDo">¿Qué hago?</a></li>
      <li ref={refs[2]} className='animate__animated animate__fadeInLeft animate__delay-3s' style={positions[2]}><a href="#myJob">Mi trabajo</a></li>
      <li ref={refs[3]} className='animate__animated animate__fadeInLeft animate__delay-4s' style={positions[3]}><a href="#experience">Experiencia y habilidades</a></li>
    </ul>
  )
}

export default HomeMenu
