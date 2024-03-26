
import React from 'react';
import useDataFetchingHook from './useDataFetchingHook'
import useOnlineHook from "./useOnlineHook"

function App() {
  const {todos,loading}=useDataFetchingHook(10);
  const isOnline=useOnlineHook(5);
  if(loading){
    return<div>Loading...</div>}

    
  return (
    <>
      {isOnline ? "You are online yay!" : "You are not online"}
      {todos.map(todo => <Track todo={todo} />)}
      
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App
 
 