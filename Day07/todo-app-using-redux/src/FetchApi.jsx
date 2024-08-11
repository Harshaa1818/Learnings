import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchthunk} from './redux/slices/FetchSlice'

function FetchApi() {
    
    const dispatch=useDispatch();

    const data=useSelector(state=>state.fetch)

    const [flag,setFlag]=useState(true)

    const handler=()=>{
        dispatch(fetchthunk());

        console.log(data)
        setFlag(false)

    }
   
   
  
  return (
    <>

  
    {data.isLoading ??<>Loading..</>}
    
     {flag ? <button onClick={handler}>Fetch API</button>:<>
     { data.products && data.products.map((e)=>(
        <div key={e.id}>
       <div>{e.title}</div> 
        </div>
    ))} 
     </>}
      </>
   
  )
}

export default FetchApi
