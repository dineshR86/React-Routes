import { FETCH_POSTS, FETCH_POST,DELETE_POST } from '../actions/index';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            // we are removing the deleted object from the state object
            return _.omit(state,action.payload);
        case FETCH_POST:
            // create a new object and add the exisitng state object and add a new key with the id value and its values as action.payload.data
            return {...state,[action.payload.data.id]:action.payload.data};
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}