import {LOADING_FALSE,LOADING_TRUE, FETCH_SUCCEESED_MATBANG} from '../actions/actionsType';


const defaultState={
   
 
    hinhAnhMatBang:[],
  
}
const matBangReducers =(state=defaultState,action)=>{
    switch(action.type){
        case FETCH_SUCCEESED_MATBANG://lấy từ serve về
            return {...state, hinhAnhMatBang:action.receivedMatBang};
       
        default:
            return state;
    }
}
export default matBangReducers;