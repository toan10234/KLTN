import {routerAPI} from './Router'

import axios from 'axios';

export async function fetchData(inputIDCanHo){
    try{
        const urlGetBinhLuan=`${routerAPI}/binhluan/${inputIDCanHo}}`;
        const response=await fetch(urlGetBinhLuan);
        const dataRecied=await response.json();
        console.log(` ${JSON.stringify(dataRecied)}`)
        //console.log(`repone: ${dataRecied}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}
export async function putNewBinhLuan(inputBinhLuan){
    try{
        const formData = new URLSearchParams();
        formData.append('idthongtintaikhoan', inputBinhLuan.idthongtintaikhoan);
        formData.append('NoiDung', inputBinhLuan.noidung);
        formData.append('ThoiGianBinhLuan', inputBinhLuan.thoigianbinhluan);

        const urlGetBinhLuan=`${routerAPI}/binhluan/${inputBinhLuan.idCanHo}}`;
        const response=await fetch(urlGetBinhLuan,{
            
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body:formData.toString(),
           // json: true,
    });
        const dataRecied=await response.json();
        console.log(` ${JSON.stringify(dataRecied)}`)
        //console.log(`repone: ${dataRecied}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}