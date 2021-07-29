import {
    LOADING,
    FETCH_PRODUCTS,
    FETCH_WEDDING,
    FETCH_CORPORATE,
    FETCH_READY
} from './types';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import axios from 'axios';
import setAuthorization from '../config/setAuthorization';
const moment = require('moment');
let url = 'api/product/fetch-products';

let notyf = new Notyf({
    position: {
        x: 'right',
        y: 'top'
    }
});
export const loading = () => {
    return {
        type: LOADING
    };
};

export function fetchAllProducts() {
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
                dispatch({ type: FETCH_PRODUCTS, data: response.data });
            })
            .catch(error => {});
    };
}
export function fetchWeddingProducts() {
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
                dispatch({ type: FETCH_WEDDING, data: response.data });
            })
            .catch(error => {});
    };
}
export function fetchCorporateProducts() {
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
                dispatch({ type: FETCH_CORPORATE, data: response.data });
            })
            .catch(error => {});
    };
}
export function fetchReadyProducts() {
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
                dispatch({ type: FETCH_READY, data: response.data });
            })
            .catch(error => {});
    };
}
