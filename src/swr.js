import axios from 'axios';
import useSWR from 'swr';

const fetcher = (...args) => axios.get(args).then((response) => response.data);

export default function useAPI(url) {
  const { data, error, mutate } = useSWR(url, fetcher);

  return {
    data,
    loading: !error && !data,
    mutate,
  };
}
