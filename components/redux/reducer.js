import { ADD_TO_CART,REMOVE_TO_CART } from "./constants";
const initialState = [];
export const reducer = (state=initialState,action)=>{
  switch(action.type){
    case ADD_TO_CART:
         return [
            ...state,
            action.payload
         ]
    case REMOVE_TO_CART :
        let result = state.filter((product)=>{
            if(product.name!==action.payload){
               return product      
            } 
        })
         return [
            ...result
         ]
    default: 
         return state
  }
}