
import {routerAPI} from './Router'

import axios from 'axios';

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