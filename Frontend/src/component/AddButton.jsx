import React from 'react'

function AddButton({ onClick }) {
  return (
    <div>
        <button className='bg-violet-500 text-white' type="button" onClick={onClick}>
            Add
        </button>
    </div>
  )
}

export default AddButton