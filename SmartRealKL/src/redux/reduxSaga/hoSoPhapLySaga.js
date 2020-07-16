import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
import { FETCH_SUCCEESED_VITRI_CHITIET,ACTION_GOTO_CHITIET, DANG_NHAP,LOADING_TRUE,LOADING_FALSE, FETCH_SUCCEESED_BINHLUAN ,TO_BINH_LUAN,BINH_LUAN, FETCH_SUCCEESED_HOSOPHAPLY} from '../actions/actionsType';

import { fetchData } from './api/APIhoSoPhapLy';


function* fetchDataHoSoPhapLy(action){
    try{
        const receivedHoSoPhapLy=yield fetchData(action.IDCanHo);
        yield put({type:FETCH_SUCCEESED_HOSOPHAPLY,receivedHoSoPhapLy});
        console.log(`sau khi lay data ${JSON.stringify(receivedHoSoPhapLy)}`)
       // yield delay(1000)
    }catch(error){
        console.log('không thể lấy dữu liệu Ho So Phap Ly');
        yield delay(1000);
    }
}
export function* watchHoSoPhapLy(){
    yield takeLatest(ACTION_GOTO_CHITIET,fetchDataHoSoPhapLy)
}