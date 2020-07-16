import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
import { FETCH_SUCCEESED_THONGTIN_TK, FETCH_FAILED_CANHO, DANG_NHAP,LOADING_TRUE,LOADING_FALSE, FETCH_SUCCEESED_BINHLUAN ,TO_BINH_LUAN,BINH_LUAN, ACTION_DOIMATKHAU, FETCH_SUCCEESED_DOIMATKHAU, ACTION_DOITHONGTIN, FETCH_SUCCEESED_DOITHONGTIN} from '../actions/actionsType';

import { fetchData ,fetchDataThongTinTK} from './api/APIdoiThongTin';


function* fetchDoiThongTin(action){
    try{
        const receivedDoiThongTin=yield fetchData(action.inputDoiThongTin);
        yield put({type:FETCH_SUCCEESED_DOITHONGTIN,receivedDoiThongTin});
       // yield delay(1000)
       const receivedThongTinTK=yield fetchDataThongTinTK(action.inputDoiThongTin);
       yield put({type:FETCH_SUCCEESED_THONGTIN_TK,receivedThongTinTK});
    }catch(error){

        console.log('không thể đổi thông tin');
       // yield delay(1000);
    }
}
export function* watchfetchDoiThongTin(){
    yield takeLatest(ACTION_DOITHONGTIN,fetchDoiThongTin)
}

// function* fetchThongTinTK(action){
//     try{
//         const receivedThongTinTK=yield fetchDataThongTinTK(action.inputDoiThongTin);
//         yield put({type:FETCH_SUCCEESED_THONGTIN_TK,receivedThongTinTK});
//         const receivedThongTinTK=yield fetchDataThongTinTK(action.inputDoiThongTin);
//         yield put({type:FETCH_SUCCEESED_THONGTIN_TK,receivedThongTinTK});
//        // yield delay(1000)
//     }catch(error){
//         console.log('khong thể lấy thong tin');
//     }
// }
// export function* watchBtnDoiThongTin(){
//     yield takeEvery(ACTION_DOITHONGTIN,fetchThongTinTK)
// }