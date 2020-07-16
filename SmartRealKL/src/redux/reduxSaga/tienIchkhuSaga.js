import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
import { FETCH_SUCCEESED_TIENICHKHU,ACTION_GOTO_CHITIET, DANG_NHAP,LOADING_TRUE,LOADING_FALSE, FETCH_SUCCEESED_BINHLUAN ,TO_BINH_LUAN,BINH_LUAN, FETCH_SUCCEESED_TienichKhu} from '../actions/actionsType';

import { fetchData } from './api/APItienIchKhu';


function* fetchDataTienIchKhu(action){
    try{
        const receivedTienIchKhu=yield fetchData(action.IDCanHo);
        
        yield put({type:FETCH_SUCCEESED_TIENICHKHU,receivedTienIchKhu});
        console.log(`sau khi lay data ${JSON.stringify(receivedTienIchKhu)}`)
       // yield delay(1000)
    }catch(error){
        console.log('không thể lấy dữu liệu tien ich khu');
        yield delay(1000);
    }
}
export function* watchTienIchKhu(){
    yield takeLatest(ACTION_GOTO_CHITIET,fetchDataTienIchKhu)
}