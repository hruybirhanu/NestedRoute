import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate();
  return (
    <div>
   <h2>well come to home pages</h2>
   <button onClick={()=>navigate('ordersummery')}>place order</button>
    </div>
  )
}
