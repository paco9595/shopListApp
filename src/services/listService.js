import axios from 'axios';

const BASEPATH = 'https://api-shop-list.herokuapp.com';

export const getList = (userID) => {
  return axios.get(`${BASEPATH}/list/${userID}`).then((res) => res.data);
};

export const postList = (list) => {
  return axios
    .post(`${BASEPATH}/list/${list.idUser}`, list)
    .then((res) => res.data);
};

export const deletList = (idUser, idList) => {
  return axios
    .delete(`${BASEPATH}/list/${idUser}/${idList}`)
    .then((response) => response.data);
};
export const updateList = (list) => {
  return axios
    .put(`${BASEPATH}/list/${list.idUser}/${list._id}`, list)
    .then((response) => response.data);
};
