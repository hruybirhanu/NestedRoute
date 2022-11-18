import React from 'react'
import { useNavigate } from 'react-router-dom'
const Ordersummery = () => {
    const navigate=useNavigate();
  return (
    <div>
      <h1>order is confirmed</h1>
      <button onClick={()=>navigate(-1)}>go back</button>
    </div>
  )
}

export default Ordersummery
