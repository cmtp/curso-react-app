import { FETCH_POSTS_SUCCESS, FETCH_POST_SUCCESS } from '../actions/actionTypes';
import { getNewState } from '../shared/utils/frontend';

const initialState = {
  posts: [],
  seletedPost: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS: {
      const { payload: posts } = action;
      return getNewState(state, {
        posts,
      });
    }
    case FETCH_POST_SUCCESS: {
      const { payload: selectedPost } = action;
      return getNewState(state, {
        selectedPost,
      });
    }
    default: {
      return state;
    }
  }
}
