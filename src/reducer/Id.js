const initialstate = 0;
export const changethenumbe = (state=initialstate, action) =>{
    switch(action.type){
        case "increment":return state+1;
        case "Decriment":return state-1;
        default:return state;
    }
}