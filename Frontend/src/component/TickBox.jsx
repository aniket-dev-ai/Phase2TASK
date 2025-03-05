import React from 'react'

function TickBox({ checked, onChange }) {
  return (
    <div>
        <input type="checkbox" checked={checked} onChange={onChange} />
    </div>
  )
}

export default TickBox