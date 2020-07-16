
import {routerAPI} from './Router'


export async function fetchDataThongTinTK(idTK){
    try{
        const urlGetThongTinTK=`${routerAPI}/thongtintaikhoan/${idTK}}`;
        const response=await fetch(urlGetThongTinTK);
        const dataRecied=await response.json();
        console.log(`thong tin tai khoan ${JSON.stringify(dataRecied)}`)
        //console.log(`repone: ${dataRecied}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}