import {DANG_NHAP,FETCH_FAILED_CANHO,FETCH_SUCCEESED_CANHO,FETCH_TK,FETCH_SUCCEESED,FETCH_FAILED,LOADING_FALSE,LOADING_TRUE} from '../actions/actionsType';
import { connect } from 'react-redux';


const defaultState={
    
    loading:'n/n',
    
    err:'',
    ketqua:'Chưa có kết quả',
    mang:[]
}
const canHoReducers =(state=defaultState,action)=>{
    switch(action.type){
        case DANG_NHAP:
            return {...state }
        case FETCH_SUCCEESED_CANHO://lấy từ serve về
            return {...state, ketqua:'thanhcong',mang:action.receivedCanHo};
        case FETCH_FAILED_CANHO:
            return {...state ,ketqua:"that bai"};
        case LOADING_TRUE:
            return{...state,loading:"true"};
        case LOADING_FALSE:
            return{...state,loading:"false"};
        default:
            return state;
    }
}
export default canHoReducers;