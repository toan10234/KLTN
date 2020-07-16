import {LOADING_FALSE,LOADING_TRUE, FETCH_SUCCEESED_VITRI_CHITIET, FETCH_SUCCEESED_BINHLUAN, TO_BINH_LUAN, BINH_LUAN} from '../actions/actionsType';


const defaultState={
    caodo:0,
    vido:0,
    viTriCT:[],
    idCanHo:''
}
const vitriChiTietReducers =(state=defaultState,action)=>{
    switch(action.type){
        case FETCH_SUCCEESED_VITRI_CHITIET://lấy từ serve về
            return {...state, viTriCT:action.receivedViTriChiTiet,
                caodo:action.receivedViTriChiTiet[0].latitude,
                vido:action.receivedViTriChiTiet[0].longitude};
      
        default:
            return state;
    }
}
export default vitriChiTietReducers;