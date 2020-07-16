
import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
// import { Api } from './api/Api3';
import { FETCH_SUCCEESED_CANHO, FETCH_FAILED_CANHO, DANG_NHAP,LOADING_TRUE,LOADING_FALSE, FETCH_SUCCEESED_BINHLUAN ,TO_BINH_LUAN,BINH_LUAN} from '../actions/actionsType';
//import getTaiKhoanFromApi from './api/Api';
import { fetchData ,putNewBinhLuan} from './api/APIbinhLuan';


function* fetchDataBinhLuan(action){
    try{
   
      
        const receivedBinhLuan=yield fetchData(action.inputIDCanHo);
        
        yield put({type:FETCH_SUCCEESED_BINHLUAN,receivedBinhLuan});
   
       // yield delay(1000)
    }catch(error){

        console.log('đi đến trang bình luận');
       // yield delay(1000);

    }
}
export function* watchfetchBinhLuan(){
    yield takeLatest(TO_BINH_LUAN,fetchDataBinhLuan)
}

function* fetchNewBinhLuan(action){
    try{
        yield put({type:LOADING_TRUE});
      
        yield putNewBinhLuan(action.inputBinhLuan);
        
        
        const idCanHo=action.inputBinhLuan.idCanHoBL;
        
        console.log(`id can ho saga to binh luan :${idCanHo}`)
        
        const receivedBinhLuan=yield fetchData(idCanHo);
        yield put({type:FETCH_SUCCEESED_BINHLUAN,receivedBinhLuan});
        yield put({type:LOADING_FALSE});
       // yield delay(1000)
    }catch(error){
        console.log('không thể bình luận');
    }
}
export function* watchBinhLuan(){
    yield takeEvery(BINH_LUAN,fetchNewBinhLuan)
}

