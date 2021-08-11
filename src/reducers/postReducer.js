import { FETCH_POSTS, NEW_POST } from '../action/types';

const initialState = {
  items: [],
  item: {}
};

 const postReducer = (state = initialState, action) =>{
    // eslint-disable-next-line
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};
export default postReducer