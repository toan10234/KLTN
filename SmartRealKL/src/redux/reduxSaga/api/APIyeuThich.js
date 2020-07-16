
import {routerAPI} from './Router'


export async function fetchDataYeuThich(idTK){
    try{
        const urlGetThongTinTK=`${routerAPI}/yeuthich/${idTK}}`;
        const response=await fetch(urlGetThongTinTK);
        const dataRecied=await response.json();
        console.log(` ${JSON.stringify(dataRecied)}`)
        //console.log(`repone: ${dataRecied}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}
export async function putYeuThich(inputBtnYeuThich){
    try{
        const formData = new URLSearchParams();
        formData.append('idcanho', inputBtnYeuThich.IDCanHo);
     
        // console.log(`id can ho yeu thich saga : ${inputBtnYeuThich.IDCanHo}`)
        // console.log(`idTK yeu thich saga : ${inputBtnYeuThich.idTK}`)
        const urlPOSTYeuThich=`${routerAPI}/yeuthich/${inputBtnYeuThich.idTK}`;
        
        const response=await fetch(urlPOSTYeuThich,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              authorization:`bearer ${inputBtnYeuThich.token}`
            },
            body:formData.toString(),
           // json: true,
    });
        const dataRecied=await response.json();
        console.log(`sau khi bam yeu thich ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}
export async function DeleteYeuThich(inputDeleteYeuThich){
    try{
        const formData = new URLSearchParams();
        formData.append('idcanho', inputDeleteYeuThich.IDCanHo);

        const urlDeleteteYeuThich=`${routerAPI}/yeuthich/${inputDeleteYeuThich}}`;
        const response=await fetch(urlDeleteteYeuThich,{
            method: 'Delete',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              authorization:`bearer ${inputDeleteYeuThich.token}`
            },
            body:formData.toString(),
        });
        const dataRecied=await response.json();
        console.log(` ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}