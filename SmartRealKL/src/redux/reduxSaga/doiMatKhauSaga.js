import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
import { FETCH_SUCCEESED_CANHO, FETCH_FAILED_CANHO, DANG_NHAP,LOADING_TRUE,LOADING_FALSE, FETCH_SUCCEESED_BINHLUAN ,TO_BINH_LUAN,BINH_LUAN, ACTION_DOIMATKHAU, FETCH_SUCCEESED_DOIMATKHAU} from '../actions/actionsType';

import { fetchData } from './api/APIdoiMatKhau';


function* fetchDoiMatKhau(action){
    try{
        const receivedDoiMatKhau=yield fetchData(action.inputDoiMatKhau);
        yield put({type:FETCH_SUCCEESED_DOIMATKHAU,receivedDoiMatKhau});
       // yield delay(1000)
    }catch(error){

        console.log('không thể đổi mật khẩu');
       // yield delay(1000);
    }
}
export function* watchfetchDoiMatKhau(){
    yield takeLatest(ACTION_DOIMATKHAU,fetchDoiMatKhau)
}
