
import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
// import { Api } from './api/Api3';
import { FETCH_SUCCEESED_THONGTIN_TK,FETCH_SUCCEESED, FETCH_FAILED, DANG_NHAP,LOADING_TRUE,LOADING_FALSE, FETCH_SUCCEESED_YEUTHICH } from '../actions/actionsType';
//import getTaiKhoanFromApi from './api/Api';
import { fetchData } from './api/Api2';
import {fetchDataThongTinTK} from './api/APIthongTinTK'
import {fetchDataYeuThich} from './api/APIyeuThich'
function* fetchTaiKhoan(action){
    try{
        yield put({type:LOADING_TRUE});
        //const receiveddata=yield Api.getTaiKhoanFromApi();
        //const receiveddata=yield call(Api.getTaiKhoanFromApi,action.inputTk);
        //const receiveddata=yield call(fetchData);
        const receiveddata=yield fetchData(action.inputTK);
        //const  data=  JSON.parse(receiveddata);
        const idTK= receiveddata.rows[0].IDTaiKhoan;
        console.log(`id: ${JSON.stringify(receiveddata)}`)
        console.log(`id: ${JSON.stringify(idTK)}`)

        yield put({type:FETCH_SUCCEESED,receiveddata});

        //lấy thông tin chi tiết
        
        const receivedThongTinTK=yield fetchDataThongTinTK(idTK);
        yield put({type:FETCH_SUCCEESED_THONGTIN_TK,receivedThongTinTK});

        const receivedYeuThich=yield fetchDataYeuThich(idTK);
        yield put({type:FETCH_SUCCEESED_YEUTHICH,receivedYeuThich});
        yield delay(1000);
        yield put({type:LOADING_FALSE});
       // yield delay(1000)
    }catch(error){
        yield put({type:LOADING_TRUE});
        yield put({type:FETCH_FAILED,error});
        yield delay(1000);
        yield put({type:LOADING_FALSE});
    }
}
 function* watchfetchTaiKhoan(){
    yield takeLatest(DANG_NHAP,fetchTaiKhoan)
}
export default watchfetchTaiKhoan;