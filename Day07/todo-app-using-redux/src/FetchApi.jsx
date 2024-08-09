import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchthunk} from './redux/slices/FetchSlice'

function FetchApi() {
    
    const dispatch=useDispatch();

    const data=useSelector(state=>state)

    const [flag,setFlag]=useState(true)

    const handler=()=>{
        dispatch(fetchthunk());
        setFlag(false)

    }
   

  
  return (
    <>
   <ul>
    {data.fetch.products ? data.fetch.products.map((e)=>{
        <li key={e.id}>
        {e.title}
        </li>
    }):<></>} 
    </ul>
      {flag && <button onClick={handler}>Fetch API</button>}
      </>
   
  )
}

export default FetchApi
