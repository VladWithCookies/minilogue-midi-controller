import { API_URL } from '@/constants';

export const getPatches = () => fetch(API_URL).then((response) => response.json());
