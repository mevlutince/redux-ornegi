
import { data } from "../data";

const initial_state={
    bookList:data,
    cart:[]
}
export const reducer =(state=initial_state,action)=>{ // sepeteEkle metodundan gelecek
   switch(action.type){
       case "SEPETE_EKLE":
           return{...state,cart:[...state.cart,action.payload]}

           default: return state
   }
    return state;
}