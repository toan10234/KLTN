
import {routerAPI} from './Router'
const urlGetTK=`${routerAPI}/api/login`;

export async function fetchData(inputTK){
    try{
       
        const formData = new URLSearchParams();
        //  formData.append('grant_type', 'password');
        //  formData.append('client_id', 'entrance-app');
        formData.append('username', inputTK.username);
        formData.append('password', inputTK.password);
           
        const response=await fetch(urlGetTK,{
            
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body:formData.toString(),
               // json: true,
        });
        
    
        const dataRecied=await response.json();
        console.log(`repone sau khi dang nhap: ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}
// export async function fetchDataThongTinTK(idTK){
//     try{
//         const urlGetThongTinTK=`${routerAPI}/thongtintaikhoan/${idTK}}`;
//         const response=await fetch(urlGetThongTinTK);
//         const dataRecied=await response.json();
//         console.log(` ${JSON.stringify(dataRecied)}`)
//         //console.log(`repone: ${dataRecied}`)
//         return dataRecied;
//     }catch(e){
//         console.log(e);
//     }
// }
    // const response=await axios(urlGetTK,{
            
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     data:JSON.stringify({
        //                     username: "vanb",
        //                     password: "123",
        //                 })
    // });
     // const details = {
        //     'username': 'toandao',
        //     'password': '123',
        //     //'grant_type': 'password'
        // };
        
        // const formBody = [];
        // for (const property in details) {
        //     const encodedKey = encodeURIComponent(property);
        //     const encodedValue = encodeURIComponent(details[property]);
        //   formBody.push(encodedKey + "=" + encodedValue);
        // }
        //  formBody = formBody.join("&");