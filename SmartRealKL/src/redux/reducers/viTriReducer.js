import {FETCH_FAILED_VITRI,FETCH_SUCCEESED_VITRI,FETCH_TK,FETCH_SUCCEESED,FETCH_FAILED,LOADING_FALSE,LOADING_TRUE} from '../actions/actionsType';


const defaultState={
    
    
    err:'',
    mangViTri:[],
    
}
const viTriReducers =(state=defaultState,action)=>{
    switch(action.type){
        
        case FETCH_SUCCEESED_VITRI://lấy từ serve về
            return {...state,mangViTri:action.receivedViTri};
        case FETCH_FAILED_VITRI:
            return {...state ,err:action.err};
  
        default:
            return state;
    }
}
export default viTriReducers;