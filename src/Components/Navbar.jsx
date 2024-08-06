import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Ecom } from '../Context'

const Navbar = () => {
    const {cart,searchQuery, setSearchQuery} = useContext(Ecom)
  return (
    <div  style={{width:'100%',height:'4rem',backgroundColor:'red',display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <Link to={'/'}>🏠</Link>
        <div>
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
        <Link to={'/cart'} style={{fontSize:'2rem',fontWeight:'bolder'}}>👜{cart.length}</Link>
    </div>
  )
}

export default Navbar