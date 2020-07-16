import {routerAPI} from './Router'

export async function getTimKiem(inputTimKiem){
    try{
        const formData = new URLSearchParams();
        formData.append('infor', inputTimKiem.infor);
     
        // console.log(`id can ho tìm kiếm saga : ${inputBtnYeuThich.IDCanHo}`)
        // console.log(`idTK tìm kiếm saga : ${inputBtnYeuThich.idTK}`)
        const urlTimKiem=`${routerAPI}/canho/search/`;
        
        const response=await fetch(urlTimKiem,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              authorization:`bearer ${inputTimKiem.token}`
            },
            body:formData.toString(),
           // json: true,
    });
        const dataRecied=await response.json();
        console.log(`sau khi bam tìm kiếm ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}