import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './icecreamSlice';
import { useAppSElector,useAppDispatch } from '../../hooks';

export const IcecreamView = () => {
    const numofcakes=  useAppSElector((state:any)=>state.icecream.numofIcecreams)
 const dispatch=  useAppDispatch()
 const [value,setvalue]=useState(0)
  return (
    <><div>icecreamView</div><div>
          <h2>Number of icecream-{numofcakes}</h2>
          <button onClick={()=>dispatch(ordered())}>Order icecream</button>
          <input type='number' value={value} onChange={(e)=>setvalue(parseInt(e.target.value))} />
          <button  onClick={()=>dispatch(restocked(value))}>restock icecream</button>
      </div></>
  )
}
