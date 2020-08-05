import API from '../api/api';

const URL_USERS = '/users';

const getUsers = async (limit = 10, page = 0) => {
  const response = await API.get(`${URL_USERS}?_limit=${limit}&_page=${page}`);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

export default {
  getUsers,
};
