import {routerAPI} from './Router'


export async function fetchData(inputDoiThongTin){
    try{
       
        const formData = new URLSearchParams();
        //formData.append('idThongTinTK', inputDoiThongTin.idThongTinTK);
        formData.append('hovaten', inputDoiThongTin.hovaten);
        formData.append('email', inputDoiThongTin.email);
        formData.append('sodienthoai', inputDoiThongTin.sodienthoai);
        formData.append('diachi', inputDoiThongTin.diachi);
        console.log(` id tong tin tk ${inputDoiThongTin.idTK}`)
        console.log(` token tong tin tk ${inputDoiThongTin.token}`)
        console.log(` email tong tin tk ${inputDoiThongTin.email}`)
        const urlDoiThongTin=`${routerAPI}/thongtintaikhoan/${inputDoiThongTin.idTK}`;
        
        const response=await fetch(urlDoiThongTin,{
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                  authorization:`bearer ${inputDoiThongTin.token}`
                },
                body:formData.toString(),
               // json: true,
        });
        
    
        const dataRecied=await response.json();
        console.log(`repone sau khi doi thong tin tai khoan: ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}
export async function fetchDataThongTinTK(inputDoiThongTin){
    try{
        const urlGetThongTinTK=`${routerAPI}/thongtintaikhoan/${inputDoiThongTin.idTK}}`;
        const response=await fetch(urlGetThongTinTK);
        const dataRecied=await response.json();
        console.log(`thong tin tai khoan sau khi doi ${JSON.stringify(dataRecied)}`)
        //console.log(`repone: ${dataRecied}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}