import { FETCH_BLOG, FETCH_BLOGS } from './types';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import axios from 'axios';
import setAuthorization from '../config/setAuthorization';
const moment = require('moment');
let url = 'api/blog/fetch-blogs';

let notyf = new Notyf({
    position: {
        x: 'right',
        y: 'top'
    }
});

export function fetchAllBlogs() {
    return function (dispatch) {
        axios
            .get(
                url,

                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(response => {
                dispatch({ type: FETCH_BLOGS, data: response.data });
            })
            .catch(error => {});
    };
}
export function selectBlog(blog) {
    return function (dispatch) {
        dispatch({ type: FETCH_BLOG, data: blog });
    };
}
