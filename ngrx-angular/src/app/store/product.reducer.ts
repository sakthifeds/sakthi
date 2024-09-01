import { Products } from "./products";

const initialState = [{id:1,name:"angular book"}]

export const productReducer = (state:Array<Products>=initialState, action:any)=> {
    console.warn("actoion reducer",action)
    console.warn("state reducer",state)
    console.warn("action.payloadr",action.payload)
    switch(action.type){
        case "ADD":{
        return [...state, {...action.payload}]
        }

        case "REMOVE":{
         return state.filter((p:Products)=>p.id !== action.payload.id)
        }


        default:
            return state

    }
}