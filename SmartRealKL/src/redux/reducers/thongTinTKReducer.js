import {FETCH_SUCCEESED_THONGTIN_TK,FETCH_TK,FETCH_SUCCEESED,FETCH_FAILED,LOADING_FALSE,LOADING_TRUE} from '../actions/actionsType';
import { connect } from 'react-redux';


const defaultState={
   
    loading:'n/n',
    idThongTinTK:'',
    ketqua:'Chưa có kết quả',
    thongtinTK:[]
}
const thongTinTKReducers =(state=defaultState,action)=>{
    switch(action.type){
        
        case FETCH_SUCCEESED_THONGTIN_TK://lấy từ serve về
            return {...state, ketqua:'thanhcong',thongtinTK:action.receivedThongTinTK,idThongTinTK:action.receivedThongTinTK[0].IDThongTinTaiKhoan};
        
        case LOADING_TRUE:
            return{...state,loading:"true"};
        case LOADING_FALSE:
            return{...state,loading:"false"};
        default:
            return state;
    }
}
export default thongTinTKReducers;