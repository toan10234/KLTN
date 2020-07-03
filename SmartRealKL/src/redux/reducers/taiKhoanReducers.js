import {DANG_NHAP,FETCH_TK,FETCH_SUCCEESED,FETCH_FAILED,LOADING_FALSE,LOADING_TRUE} from '../actions/actionsType';
import { connect } from 'react-redux';


const defaultState={
    idTK:'',
    admin:0,
    email:'123@',
    loading:'n/n',
    token:'1',
    err:'',
    ketqua:'Chưa có kết quả',
    mang:'chua có'
}
const dangNhapReducers =(state=defaultState,action)=>{
    switch(action.type){
        case DANG_NHAP:
            return {...state }
        case FETCH_SUCCEESED://lấy từ serve về
            return {...state, ketqua:'thanhcong',mang:action.receiveddata.message,token:action.receiveddata.token,admin:action.receiveddata.rows[0].Admin,idTK:action.receiveddata.rows[0].IDTaiKhoan};
        case FETCH_FAILED:
            return {...state ,ketqua:"that bai"};
        case LOADING_TRUE:
            return{...state,loading:"true"};
        case LOADING_FALSE:
            return{...state,loading:"false"};
        default:
            return state;
    }
}
export default dangNhapReducers;