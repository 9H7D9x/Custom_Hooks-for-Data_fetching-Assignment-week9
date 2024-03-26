

import useDataFetchingHook from './useDataFetchingHook'

function App() {
  const {todos,loading}=useDataFetchingHook(10);
  
  if(loading){
    return<div>Loading...</div>}
  return (
    <>
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
 
 