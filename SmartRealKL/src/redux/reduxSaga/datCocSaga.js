
import {put,takeEvery,takeLatest,delay, call} from 'redux-saga/effects';
import { FETCH_SUCCEESED_CANHO,ACTION_DANGKI_1,FETCH_SUCCEESED_DANGKI_1, FETCH_FAILED,LOADING_TRUE ,LOADING_FALSE, ACTION_DANGKI_2, FETCH_SUCCEESED_DANGKI_2, ACTION_DATCOC } from '../actions/actionsType';
import { PutDatCoc } from './api/APIdatCoc';
import {fetchData} from './api/ApicanHo';


function* fetchDatCoc(action){
    try{
      
        
        const receivedDatCoc=yield PutDatCoc(action.inputDatCoc);
        
        console.log(`lay datcoc: ${JSON.stringify(receivedDatCoc)}`);
        const receivedCanHo=yield fetchData();
        yield put({type:FETCH_SUCCEESED_CANHO,receivedCanHo});    
    }catch(err){
        console.log("khong dat coc")
    }
}
export function* watchfetDatCoc(){
    yield takeEvery(ACTION_DATCOC,fetchDatCoc)
}