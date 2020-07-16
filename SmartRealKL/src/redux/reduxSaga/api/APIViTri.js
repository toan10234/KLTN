
import {routerAPI} from './Router'

const urlGetViTri=`${routerAPI}/vitri`;

export async function fetchDataViTri(){
    try{   
        const response=await fetch(urlGetViTri);
        const dataRecied=await response.json();
        console.log(`Vitri: ${JSON.stringify(dataRecied)}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}