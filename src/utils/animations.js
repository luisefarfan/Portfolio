const handleAnimationEnd = (event, animation) => {
  const prefix = 'animate__'
  const animationName = `${prefix}${animation}`
  event.stopPropagation()
  event.target.classList.remove(`${prefix}animated`, animationName)
}

export const cleanAnimations = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    const ref = elements[i]

    ref.current.addEventListener('animationend', (e) => handleAnimationEnd(e, 'fadeInLeft'), { once: true })
  }
}
