
import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
import { FETCH_SUCCEESED_LAYIDTK,ACTION_DANGKI_1,FETCH_SUCCEESED_DANGKI_1, FETCH_FAILED,LOADING_TRUE ,LOADING_FALSE, ACTION_DANGKI_2, FETCH_SUCCEESED_DANGKI_2 } from '../actions/actionsType';
import { DangKi1,getIDTaiKhoan,DangKi2 } from './api/APIdangki';


function* fetchDangKi1(action){
    try{
        yield put({type:LOADING_TRUE});
        
        const receivedDangKi1=yield DangKi1(action.inputDangKi1);
        yield put({type:FETCH_SUCCEESED_DANGKI_1,receivedDangKi1});

        const receivedIDTK=yield getIDTaiKhoan(action.inputDangKi1);
        yield put({type:FETCH_SUCCEESED_LAYIDTK,receivedIDTK});
        console.log(`lay tk: ${JSON.stringify(receivedIDTK)}`);
        yield put({type:LOADING_FALSE});
       // yield delay(1000)
    }catch(err){
        yield put({type:LOADING_TRUE});
        yield put({type:FETCH_FAILED,err});
        yield delay(1000);
        yield put({type:LOADING_FALSE});
    }
}
export function* watchfetchDangKi1(){
    yield takeEvery(ACTION_DANGKI_1,fetchDangKi1)
}

function* fetchDangKi2(action){
    try{
        const receivedDangKi2=yield DangKi2(action.inputDangKi2);
        yield put({type:FETCH_SUCCEESED_DANGKI_2,receivedDangKi2});
        console.log(`lay tk: ${JSON.stringify(receivedDangKi2)}`);
       // yield delay(1000)
    }catch(err){
        yield put({type:FETCH_FAILED,err});
        yield delay(1000);

    }
}
export function* watchfetchDangKi2(){
    yield takeEvery(ACTION_DANGKI_2,fetchDangKi2)
}
