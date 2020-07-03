import{BINH_LUAN,FETCH_SUCCEESED_YEUTHICH,DANG_NHAP,FETCH_SUCCEESED,FETCH_FAILED, FETCH_FAILED_CANHO,FETCH_SUCCEESED_CANHO, TO_BINH_LUAN,FETCH_SUCCEESED_BINHLUAN}from './actionsType';

export const DangNhapAction =(inputTK)=>{
    return{
        type:DANG_NHAP,
        inputTK
    }
}
export const ToBinhLuanAction =(inputIDCanHo)=>{
    return{
        type:TO_BINH_LUAN,
        inputIDCanHo
    }
}
export const BinhLuanAction =(inputCanHo)=>{
    return{
        type:BINH_LUAN,
        inputCanHo
    }
}
export const fetchSucceesedAction=(receiveddata)=>{
    return{
        type:FETCH_SUCCEESED,
        receiveddata
    }
}
export const fetchFailedAction=(error)=>{
    return{
        type:FETCH_FAILED,
        error
    }
}
export const loadingTrue=()=>{
    return{
        type:LOADING_TRUE  ,  
    }
}

export const loadingFalse=()=>{
    return{
        type:LOADING_FALSE  ,  
    }
}
export const fetchSucceesedActionCanHO=(receivedCanHo)=>{
    return{
        type:FETCH_SUCCEESED_CANHO,
        receivedCanHo
    }
}
export const fetchFailedActionCanHo=(error)=>{
    return{
        type:FETCH_FAILED_CANHO,
        error
    }
}
export const fetchSucceesedActionThongTinTk=(receivedThongTinTK)=>{
    return{
        type:FETCH_SUCCEESED_THONGTIN_TK,
        receivedThongTinTK
    }
}
export const fetchSucceesedActionYeuThich=(receivedYeuThich)=>{
    return{
        type:FETCH_SUCCEESED_YEUTHICH,
        receivedYeuThich
    }
}
export const fetchSucceesedActionBinhLuan=(receivedBinhLuan)=>{
    return{
        type:FETCH_SUCCEESED_BINHLUAN,
        receivedBinhLuan
    }
}
