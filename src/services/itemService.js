import axios from 'axios';

const BASEPATH = 'https://api-shop-list.herokuapp.com';

export const getListItems = (userID, listID) => {
  return axios
    .get(`${BASEPATH}/list/${userID}/${listID}`)
    .then((res) => res.data);
};
export const addItem = (idUser, idList, name) => {
  return axios
    .post(`${BASEPATH}/item/${idUser}/${idList}`, {name, idList, idUser})
    .then((res) => res.data);
};
export const deleteItem = (idUser, idList, idItem) => {
  return axios
    .delete(`${BASEPATH}/item/${idUser}/${idList}/${idItem}`)
    .then((res) => res.data);
};

export const updateItem = (data) => {
  return axios.put(`${BASEPATH}/item/${data._id}`, {data});
};
