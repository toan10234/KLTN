import{combineReducers} from 'redux';
import dangNhapReducers from './taiKhoanReducers';
import canHoReducers from './canHoReducer';
import thongTinTKReducers from './thongTinTKReducer';
import yeuThichReducers from './yeuThichReducer';
import binhLuanReducers from './binhLuanReducer';
import viTriReducers from './viTriReducer';
import vitriChiTietReducers from './ViChiChiTietReducer'
import hoSoPhapLyReducers from './hoSoPhapLy';
import matBangReducers from './matBangReduccer';
import tienIchKhuReducers from './tienIchKhuReducer';
import dangkiReducers from './dangkiReducer';
const allReducers =combineReducers({
   dangNhapReducers,
   canHoReducers,
   thongTinTKReducers,
   yeuThichReducers,
   binhLuanReducers,
   viTriReducers,
   vitriChiTietReducers,
   hoSoPhapLyReducers,
   matBangReducers,
   tienIchKhuReducers,
   dangkiReducers,
});
export default allReducers;
