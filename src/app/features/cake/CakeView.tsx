import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';
import { useAppSElector,useAppDispatch } from '../../hooks';
export const CakeView = () => {
  const numofcakes = useAppSElector((state: any) => state.cake.numCakes);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>Cake View</div>
      <div>
        <h2>Number of cakes - {numofcakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
      </div>
    </>
  );
};
