import {routerAPI} from './Router'
export async function PutDatCoc(inputDatCoc){
    try{

        const urldatcoc=`${routerAPI}/datcoc/${inputDatCoc.idcanho}`;
        console.log(`id dat coc ${inputDatCoc.idcanho}`)
        console.log(`token dat coc ${inputDatCoc.token}`)
        const response=await fetch(urldatcoc,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              authorization:`bearer ${inputDatCoc.token}`
            },
    });
        const dataRecied=await response.json();
        console.log(`sau khi bam dat coc ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}