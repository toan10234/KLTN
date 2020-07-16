import{ACTION_EDIT_VITRICHITIET,ACTION_XOACANHO,ACTION_SUACANHO,FETCH_SUCCEESED_CANHOID,ACTION_GOTO_SUACANHO,ACTION_THEMCANHO,FETCH_SUCCEESED_DOITHONGTIN,FETCH_SUCCEESED_DOIMATKHAU,ACTION_DANGKI_1,FETCH_SUCCEESED_DANGKI_1,FETCH_SUCCEESED_MATBANG,BINH_LUAN,FETCH_SUCCEESED_YEUTHICH,DANG_NHAP,FETCH_SUCCEESED,FETCH_FAILED_DANGNHAP, FETCH_FAILED_CANHO,FETCH_SUCCEESED_CANHO, TO_BINH_LUAN,FETCH_SUCCEESED_BINHLUAN,FETCH_SUCCEESED_VITRI,ACTION_BUTTON_YEUTHICH,ACTION_DELETE_YEUTHICH,ACTION_BUTTON_TIMKIEM, ACTION_GOTO_CHITIET,FETCH_SUCCEESED_VITRI_CHITIET, FETCH_SUCCEESED_HOSOPHAPLY, FETCH_SUCCEESED_TIENICHKHU, FETCH_SUCCEESED_DANGKI_2, ACTION_DANGKI_2, ACTION_DOIMATKHAU, ACTION_DOITHONGTIN, ACTION_DATCOC}from './actionsType';

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
export const BinhLuanAction =(inputBinhLuan)=>{
    return{
        type:BINH_LUAN,
        inputBinhLuan
    }
}
export const fetchSucceesedAction=(receiveddata)=>{
    return{
        type:FETCH_SUCCEESED_DANGNHAP,
        receiveddata
    }
}
export const fetchFailedAction=(err)=>{
    return{
        type:FETCH_FAILED_DANGNHAP,
        err
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

export const fetchSucceesedActionBinhLuan=(receivedBinhLuan)=>{
    return{
        type:FETCH_SUCCEESED_BINHLUAN,
        receivedBinhLuan
    }
}

export const fetchSucceesedViTri=(receivedViTri)=>{
    return{
        type:FETCH_SUCCEESED_VITRI,
        receivedViTri
    }
}
export const fetchFailedActionViTri=(err)=>{
    return{
        type:FETCH_FAILED_VITRI,
        err
    }
}
//yeu thich
export const fetchSucceesedActionYeuThich=(receivedYeuThich)=>{
    return{
        type:FETCH_SUCCEESED_YEUTHICH,
        receivedYeuThich
    }
}
export const ActiondBtnYeuThich=(inputBtnYeuThich)=>{
    return{
        type:ACTION_BUTTON_YEUTHICH,
        inputBtnYeuThich
    }
}
export const ActiondDeleteYeuThich=(inputDeleteYeuThich)=>{
    return{
        type:ACTION_DELETE_YEUTHICH,
        inputDeleteYeuThich
    }
}
export const ActiondBtnTimKiem=(inputTimKiem)=>{
    return{
        type:ACTION_BUTTON_TIMKIEM,
        inputTimKiem
    }
}
export const ActionGoToChiTiet=(IDCanHo)=>{
    return{
        type:ACTION_GOTO_CHITIET,
        IDCanHo
    }
}
export const fetchSucceesViTriChiTiet=(receivedViTriChiTiet)=>{
    return{
        type:FETCH_SUCCEESED_VITRI_CHITIET,
        receivedViTriChiTiet
    }
}
export const fetchSucceesHoSoPhapLy=(receivedHoSoPhapLy)=>{
    return{
        type:FETCH_SUCCEESED_HOSOPHAPLY,
        receivedHoSoPhapLy
    }
}
export const fetchSucceesMatBang=(receivedMatBang)=>{
    return{
        type:FETCH_SUCCEESED_MATBANG,
        receivedMatBang
    }
}
export const fetchSucceesTienIchKhu=(receivedTienIchKhu)=>{
    return{
        type:FETCH_SUCCEESED_TIENICHKHU,
        receivedTienIchKhu
    }
}
export const ActionDangKi1=(inputDangKi1)=>{
    return{
        type:ACTION_DANGKI_1,
        inputDangKi1
    }
}
export const ActionDangKi2=(inputDangKi2)=>{
    return{
        type:ACTION_DANGKI_2,
        inputDangKi2
    }
}
export const fetchSucceesDangKi1=(receivedDangKi1)=>{
    return{
        type:FETCH_SUCCEESED_DANGKI_1,
        receivedDangKi1
    }
}
export const fetchSucceesDangKi2=(receivedDangKi2)=>{
    return{
        type:FETCH_SUCCEESED_DANGKI_2,
        receivedDangKi2
    }
}
export const fetchSucceesLayIDTK=(receivedIDTK)=>{
    return{
        type:FETCH_SUCCEESED_LAYIDTK,
        receivedIDTK
    }
}
export const ActionDoiMatKhau=(inputDoiMatKhau)=>{
    return{
        type:ACTION_DOIMATKHAU,
        inputDoiMatKhau
    }
}
export const fetchSucceesDoiMatKhau=(receivedDoiMatKhau)=>{
    return{
        type:FETCH_SUCCEESED_DOIMATKHAU,
        receivedDoiMatKhau
    }
}
export const ActionDoiThongTin=(inputDoiThongTin)=>{
    return{
        type:ACTION_DOITHONGTIN,
        inputDoiThongTin
    }
}
export const fetchSucceesDoiThongTin=(receivedDoiThongTin)=>{
    return{
        type:FETCH_SUCCEESED_DOITHONGTIN,
        receivedDoiThongTin
    }
}
export const ActionThemCanHo=(inputThemCanHo)=>{
    return{
        type:ACTION_THEMCANHO,
        inputThemCanHo
    }
}
export const ActionGotoSuacanHo=(inputIDCanHo)=>{
    return{
        type:ACTION_GOTO_SUACANHO,
        inputIDCanHo
    }
}

export const fetchSucceesCanHotheoID=(receivedCanHoTheoID)=>{
    return{
        type:FETCH_SUCCEESED_CANHOID,
        receivedCanHoTheoID
    }
}
export const ActionSuacanHo=(inputSuaCanHo)=>{
    return{
        type:ACTION_SUACANHO,
        inputSuaCanHo
    }
}
export const ActionXoaCanHo=(inputIDCanHo)=>{
    return{
        type:ACTION_XOACANHO,
        inputIDCanHo
    }
}

export const ActionEditViTriChiTiet=(inputViTriChiTiet)=>{
    return{
        type:ACTION_EDIT_VITRICHITIET,
        inputViTriChiTiet
    }
}
export const ActionDatCoc=(inputDatCoc)=>{
    return{
        type:ACTION_DATCOC,
        inputDatCoc
    }
}