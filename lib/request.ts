import axios from 'axios';

export const signup = async <T, V>(formData: T): Promise<V> => {
  const { data } = await axios.post<V>(`/api/signup`, formData);
  return data;
};
