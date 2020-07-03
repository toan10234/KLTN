
import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
// import { Api } from './api/Api3';
import { FETCH_SUCCEESED_CANHO, FETCH_FAILED_CANHO, DANG_NHAP,LOADING_TRUE,LOADING_FALSE } from '../actions/actionsType';
//import getTaiKhoanFromApi from './api/Api';
import { fetchData } from './api/Api3';


function* fetchCanHo(action){
    try{
        yield put({type:LOADING_TRUE});
        //const receiveddata=yield Api.getTaiKhoanFromApi();
        //const receiveddata=yield call(Api.getTaiKhoanFromApi,action.inputTk);
        //const receiveddata=yield call(fetchData);
        const receivedCanHo=yield fetchData();
        //const  data=  JSON.parse(receiveddata);
        yield put({type:FETCH_SUCCEESED_CANHO,receivedCanHo});
        yield put({type:LOADING_FALSE});
       // yield delay(1000)
    }catch(error){
        yield put({type:LOADING_TRUE});
        yield put({type:FETCH_FAILED_CANHO,error});
        yield delay(1000);
        yield put({type:LOADING_FALSE});
    }
}
 function* watchfetchCanHo(){
    yield takeLatest(DANG_NHAP,fetchCanHo)
}
export default watchfetchCanHo;