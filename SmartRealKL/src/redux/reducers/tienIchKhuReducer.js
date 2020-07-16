import {LOADING_FALSE,LOADING_TRUE, FETCH_SUCCEESED_TIENICHKHU} from '../actions/actionsType';


const defaultState={
   
    tienich:[],
  
}
const tienIchKhuReducers =(state=defaultState,action)=>{
    switch(action.type){
        case FETCH_SUCCEESED_TIENICHKHU://lấy từ serve về
            return {...state, tienich:action.receivedTienIchKhu};
     
        default:
            return state;
    }
}
export default tienIchKhuReducers;