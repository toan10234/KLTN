import {FETCH_SUCCEESED_LAYIDTK,FETCH_FAILED_CANHO,FETCH_SUCCEESED_CANHO,FETCH_TK,FETCH_SUCCEESED,FETCH_FAILED,LOADING_FALSE,LOADING_TRUE,TO_BINH_LUAN} from '../actions/actionsType';



const defaultState={
    
    idTK:'',
    err:'',
    email:'',
}
const dangkiReducers =(state=defaultState,action)=>{
    switch(action.type){
    
        case FETCH_SUCCEESED_LAYIDTK://lấy từ serve về
            return {...state,idTK:action.receivedIDTK[0].IDTaiKhoan,email:action.receivedIDTK[0].Email };
      
        default:
            return state;
    }
}
export default dangkiReducers;