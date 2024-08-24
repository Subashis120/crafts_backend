
const reducer = (state, action) => {
    state = action.payload;
    return state;

    // if(action.type === 'deposit'){
    //     return state + action.payload;
    // }else if(action.type === 'withdraw'){

    //     if(state <= 0){
    //         alert("you have no balance left")
    //         return state;
    //     }else{
    //         return state - action.payload;
    //     }

        
    // }else{
    //     return state;
    // }
}

export default reducer;