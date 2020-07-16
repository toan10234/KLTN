import {FETCH_SUCCEESED_THONGTIN_TK,FETCH_TK,FETCH_SUCCEESED,FETCH_FAILED,LOADING_FALSE,LOADING_TRUE, FETCH_SUCCEESED_YEUTHICH} from '../actions/actionsType';
import { connect } from 'react-redux';


const defaultState={
   
    yeuThich:[]
}
const yeuThichReducers =(state=defaultState,action)=>{
    switch(action.type){
        
        case FETCH_SUCCEESED_YEUTHICH://lấy từ serve về
            return {...state, yeuThich:action.receivedYeuThich};
        

        default:
            return state;
    }
}
export default yeuThichReducers;