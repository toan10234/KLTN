
import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
// import { Api } from './api/Api3';
import { FETCH_SUCCEESED_CANHO,FETCH_SUCCEESED_CANHOID, FETCH_FAILED_CANHO, DANG_NHAP,LOADING_TRUE,LOADING_FALSE,ACTION_BUTTON_TIMKIEM, ACTION_THEMCANHO, ACTION_GOTO_SUACANHO, ACTION_SUACANHO, ACTION_XOACANHO, ACTION_GOTO_CHITIET } from '../actions/actionsType';
//import getTaiKhoanFromApi from './api/Api';
import {DeleteCanHo, fetchData,PostCanHo ,fetchDataIDCanHo,PutCanHo} from './api/ApicanHo';
import {getTimKiem} from './api/APITimKiem';


function* fetchCanHo(action){
    try{ 
        const receivedCanHo=yield fetchData();
        yield put({type:FETCH_SUCCEESED_CANHO,receivedCanHo});
    }catch(error){
        yield put({type:FETCH_FAILED_CANHO,error});
        //yield delay(1000);
    }
}
export function* watchfetchCanHo(){
    yield takeLatest(DANG_NHAP,fetchCanHo)
}
function* fetchGetIDCAnHo(action){
    try{ 
        yield delay(1000);
        const receivedCanHoTheoID=yield fetchDataIDCanHo(action.inputIDCanHo);
        console.log(`sau khi lay can ho theo id (canho saga) ${JSON.stringify(receivedCanHoTheoID)}`)
        yield put({type:FETCH_SUCCEESED_CANHOID,receivedCanHoTheoID});
    }catch(error){
        console.log("không the lấy can ho theo ID");
        //yield delay(1000);
    }
}
export function* watchfetchCanHoTheoID(){
    yield takeLatest(ACTION_GOTO_SUACANHO,fetchGetIDCAnHo)
}
function* fetchGetIDCAnHo2(action){
    try{ 
        
        const receivedCanHoTheoID=yield fetchDataIDCanHo(action.IDCanHo);
        console.log(`sau khi lay can ho theo id (canho saga) ${JSON.stringify(receivedCanHoTheoID)}`)
        yield put({type:FETCH_SUCCEESED_CANHOID,receivedCanHoTheoID});
    }catch(error){
        console.log("không the lấy can ho theo ID");
        //yield delay(1000);
    }
}
export function* watchfetchCanHoTheoIDchitiet(){
    yield takeLatest(ACTION_GOTO_CHITIET,fetchGetIDCAnHo2)
}


function* TimKiemCanHo(action){
    try{
       
        const receivedCanHo=yield getTimKiem(action.inputTimKiem);
        yield put({type:FETCH_SUCCEESED_CANHO,receivedCanHo});
        console.log(`tim kiem can ho :${JSON.stringify(receivedCanHo)}`)
      
    }catch(error){
     
        yield put({type:FETCH_FAILED_CANHO,error});
        yield delay(1000);
     
    }
}
export function* watchTimKiemCanHo(){
    yield takeLatest(ACTION_BUTTON_TIMKIEM,TimKiemCanHo)
}

function* fetchThemCanHo(action){
    try{
        const receivedThemcanHo=yield PostCanHo(action.inputThemCanHo);
        console.log(`sau khi them can ho: ${JSON.stringify(receivedThemcanHo)}`);
        const receivedCanHo=yield fetchData();
        yield put({type:FETCH_SUCCEESED_CANHO,receivedCanHo});
        console.log(`sau khi them can ho: ${JSON.stringify(receivedCanHo)}`);
       // yield delay(1000)
    }catch(err){
        yield put({type:FETCH_FAILED,err});
        //yield delay(1000);
    }
}
export function* watchfetchThemCanHo(){
    yield takeLatest(ACTION_THEMCANHO,fetchThemCanHo)
}

function* fetchSuaCanHo(action){
    try{
        const receivedSuacanHo=yield PutCanHo(action.inputSuaCanHo);
        console.log(`sau khi sua can ho: ${JSON.stringify(receivedSuacanHo)}`);
        const receivedCanHo=yield fetchData();
        yield put({type:FETCH_SUCCEESED_CANHO,receivedCanHo});
        console.log(`sau khi sua can ho: ${JSON.stringify(receivedCanHo)}`);
       // yield delay(1000)
    }catch(err){
        yield put({type:FETCH_FAILED,err});
        //yield delay(1000);
    }
}
export function* watchfetchSuaCanHo(){
    yield takeLatest(ACTION_SUACANHO,fetchSuaCanHo)
}

function* fetchXoaCanHo(action){
    try{
        const receivedxoacanHo=yield DeleteCanHo(action.inputIDCanHo);
        console.log(`sau khi xoa can ho: ${JSON.stringify(receivedxoacanHo)}`);
        const receivedCanHo=yield fetchData();
        yield put({type:FETCH_SUCCEESED_CANHO,receivedCanHo});
        console.log(`sau khi xoa can ho: ${JSON.stringify(receivedCanHo)}`);
       // yield delay(1000)
    }catch(err){
        yield put({type:FETCH_FAILED,err});
        //yield delay(1000);
    }
}
export function* watchfetchXoaCanHo(){
    yield takeLatest(ACTION_XOACANHO,fetchXoaCanHo)
}