import React from 'react'
import { Link,Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
<input type='search' placeholder='search'></input>
<div>

<Link to='feature'>feature</Link>
<Link to='new'>new</Link>

</div>
<Outlet></Outlet>
    </div>
  )
}
export default Product
