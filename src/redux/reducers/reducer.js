const INIT_STATE ={
    carts : []
};

export const cartreducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            return {
                ...state,
                carts:[...state.carts,action.payload]
            }

            case "REM_CART":
            default :
          return state

    }
}