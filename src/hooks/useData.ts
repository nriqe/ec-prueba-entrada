import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

//constants
import { keyData, staleTime, urlApi } from '../Constants';

//types
import { Data } from '../types/types';

const getData = async (): Promise<Data> => {
    const { data: datafromApi } = await axios.get<Data>(urlApi);
    return datafromApi;
}

const useData = () => useQuery<Data>([keyData], getData, { staleTime });

export { useData }