import {routerAPI} from './Router'
const urlDoiMatKhau=`${routerAPI}/doimatkhau`;

export async function fetchData(inputDoiMatKhau){
    try{
       
        const formData = new URLSearchParams();
        formData.append('idtaikhoan', inputDoiMatKhau.idTK);
        formData.append('password', inputDoiMatKhau.newpassword);
        formData.append('token', inputDoiMatKhau.token);
           
        const response=await fetch(urlDoiMatKhau,{
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                  authorization:`bearer ${inputDoiMatKhau.token}`
                },
                body:formData.toString(),
               // json: true,
        });
        
    
        const dataRecied=await response.json();
        console.log(`repone sau khi doi mat khau: ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}