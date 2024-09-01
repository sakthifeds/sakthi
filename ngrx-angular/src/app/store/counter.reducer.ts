export const counterReducer = (state=7, action:any)=> {
    switch(action.type){
        case "INCREMENT":{
        return state +1
        }

        default:
            return state

    }
}