/* 
    Developed by LK - Feb 2022 
*/

import axios from 'axios';
import { baseUrl } from '../consts/config';
import { authToken } from '../consts/consts';

interface Response {
  data: any;
  status: number;
  statusok: string;
}

export async function postService <T>( data : T, url :string): Promise<Response> {
  return await axios.post(baseUrl+url, data);
}

export async function postAuthService <T>( data : T, url :string): Promise<Response> {
  return await axios.post(baseUrl+url, data, {headers: {Authorization: checkAuth() }});
}

export async function getService(url: string) {
    return await axios.get(baseUrl + url, {headers: {Authorization: checkAuth() }});
}

export const checkAuth = (): string  => {
  return localStorage.getItem(authToken) as string;
}