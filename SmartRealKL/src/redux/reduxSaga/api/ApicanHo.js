
import {routerAPI} from './Router'
const urlGetTK=`${routerAPI}/canho`;

export async function fetchData(){
    try{   
        const response=await fetch(urlGetTK);
        const dataRecied=await response.json();
        console.log(`can ho: ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}

export async function fetchDataIDCanHo(imputIDCanHo){
    try{   
        const urlGETCanHoID=`${routerAPI}/canho/${imputIDCanHo}`;
        const response=await fetch(urlGETCanHoID);
        const dataRecied=await response.json();
        console.log(`can ho theo id: ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}
export async function PostCanHo(inputThemCanHo){
    try{
       
        const formData = new URLSearchParams();
        // data.tencanho,data.hinhanh,data.thongtin,data.giatien,data.diachi,
        // data.dientich,data.chieudai,data.chieurong,
        // data.sotang,data.phongngu,data.chodexe
         formData.append('tencanho', inputThemCanHo.tencanho);
         formData.append('hinhanh', inputThemCanHo.hinhanh);
         formData.append('thongtin', inputThemCanHo.thongtin);
         formData.append('giatien', inputThemCanHo.giatien);
         formData.append('diachi', inputThemCanHo.diachi);
         formData.append('dientich', inputThemCanHo.dientich);
         formData.append('chieudai', inputThemCanHo.chieudai);
         formData.append('chieurong', inputThemCanHo.chieurong);
         formData.append('phongngu', inputThemCanHo.phongngu);
         formData.append('chodexe', inputThemCanHo.chodexe);
   
        const urlThemThongTinTK=`${routerAPI}/canho/`;
        const response=await fetch(urlThemThongTinTK,{
            
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                  authorization:`bearer ${inputThemCanHo.token}`
                },
                body:formData.toString(),
               // json: true,
        });
        const dataRecied=await response.json();
        console.log(`repone them can ho: ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}

export async function PutCanHo(inputSuaCanHo){
    try{
       
        const formData = new URLSearchParams();
        // data.tencanho,data.hinhanh,data.thongtin,data.giatien,data.diachi,
        // data.dientich,data.chieudai,data.chieurong,
        // data.sotang,data.phongngu,data.chodexe
         formData.append('tencanho', inputSuaCanHo.tencanho);
         formData.append('hinhanh', inputSuaCanHo.hinhanh);
         formData.append('thongtin', inputSuaCanHo.thongtin);
         formData.append('giatien', inputSuaCanHo.giatien);
         formData.append('diachi', inputSuaCanHo.diachi);
         formData.append('dientich', inputSuaCanHo.dientich);
         formData.append('chieudai', inputSuaCanHo.chieudai);
         formData.append('chieurong', inputSuaCanHo.chieurong);
         formData.append('phongngu', inputSuaCanHo.phongngu);
         formData.append('chodexe', inputSuaCanHo.chodexe);
         formData.append('sotang', inputSuaCanHo.sotang);
   
        const urlsuaCanHo=`${routerAPI}/canho/${inputSuaCanHo.idcanho}`;
        const response=await fetch(urlsuaCanHo,{
            
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                  authorization:`bearer ${inputSuaCanHo.token}`
                },
                body:formData.toString(),
               // json: true,
        });
        const dataRecied=await response.json();
        console.log(`repone sua can ho: ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}
export async function DeleteCanHo(inputIDCanHo){
    try{
      
        const urlDeleteteCanHo=`${routerAPI}/canho/${inputIDCanHo.IDCanHo}}`;
        const response=await fetch(urlDeleteteCanHo,{
            method: 'Delete',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              authorization:`bearer ${inputIDCanHo.token}`
            },
            
        });
        const dataRecied=await response.json();
        console.log(` Xoa Can ho ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}