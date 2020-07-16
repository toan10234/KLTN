import {LOADING_FALSE,LOADING_TRUE, FETCH_SUCCEESED_HOSOPHAPLY, FETCH_SUCCEESED_BINHLUAN, TO_BINH_LUAN, BINH_LUAN} from '../actions/actionsType';


const defaultState={
   
    loading:'false',
    hoso:[],
 
}
const hoSoPhapLyReducers =(state=defaultState,action)=>{
    switch(action.type){
        case FETCH_SUCCEESED_HOSOPHAPLY://lấy từ serve về
            return {...state, hoso:action.receivedHoSoPhapLy};
        case BINH_LUAN:
            return {...state};
        case LOADING_TRUE:
            return{...state,loading:"true"};
        case LOADING_FALSE:
            return{...state,loading:"false"};
        default:
            return state;
    }
}
export default hoSoPhapLyReducers;