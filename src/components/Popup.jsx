import React from 'react'
import '../css/popup.css'

const Popup = ({ onClose , elemento = null, titulo=''}) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{titulo}</h2>
        {elemento}
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  )
}

export default Popup