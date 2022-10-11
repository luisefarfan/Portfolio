import React, { useEffect, useRef, useState } from 'react'
import { menuIds } from '../../content/home'
import { clearAnimations } from '../../utils/animations'
import './HomeMenu.scss'

const HomeMenu = ({ centerTitleRef, menuContent, handleSectionChange }) => {
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
      <li onClick={() => handleSectionChange(menuIds.option1)} ref={refs[0]} className='animate__animated animate__fadeInLeft animate__delay-1s' style={positions[0]}>{menuContent.option1}</li>
      <li onClick={() => handleSectionChange(menuIds.option2)} ref={refs[1]} className='animate__animated animate__fadeInLeft animate__delay-2s' style={positions[1]}>{menuContent.option2}</li>
      <li onClick={() => handleSectionChange(menuIds.option3)} ref={refs[2]} className='animate__animated animate__fadeInLeft animate__delay-3s' style={positions[2]}>{menuContent.option3}</li>
      <li onClick={() => handleSectionChange(menuIds.option4)} ref={refs[3]} className='animate__animated animate__fadeInLeft animate__delay-4s' style={positions[3]}>{menuContent.option4}</li>
    </ul>
  )
}

export default HomeMenu
