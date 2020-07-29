import { request, received, error } from '../shared/redux/baseActions';

import PostService from '../services/PostService';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
} from './actionTypes';

export const fetchPosts = (limit, page) => async (dispatch) => {
  dispatch(request(FETCH_POSTS_REQUEST));
  try {
    const response = await PostService.getPosts(limit, page);
    dispatch(received(FETCH_POSTS_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_POSTS_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR', err.response);
  }
};

export const fetchPost = (id) => async (dispatch) => {
  dispatch(request(FETCH_POST_REQUEST));
  try {
    const response = await PostService.getPost(id);
    dispatch(received(FETCH_POST_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_POST_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR', err.response);
  }
};
