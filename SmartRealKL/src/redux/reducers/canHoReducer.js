import {DANG_NHAP,FETCH_FAILED_CANHO,FETCH_SUCCEESED_CANHO,FETCH_TK,FETCH_SUCCEESED,FETCH_FAILED,LOADING_FALSE,LOADING_TRUE,TO_BINH_LUAN, FETCH_SUCCEESED_CANHOID, ACTION_GOTO_CHITIET} from '../actions/actionsType';



const defaultState={
    

    err:'',
    ketqua:'Chưa có kết quả',
    mang:[],
    idCanHo:'',
     // data.tencanho,data.hinhanh,data.thongtin,data.giatien,data.diachi,
        // data.dientich,data.chieudai,data.chieurong,
        // data.sotang,data.phongngu,data.chodexe
    tencanho:'',hinhanh:'',thongtin:'',giatien:'',diachi:'',dientich:'',
    chieudai:'',chieurong:'',sotang:'',phongngu:'',chodexe:'',
}
const canHoReducers =(state=defaultState,action)=>{
    switch(action.type){
        case TO_BINH_LUAN:
            return {...state,idCanHo:action.inputIDCanHo};
        case FETCH_SUCCEESED_CANHO://lấy từ serve về
            return {...state, ketqua:'thanhcong',mang:action.receivedCanHo};
        case ACTION_GOTO_CHITIET:
            return {...state,idCanHo:action.inputIDCanHo}
        case FETCH_FAILED_CANHO:
            return {...state ,ketqua:"that bai"};
        case FETCH_SUCCEESED_CANHOID:
            return { ...state,idCanHo:action.receivedCanHoTheoID[0].IDCanHo,tencanho:action.receivedCanHoTheoID[0].TenCanHo,hinhanh:action.receivedCanHoTheoID[0].HinhAnh,
            thongtin:action.receivedCanHoTheoID[0].ThongTin,giatien:action.receivedCanHoTheoID[0].GiaTien,diachi:action.receivedCanHoTheoID[0].DiaChi,
            dientich:action.receivedCanHoTheoID[0].DienTich,chieudai:action.receivedCanHoTheoID[0].ChieuDai,chieurong:action.receivedCanHoTheoID[0].ChieuRong,
            sotang:action.receivedCanHoTheoID[0].SoTang,phongngu:action.receivedCanHoTheoID[0].PhongNgu,chodexe:action.receivedCanHoTheoID[0].ChoDeXe}
        default:
            return state;
    }
}
export default canHoReducers;