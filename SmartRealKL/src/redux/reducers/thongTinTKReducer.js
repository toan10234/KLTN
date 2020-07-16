import {FETCH_SUCCEESED_THONGTIN_TK,FETCH_TK,FETCH_SUCCEESED,FETCH_FAILED,LOADING_FALSE,LOADING_TRUE} from '../actions/actionsType';
import { connect } from 'react-redux';


const defaultState={
   
    idThongTinTK:'',
    thongtinTK:[],
    hovaten:'',
    sodienthoai:'',
    email:'',
    diachi:'',
}
const thongTinTKReducers =(state=defaultState,action)=>{
    switch(action.type){
        
        case FETCH_SUCCEESED_THONGTIN_TK://lấy từ serve về
            return {...state, thongtinTK:action.receivedThongTinTK,
                
                hovaten:action.receivedThongTinTK[0].HoVaTen,
                sodienthoai:action.receivedThongTinTK[0].SoDienThoai,
                email:action.receivedThongTinTK[0].Email,
                diachi:action.receivedThongTinTK[0].DiaChi,
                idThongTinTK:action.receivedThongTinTK[0].IDThongTinTaiKhoan};
        
      
        default:
            return state;
    }
}
export default thongTinTKReducers;