import React from 'react'

function Search({ value, onChange }) {
  return (
    <div>
        <input className='border-2 border-black ' type="search" value={value} onChange={onChange} />
    </div>
  )
}

export default Search