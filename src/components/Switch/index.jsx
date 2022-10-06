import React, { useEffect, useRef, useState } from 'react'
import './Switch.scss'

const Switch = ({ choices, initialChoice, onChange }) => {
  const flapRef = useRef()
  const toggleRef = useRef()
  const choice1Ref = useRef()
  const choice2Ref = useRef()

  const [selectedChoice, setSelectedChoice] = useState(initialChoice && choices.find((choice) => choice.value === initialChoice))

  useEffect(() => {
    const st = {}
    st.flap = flapRef.current
    st.toggle = toggleRef.current
    st.choice1 = choice1Ref.current
    st.choice2 = choice2Ref.current

    st.flap.addEventListener('transitionend', () => {
      if (st.choice1.checked) {
        st.toggle.style.transform = 'rotateY(-15deg)'
        setTimeout(() => st.toggle.style.transform = '', 400)
      } else {
        st.toggle.style.transform = 'rotateY(15deg)'
        setTimeout(() => st.toggle.style.transform = '', 400)
      }
    })
  }, [])

  const handleChange = (e) => {
    const { target } = e
    setSelectedChoice(choices.find(choice => choice.value === target.value))
    onChange(e)
  }

  return (
    <div ref={toggleRef} className="toggle">
      <input onChange={handleChange} ref={choice1Ref} type="radio" id="choice1" name="choice" value={choices[0].value} checked={selectedChoice.value === choices[0].value} />
      <label htmlFor="choice1">{choices[0].label}</label>
      <input onChange={handleChange} ref={choice2Ref} type="radio" id="choice2" name="choice" value={choices[1].value} checked={selectedChoice.value === choices[1].value} />
      <label htmlFor="choice2">{choices[1].label}</label >
      <div ref={flapRef} id="flap"><span className="content">{selectedChoice.label}</span></div>
    </div>
  )
}

export default Switch
