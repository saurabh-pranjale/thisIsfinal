import React, { useContext, useState } from 'react';
import { Ecom } from '../Context';

const Home = () => {
  const [filt, setFilt] = useState("all");
  

  const { state, cart, setCart ,searchQuery} = useContext(Ecom);

  function addCart(item, quantity = 1) {
    setCart([...cart, { item, quantity }]);
  }

  const filtered = state
    .filter((it) => filt === "all" || it.category === filt) //filter buttons
    .filter((it) => it.title.toLowerCase().includes(searchQuery.toLowerCase())); //search bar

  return (
    <>
      <div className='mx-auto w-50'>
        <button onClick={() => setFilt("all")}>All</button>
        <button onClick={() => setFilt("men's clothing")}>Men</button>
        <button onClick={() => setFilt("women's clothing")}>Women</button>
        <button onClick={() => setFilt("electronics")}>Electronics</button>
        <button onClick={() => setFilt("jewelery")}>Jewelry</button>
      </div>

    <div className='bg-danger d-flex flex-row justify-content-center flex-wrap'>

      {filtered.map((items) => (
        <div key={items.id} className='h-auto w-25 border border-2 border-dark m-4'>
          <h2>{items.title}</h2>
          <img src={items.image} alt='image' className='w-100 h-50' />
          <p>{items.description}</p>
          <button onClick={() => addCart(items, 1)}>Add to Cart</button>
        </div>


      ))}

</div>
    </>
  );
};

export default Home;
