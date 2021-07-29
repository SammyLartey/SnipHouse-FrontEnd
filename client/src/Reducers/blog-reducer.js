import { FETCH_BLOG, FETCH_BLOGS } from '../Actions/types';

let INITIAL_STATE = {
    blogs: [],
    numberBlogs: '',
    blogData: {}
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_BLOGS:
            let tempBlogs = action.data;

            return { ...state, blogs: tempBlogs };
        case FETCH_BLOG:
            let tempBlog = action.data;

            return { ...state, blogData: tempBlog };
        default:
            return state;
    }
}
