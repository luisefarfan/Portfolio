const handleAnimationEnd = (event) => {
  const prefix = 'animate__'
  event.stopPropagation()
  event.target.classList.remove(`${prefix}animated`)
}

export const clearAnimations = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    const ref = elements[i]

    ref.current.addEventListener('animationend', handleAnimationEnd, { once: true })
  }
}
