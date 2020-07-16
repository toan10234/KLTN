import {routerAPI} from './Router'

export async function fetchData(inputIDCanHo){
    try{
        const urlGetBinhLuan=`${routerAPI}/binhluan/${inputIDCanHo}}`;
        const response=await fetch(urlGetBinhLuan);
        const dataRecied=await response.json();
        console.log(`sau khi lay data binh luan ${JSON.stringify(dataRecied)}`)
        console.log(`id can ho khi lay data binh luan ${inputIDCanHo}`)
        //console.log(`repone: ${dataRecied}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}

export async function putNewBinhLuan(inputBinhLuan){
    try{
        const formData = new URLSearchParams();
        formData.append('idthongtintaikhoan', inputBinhLuan.idThongTinTK);
        formData.append('noidung', inputBinhLuan.comment);
        formData.append('thoigianbinhluan', inputBinhLuan.date);
        console.log(`inputidcanho saga : ${inputBinhLuan.idCanHoBL}`)
        console.log(`ngay thang saga : ${inputBinhLuan.date}`)
        console.log(`tithongtinTK saga : ${inputBinhLuan.idThongTinTK}`)
        console.log(`comment saga : ${inputBinhLuan.comment}`)
        const urlGetBinhLuan=`${routerAPI}/binhluan/${inputBinhLuan.idCanHoBL}}`;
        
        const response=await fetch(urlGetBinhLuan,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              authorization:`bearer ${inputBinhLuan.token}`
            },
            body:formData.toString(),
           // json: true,
    });
        const dataRecied=await response.json();
        console.log(`sau khi binh luan ${JSON.stringify(dataRecied)}`)
        //console.log(`repone: ${dataRecied}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}