import {routerAPI} from './Router'

export async function fetchData(IDCanHo){
    try{
        const urlGetTienichKhu=`${routerAPI}/tienichkhu/${IDCanHo}}`;
        const response=await fetch(urlGetTienichKhu);
        const dataRecied=await response.json();
        console.log(`sau khi lay data tien ich khu ${JSON.stringify(dataRecied)}`)
        console.log(`id can ho khi lay data tien ich khu ${JSON.stringify(IDCanHo)}`)

        return dataRecied;
    }catch(e){
        console.log(e);
    }
}