import React,{useReducer} from 'react'

const initialValue ={count:0};
const reducerFunction=(state,action)=>{
    switch(action.type){
        case "Increment":
            return {count:state.cout+1}
        case "Decrement":
            return {count:state.count-1}
        case "Reset":
            return {count:0}
        default:
            return {count:0}
    }
}
const Reducer = () => {
  return (
    <div>Reducer</div>
  )
}

export default Reducer