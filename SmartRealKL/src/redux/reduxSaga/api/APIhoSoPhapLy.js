import {routerAPI} from './Router'

export async function fetchData(IDCanHo){
    try{
        const urlGetHoSoPhapLy=`${routerAPI}/hosophaply/${IDCanHo}}`;
        const response=await fetch(urlGetHoSoPhapLy);
        const dataRecied=await response.json();
        console.log(`sau khi lay data Ho So Phap Ly ${JSON.stringify(dataRecied)}`)
        console.log(`id can ho khi lay data Ho so Phap Ly ${JSON.stringify(IDCanHo)}`)
        //console.log(`repone: ${dataRecied}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}