import axios from 'axios';

axios.defaults.baseURL = 'https://api.wisey.app/api/v1';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getToken = async () => {
  const response = await axios.get('/auth/anonymous?platform=subscriptions');
  setToken(response.data.token);
};

export const getCourses = async () => {
  await getToken();
  const { data } = await axios.get('/core/preview-courses');
return data.courses;
};

export const getCourse = async id => {
  await getToken();
  const { data } = await axios.get(`/core/preview-courses/${id}`);
  return data;
};
