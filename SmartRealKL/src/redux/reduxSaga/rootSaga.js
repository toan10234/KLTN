//import {delay} from 'redux-saga'
import {all,fork,race} from 'redux-saga/effects';
import {watchfetchTaiKhoan} from './taiKhoanSaga';
import {watchfetchCanHo} from './canhoSaga';
import {watchfetchBinhLuan} from './binluanSaga';
import {watchBinhLuan} from './binluanSaga';
import {watchfetchViTri} from './viTriSaga';
import {watchBtnYeuThich} from './yeuThichSaga';
import {watchDeleteYeuThich} from './yeuThichSaga';
import {watchTimKiemCanHo} from './canhoSaga';
import {watchVitriChiTiet,watchEditVitriChiTiet} from './vitriChitietSaga';
import {watchHoSoPhapLy} from './hoSoPhapLySaga';
import {watchMatBang} from './matBangSaga';
import {watchTienIchKhu} from './tienIchkhuSaga';
import {watchfetchDangKi1} from './dangki1Saga';
import {watchfetchDangKi2} from './dangki1Saga';
import {watchfetchDoiMatKhau} from './doiMatKhauSaga';
import {watchfetchDoiThongTin} from './doiThongTinSaga';
import {watchfetchThemCanHo} from './canhoSaga';
import {watchfetchCanHoTheoID} from './canhoSaga';
import {watchfetchSuaCanHo,watchfetchXoaCanHo} from './canhoSaga';
import {watchfetDatCoc} from './datCocSaga';
import {watchfetchCanHoTheoIDchitiet} from './canhoSaga';
export default function* rootSaga(){
    yield all( [
        fork(watchfetchTaiKhoan),
        fork(watchfetchCanHo),
        fork(watchfetchBinhLuan),
        fork(watchBinhLuan),
        fork(watchfetchViTri),
        fork(watchBtnYeuThich),
        fork(watchDeleteYeuThich),
        fork(watchTimKiemCanHo),
        fork(watchVitriChiTiet),
        fork(watchHoSoPhapLy),
        fork(watchMatBang),
        fork(watchTienIchKhu),
        fork(watchfetchDangKi1),
        fork(watchfetchDangKi2),
        fork(watchfetchDoiMatKhau),
        fork(watchfetchDoiThongTin),
        fork(watchfetchThemCanHo),
        fork(watchfetchCanHoTheoID),
        fork(watchfetchSuaCanHo),
        fork(watchfetchXoaCanHo),
        fork(watchEditVitriChiTiet),
        fork(watchfetDatCoc),
        fork(watchfetchCanHoTheoIDchitiet),
    ])
}