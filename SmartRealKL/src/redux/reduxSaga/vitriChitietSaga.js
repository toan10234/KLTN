import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
import { FETCH_SUCCEESED_VITRI_CHITIET,ACTION_GOTO_CHITIET, DANG_NHAP,LOADING_TRUE,LOADING_FALSE, FETCH_SUCCEESED_BINHLUAN ,TO_BINH_LUAN,BINH_LUAN, ACTION_EDIT_VITRICHITIET} from '../actions/actionsType';

import { fetchData,PostViTriChiTiet } from './api/APIViTriChitiet';


function* fetchDataVitriChiTiet(action){
    try{
        const receivedViTriChiTiet=yield fetchData(action.IDCanHo);
        
        yield put({type:FETCH_SUCCEESED_VITRI_CHITIET,receivedViTriChiTiet});
        console.log(`sau khi lay data ${JSON.stringify(receivedViTriChiTiet)}`)
       // yield delay(1000)
    }catch(error){
        console.log('không thể lấy dữu liệu vi tri chi tiet');
        yield delay(1000);
    }
}
export function* watchVitriChiTiet(){
    yield takeLatest(ACTION_GOTO_CHITIET,fetchDataVitriChiTiet)
}

function* fetchDataEditvitrichitiet(action){
    try{
        const receivededitViTriChiTiet=yield PostViTriChiTiet(action.inputViTriChiTiet);
        // const receivedViTriChiTiet=yield fetchData(action.IDCanHo);
        
        // yield put({type:FETCH_SUCCEESED_VITRI_CHITIET,receivedViTriChiTiet});
        // console.log(`sau khi lay data vitri chi tiet ${JSON.stringify(receivedViTriChiTiet)}`)
       // yield delay(1000)
    }catch(error){
        console.log('không thể lấy dữu liệu vi tri chi tiet');
       // yield delay(1000);
    }
}
export function* watchEditVitriChiTiet(){
    yield takeLatest(ACTION_EDIT_VITRICHITIET,fetchDataEditvitrichitiet)
}