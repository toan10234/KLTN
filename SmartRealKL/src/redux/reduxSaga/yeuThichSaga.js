
import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
import { LOADING_TRUE,LOADING_FALSE, ACTION_BUTTON_YEUTHICH,FETCH_SUCCEESED_YEUTHICH,ACTION_DELETE_YEUTHICH} from '../actions/actionsType';
import { fetchDataYeuThich ,putYeuThich} from './api/APIyeuThich';


function* fetchNewYeuThich(action){
    try{
        yield putYeuThich(action.inputBtnYeuThich);
        const idTK=action.inputBtnYeuThich.idTK;
        console.log(`id can hotai khoan saga yeu thích :${idTK}`)
        const receivedYeuThich=yield fetchDataYeuThich(idTK);
        yield put({type:FETCH_SUCCEESED_YEUTHICH,receivedYeuThich});
       // yield delay(1000)
    }catch(error){
        console.log('không thể thêm yêu thích');
    }
}
export function* watchBtnYeuThich(){
    yield takeEvery(ACTION_BUTTON_YEUTHICH,fetchNewYeuThich)
}

function* DeleteYeuThich(action){
    try{
        yield put({type:LOADING_TRUE});
        yield putYeuThich(action.inputDeleteYeuThich);
        const idTK=action.inputDeleteYeuThich.idTK;
        console.log(`id can hotai khoan saga yeu thích :${idTK}`)
        const receivedYeuThich=yield fetchDataYeuThich(idTK);
        yield put({type:FETCH_SUCCEESED_YEUTHICH,receivedYeuThich});
        yield put({type:LOADING_FALSE});
       // yield delay(1000)
    }catch(error){
        console.log('không thể xóa yêu thích');
    }
}
export function* watchDeleteYeuThich(){
    yield takeEvery(ACTION_DELETE_YEUTHICH,DeleteYeuThich)
}
