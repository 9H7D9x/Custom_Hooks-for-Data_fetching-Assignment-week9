import axios from 'axios'
import { useEffect, useState } from 'react'

const useDataFetchingHook = (n) => {
  const [todos, setTodos] = useState([]);
  const [loading,setLoading] =useState(true);

  useEffect(() => {
   const value= setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
    },n*1000)

    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })

     return ()=>{
      clearInterval(value)
     } 
  }, [n])

  return {todos,loading};

  // return (
  //   <div>DataFetchingHook</div>
  // )
}

export default useDataFetchingHook