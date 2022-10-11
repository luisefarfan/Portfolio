import React, { useEffect, useRef, useState } from 'react'
import { clearAnimations } from '../../utils/animations'
import './HomeMenu.scss'

const HomeMenu = ({ centerTitleRef, menuContent }) => {
  const [positions, setPositions] = useState([])

  const calcPositions = () => {
    setPositions([
      { top: centerTitleRef.current.offsetTop - 125, left: centerTitleRef.current.offsetLeft - ((centerTitleRef.current.clientWidth / 2) + 100) },
      { top: centerTitleRef.current.offsetTop - 100, left: centerTitleRef.current.offsetLeft + ((centerTitleRef.current.clientWidth / 2)) },
      { top: centerTitleRef.current.offsetTop + 75, left: centerTitleRef.current.offsetLeft - ((centerTitleRef.current.clientWidth / 2) + 100) },
      { top: centerTitleRef.current.offsetTop + 100, left: centerTitleRef.current.offsetLeft + ((centerTitleRef.current.clientWidth / 2)) }
    ])
  }

  let refs = []
  for (let i = 0; i < 4; i++) {
    const ref = useRef()
    refs.push(ref)
  }

  useEffect(() => {
    window.addEventListener('resize', calcPositions)

    clearAnimations(refs)
  }, [])

  useEffect(() => {
    calcPositions()
  }, [centerTitleRef])

  return (
    <ul className='home-menu'>
      <li ref={refs[0]} className='animate__animated animate__fadeInLeft animate__delay-1s' style={positions[0]}><a href="#about">{menuContent.option1}</a></li>
      <li ref={refs[1]} className='animate__animated animate__fadeInLeft animate__delay-2s' style={positions[1]}><a href="#whatIDo">{menuContent.option2}</a></li>
      <li ref={refs[2]} className='animate__animated animate__fadeInLeft animate__delay-3s' style={positions[2]}><a href="#myJob">{menuContent.option3}</a></li>
      <li ref={refs[3]} className='animate__animated animate__fadeInLeft animate__delay-4s' style={positions[3]}><a href="#experience">{menuContent.option4}</a></li>
    </ul>
  )
}

export default HomeMenu
