import {routerAPI} from './Router'

export async function fetchData(IDCanHo){
    try{
        const urlGetMatBang=`${routerAPI}/matbang/${IDCanHo}}`;
        const response=await fetch(urlGetMatBang);
        const dataRecied=await response.json();
        console.log(`sau khi lay data mat bang ${JSON.stringify(dataRecied)}`)
        console.log(`id can ho khi lay data mat bang ${JSON.stringify(IDCanHo)}`)
        //console.log(`repone: ${dataRecied}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}