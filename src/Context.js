import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Ecom = createContext()

const Euro = ({children}) =>{

const [state,setState] = useState([])
const [cart,setCart] = useState([])
const [searchQuery, setSearchQuery] = useState("");

useEffect(()=>{
    const getData = async() =>{
     const a = await axios.get('https://fakestoreapi.com/products')
     setState(a.data)
    }
    getData()
},[])



return(
    <Ecom.Provider value={{state,cart,setCart,searchQuery, setSearchQuery}}>
        {children}
    </Ecom.Provider>
)
}

export default Euro;