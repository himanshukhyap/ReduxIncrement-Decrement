export default function UsedReducer(state, Action) {

switch(Action.type){
    case "increment":return state+1;
    case "decrement":return state-1;
    default:return state;
}
 
}
