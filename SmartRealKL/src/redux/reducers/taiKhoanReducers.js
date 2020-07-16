import {DANG_NHAP,FETCH_TK,FETCH_SUCCEESED_DANGNHAP,FETCH_FAILED_DANGNHAP,LOADING_FALSE,LOADING_TRUE} from '../actions/actionsType';
import { connect } from 'react-redux';


const defaultState={
    idTK:'',
    admin:0,
    email:'',
    loading:false,
    token:'',
    err:'',
    message:''
}
const dangNhapReducers =(state=defaultState,action)=>{
    switch(action.type){
        case DANG_NHAP:
            return {...state }
        case FETCH_SUCCEESED_DANGNHAP://lấy từ serve về
            return {...state,message:action.receiveddata.message,token:action.receiveddata.token,admin:action.receiveddata.rows[0].Admin,idTK:action.receiveddata.rows[0].IDTaiKhoan};
        case FETCH_FAILED_DANGNHAP:
            return {...state ,err:'sai mat khau'};
        case LOADING_TRUE:
            return{...state,loading:true};
        case LOADING_FALSE:
            return{...state,loading:false};
        default:
            return state;
    }
}
export default dangNhapReducers;