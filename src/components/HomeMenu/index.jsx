import React, { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { menuIds } from '../../content/home'
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

  useEffect(() => {
    window.addEventListener('resize', calcPositions)
  }, [])

  useEffect(() => {
    calcPositions()
  }, [centerTitleRef])

  return (
    <ul className='home-menu'>
      <Fade direction='left' cascade delay={1000}>
        <li onClick={() => handleSectionChange(menuIds.option1)} style={positions[0]}>{menuContent.option1}</li>
        <li onClick={() => handleSectionChange(menuIds.option2)} style={positions[1]}>{menuContent.option2}</li>
        <li onClick={() => handleSectionChange(menuIds.option3)} style={positions[2]}>{menuContent.option3}</li>
        <li onClick={() => handleSectionChange(menuIds.option4)} style={positions[3]}>{menuContent.option4}</li>
      </Fade>
    </ul>
  )
}

export default HomeMenu
