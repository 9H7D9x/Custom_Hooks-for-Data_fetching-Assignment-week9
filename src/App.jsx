
import React from 'react';
// import useDataFetchingHook from './useDataFetchingHook'
// import useOnlineHook from "./useOnlineHook"
import useMousePointerHook from './useMousePointerHook';

function App() {
  // const {todos,loading}=useDataFetchingHook(10);
  // const isOnline=useOnlineHook();
  const mousePointer=useMousePointerHook();
  // if(loading){
  //   return<div>Loading...</div>}

    
  return (
    <>
   Your mouse position is {mousePointer.x} {mousePointer.y}
      {/* {isOnline ? "You are online yay!" : "You are not online"} */}
      {/* {todos.map(todo => <Track todo={todo} />)} */}
      
    </>
  )
}

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

export default App
 
 