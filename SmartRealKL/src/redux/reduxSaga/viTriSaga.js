
import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
import { DANG_NHAP,LOADING_TRUE,LOADING_FALSE, FETCH_SUCCEESED_VITRI, FETCH_FAILED_VITRI } from '../actions/actionsType';

import { fetchDataViTri } from './api/APIViTri';


function* fetchViTri(action){
    try{
        const receivedViTri=yield fetchDataViTri();
        yield put({type:FETCH_SUCCEESED_VITRI,receivedViTri});
    }catch(error){
        yield put({type:FETCH_FAILED_VITRI,error});
        yield delay(1000);
    }
}
export function* watchfetchViTri(){
    yield takeLatest(DANG_NHAP,fetchViTri)
}
