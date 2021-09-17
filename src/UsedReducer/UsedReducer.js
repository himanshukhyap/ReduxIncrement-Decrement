export default function UsedReducer(state, dispatch) {

switch(dispatch.type){
    case "increment":return state+1;
    case "decrement":return state-1;
    default:return state;
}
 
}
