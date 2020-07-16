import {routerAPI} from './Router'

export async function fetchData(IDCanHo){
    try{
        const urlGetViTriChiTiet=`${routerAPI}/vitri/${IDCanHo}}`;
        const response=await fetch(urlGetViTriChiTiet,{
            method:'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
               
              },
        });
        const dataRecied=await response.json();
        console.log(`sau khi lay data Vi Chi Chi Tiet ${JSON.stringify(dataRecied)}`)
        console.log(`id can ho khi lay data VitriChi Tiet ${JSON.stringify(IDCanHo)}`)
        //console.log(`repone: ${dataRecied}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}
export async function PostViTriChiTiet(inputViTriChiTiet){
    try{
        const formData = new URLSearchParams();
        console.log(`vi do can ho edit vitri saga : ${inputViTriChiTiet.vido}`)
        console.log(`vi do can ho edit vitri saga : ${inputViTriChiTiet.token}`)
        formData.append('longitude', inputViTriChiTiet.vido);
        formData.append('latitude', inputViTriChiTiet.caodo);
     
        // console.log(`id can ho tìm kiếm saga : ${inputBtnYeuThich.IDCanHo}`)
        // console.log(`idTK tìm kiếm saga : ${inputBtnYeuThich.idTK}`)
        const urledit=`${routerAPI}/editvitrichitiet/${inputViTriChiTiet.IDCanHo}`;
        
        const response=await fetch(urledit,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              authorization:`bearer ${inputViTriChiTiet.token}`
            },
            body:formData.toString(),
           // json: true,
    });
        const dataRecied=await response.json();
        console.log(`sau khi bam edit vi tri chi tiet ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}