import { APIS } from './Apis';
import axios from 'axios';


export const submitContact = async(data)=>{
    try{
        const response = await axios.post(APIS.contactSubmit, data);
        return [response?.status, true];
    }
    catch(error){
        return [error?.status, error?.response?.data];
    }
};

export const listServices = async()=>{
    try{
        const response = await axios.get(APIS.servicesList);
        return response.data;
    }
    catch(error){
        false;
    }
};
