import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';
 

const HooksCakeContainer = () => {
    const numberOfCakes = useSelector((state)=>state.cake.numberOfCakes);
    const dispatch = useDispatch();

  return (
    <div>
      <h2>No of Cakes {numberOfCakes} </h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cakes</button>
    </div>
  )
}

export default HooksCakeContainer
