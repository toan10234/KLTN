import {FETCH_SUCCEESED_THONGTIN_TK,FETCH_TK,FETCH_SUCCEESED,FETCH_FAILED,LOADING_FALSE,LOADING_TRUE, FETCH_SUCCEESED_YEUTHICH, FETCH_SUCCEESED_BINHLUAN, TO_BINH_LUAN, BINH_LUAN} from '../actions/actionsType';
import { connect } from 'react-redux';


const defaultState={
   
    loading:'n/n',
    binhLuan:[],
    idCanHo:''
}
const binhLuanReducers =(state=defaultState,action)=>{
    switch(action.type){
        case TO_BINH_LUAN:
            return {...state,idCanHo:action.inputIDCanHo};
        case FETCH_SUCCEESED_BINHLUAN://lấy từ serve về
            return {...state, binhLuan:action.receivedBinhLuan};
        case BINH_LUAN:
            return {...state};
        case LOADING_TRUE:
            return{...state,loading:"true"};
        case LOADING_FALSE:
            return{...state,loading:"false"};
        default:
            return state;
    }
}
export default binhLuanReducers;