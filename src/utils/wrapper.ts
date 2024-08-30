import axios from 'axios';

const checkResponse = (response: any) => response.data;
const catchError = (error: any) => error;

const baseUrl = 'https://api.lenzaos.com/'

export const wrapper = (method: "post" | "get" | "put" | "delete", url: string, params?: any, data?: any) => axios.request({ method, baseURL: baseUrl, url, params, headers: { 'version': '0.0' }, data }).then(checkResponse).catch(catchError);
