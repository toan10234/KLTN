
import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
import { FETCH_SUCCEESED_THONGTIN_TK,FETCH_SUCCEESED_DANGNHAP, FETCH_FAILED_DANGNHAP, DANG_NHAP,LOADING_TRUE,LOADING_FALSE, FETCH_SUCCEESED_YEUTHICH } from '../actions/actionsType';
import { fetchData } from './api/Api2';
import {fetchDataThongTinTK} from './api/APIthongTinTK'
import {fetchDataYeuThich} from './api/APIyeuThich'
function* fetchTaiKhoan(action){
    try{
        yield put({type:LOADING_TRUE});
        yield delay(2000)
        const receiveddata=yield fetchData(action.inputTK);

        const idTK= receiveddata.rows[0].IDTaiKhoan;
        //console.log(`id: ${JSON.stringify(receiveddata)}`)
        console.log(`id: ${JSON.stringify(idTK)}`)
        console.log(`sau khi dang nhap: ${JSON.stringify(receiveddata)}`)
        yield put({type:FETCH_SUCCEESED_DANGNHAP,receiveddata});
        
        const receivedThongTinTK=yield fetchDataThongTinTK(idTK);
        yield put({type:FETCH_SUCCEESED_THONGTIN_TK,receivedThongTinTK});
        console.log(`thong tin tk: ${JSON.stringify(receivedThongTinTK)}`)
        const receivedYeuThich=yield fetchDataYeuThich(idTK);
        yield put({type:FETCH_SUCCEESED_YEUTHICH,receivedYeuThich});
        console.log(`thong yeu thich: ${JSON.stringify(receivedYeuThich)}`)
        //yield delay(5000);
        yield put({type:LOADING_FALSE});
       // yield delay(1000)
    }catch(err){
        yield put({type:LOADING_TRUE});
        // yield delay(1000);
        yield put({type:FETCH_FAILED_DANGNHAP,err});
        console.log(`sau khi dang nhap loi: ${JSON.stringify(err)}`)
        yield put({type:LOADING_FALSE});
    }
}
export function* watchfetchTaiKhoan(){
    yield takeLatest(DANG_NHAP,fetchTaiKhoan)
}
