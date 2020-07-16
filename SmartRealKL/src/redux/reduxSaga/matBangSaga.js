import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
import { FETCH_SUCCEESED_VITRI_CHITIET,ACTION_GOTO_CHITIET, DANG_NHAP,LOADING_TRUE,LOADING_FALSE, FETCH_SUCCEESED_BINHLUAN ,TO_BINH_LUAN,BINH_LUAN, FETCH_SUCCEESED_MATBANG} from '../actions/actionsType';

import { fetchData } from './api/APImatBang';


function* fetchDataMatBang(action){
    try{
        const receivedMatBang=yield fetchData(action.IDCanHo);
        
        yield put({type:FETCH_SUCCEESED_MATBANG,receivedMatBang});
        console.log(`sau khi lay data ${JSON.stringify(receivedMatBang)}`)
       // yield delay(1000)
    }catch(error){
        console.log('không thể lấy dữu liệu mat bang');
        yield delay(1000);
    }
}
export function* watchMatBang(){
    yield takeLatest(ACTION_GOTO_CHITIET,fetchDataMatBang)
}