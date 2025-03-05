import React from 'react'

function Editbutton({ onClick }) {
  return (
    <div>
        <button className='bg-green-500 text-white' type="button" onClick={onClick}>
            Edit
        </button>
    </div>
  )
}

export default Editbutton