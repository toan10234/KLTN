
import {routerAPI} from './Router'
const urlGetTK=`${routerAPI}/canho`;
import axios from 'axios';

export async function fetchData(){
    try{
       
        // const formData = new URLSearchParams();
        // //  formData.append('grant_type', 'password');
        // //  formData.append('client_id', 'entrance-app');
        // formData.append('username', inputTK.username);
        // formData.append('password', inputTK.password);
           
        const response=await fetch(urlGetTK);
        
        
        const dataRecied=await response.json();
        console.log(`can ho: ${JSON.stringify(dataRecied)}`)
        //console.log(`repone: ${dataRecied}`)
        return dataRecied;
    }catch(e){
        console.log(e);
    }
}