import{combineReducers} from 'redux';
import dangNhapReducers from './taiKhoanReducers';
import canHoReducers from './canHoReducer';
import thongTinTKReducers from './thongTinTKReducer';
import yeuThichReducers from './yeuThichReducer';
import binhLuanReducers from './binhLuanReducer';
const allReducers =combineReducers({
   dangNhapReducers,
   canHoReducers,
   thongTinTKReducers,
   yeuThichReducers,
   binhLuanReducers
});
export default allReducers;
