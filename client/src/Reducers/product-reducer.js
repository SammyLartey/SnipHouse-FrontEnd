import {
    FETCH_PRODUCTS,
    PRODUCT_DETAILS,
    FETCH_WEDDING,
    FETCH_CORPORATE,
    FETCH_READY
} from '../Actions/types';
import { shuffleArray } from '../values';

let INITIAL_STATE = {
    products: [],
    featured: [],
    productDetails: {},
    weddingProducts: [],
    corporateProducts: [],
    readyProducts: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            let tempProducts = action.data;
            let tempFeatured;
            if (action.data.length <= 8) {
                tempFeatured = shuffleArray(action.data);
            }
            if (action.data.length > 8) {
                tempFeatured = shuffleArray(action.data.slice(0, 8));
            }

            return { ...state, products: tempProducts, featured: tempFeatured };
        case FETCH_WEDDING:
            let tempWedding = [];
            let i = 0;

            while (i < action.data.length) {
                if (action.data[i].category === 'wedding') {
                    tempWedding.push(action.data[i]);
                }
                i++;
            }
            return { ...state, weddingProducts: tempWedding };

        case FETCH_CORPORATE:
            let tempCorporate = [];
            let j = 0;
            while (j < action.data.length) {
                if (action.data[j].category === 'corporate') {
                    tempCorporate.push(action.data[j]);
                }
                j++;
            }
            return { ...state, corporateProducts: tempCorporate };
        case FETCH_READY:
            let tempReady = [];
            let k = 0;
            while (k < action.data.length) {
                if (action.data[k].category === 'ready to wear') {
                    tempReady.push(action.data[k]);
                }
                k++;
            }
            return { ...state, readyProducts: tempReady };

        case PRODUCT_DETAILS:
            let tempDetails = action.data;
            return { ...state, productDetails: tempDetails };
        default:
            return state;
    }
}
