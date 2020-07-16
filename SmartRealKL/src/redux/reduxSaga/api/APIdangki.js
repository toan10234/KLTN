
import {routerAPI} from './Router'
const urlGetTK=`${routerAPI}/api/register`;

export async function DangKi1(inputDangKi1){
    try{
       
        const formData = new URLSearchParams();
        //  formData.append('grant_type', 'password');
        //  formData.append('client_id', 'entrance-app');
        formData.append('username', inputDangKi1.username);
        formData.append('password', inputDangKi1.password);
        formData.append('email', inputDangKi1.email);
           
        const response=await fetch(urlGetTK,{
            
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body:formData.toString(),
               // json: true,
        });
        
    
        const dataRecied=await response.json();
        console.log(`repone dang ki 1: ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}

export async function getIDTaiKhoan(inputDangKi1){
    try{
       
        const formData = new URLSearchParams();
        //  formData.append('grant_type', 'password');
        //  formData.append('client_id', 'entrance-app');
        formData.append('username', inputDangKi1.username);
        formData.append('password', inputDangKi1.password);
        console.log(`password: ${JSON.stringify(inputDangKi1.password)}`)
        const urlGetIDTK=`${routerAPI}/api/getidtk`;
        const response=await fetch(urlGetIDTK,{
            
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body:formData.toString(),
               // json: true,
        });
        
        const dataReciedIDTK=await response.json();
        console.log(`repone get tk dang ki 1: ${JSON.stringify(dataReciedIDTK)}`)
        return dataReciedIDTK;
    }catch(e){
        console.log(e);
    }
}
export async function DangKi2(inputDangKi2){
    try{
       
        const formData = new URLSearchParams();
       
         formData.append('idtaikhoan', inputDangKi2.idtk);
         formData.append('hovaten', inputDangKi2.hovaten);
         formData.append('email', inputDangKi2.email);
         formData.append('sodienthoai', inputDangKi2.sodienthoai);
         formData.append('diachi', inputDangKi2.diachi);
        const urlThemThongTinTK=`${routerAPI}/api/thongTinTaiKhoan`;
        const response=await fetch(urlThemThongTinTK,{
            
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body:formData.toString(),
               // json: true,
        });
        
    
        const dataRecied=await response.json();
        console.log(`repone dang ki 2: ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}
