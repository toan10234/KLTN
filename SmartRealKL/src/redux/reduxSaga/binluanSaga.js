
import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
// import { Api } from './api/Api3';
import { FETCH_SUCCEESED_CANHO, FETCH_FAILED_CANHO, DANG_NHAP,LOADING_TRUE,LOADING_FALSE, FETCH_SUCCEESED_BINHLUAN ,TO_BINH_LUAN,BINH_LUAN} from '../actions/actionsType';
//import getTaiKhoanFromApi from './api/Api';
import { fetchData ,putNewBinhLuan} from './api/APIbinhLuan';


function* fetchDataBinhLuan(action){
    try{
        yield put({type:LOADING_TRUE});
      
        const receivedBinhLuan=yield fetchData(action.inputIDCanHo);
        
        yield put({type:FETCH_SUCCEESED_BINHLUAN,receivedBinhLuan});
        yield put({type:LOADING_FALSE});
       // yield delay(1000)
    }catch(error){
        yield put({type:LOADING_TRUE});
        console.log('đi đến trang bình luận');
        yield delay(1000);
        yield put({type:LOADING_FALSE});
    }
}
function* fetchNewBinhLuan(action){
    try{
        yield put({type:LOADING_TRUE});
      
        const receivedBinhLuan=yield putNewBinhLuan(action.inputIDCanHo);
        
        yield put({type:FETCH_SUCCEESED_BINHLUAN,receivedBinhLuan});
        yield put({type:TO_BINH_LUAN});
        yield put({type:LOADING_FALSE});
       // yield delay(1000)
    }catch(error){
        console.log('không thể bình luận');
    }
}



 function* watchfetchBinhLuan(){
    yield takeLatest(TO_BINH_LUAN,fetchDataBinhLuan)
}
function* watchBinhLuan(){
    yield takeLatest(BINH_LUAN,fetchNewBinhLuan)
}
export default watchfetchBinhLuan;