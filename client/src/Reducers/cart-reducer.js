import {
    ADD_TO_CART,
    REMOVE_ITEM,
    ADD_USER_DETAILS,
    BOOKING,
    ORDER,
    ORDER_FAILED,
    CHANGE_CURRENCY
} from '../Actions/types';

import {
    USDS,
    GBRS,
    GHCS,
    GHCV,
    GBRV,
    USDV,
    GHCA,
    GHCO,
    UK,
    US
} from '../values';
let INITIAL_STATE = {
    numberItems: '0',
    numberLikedItems: '0',
    cart: [],
    totalCost: 0,
    mainCost: 0,
    userDetails: {},
    days: '0',
    booking_id: '',
    pdf_data: {},
    deliveryCost: '',
    currency: GHCS,
    currency_value: GHCV
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TO_CART:
            let tempArray = [action.data];

            let p = 0;
            let newCart = [];
            let checker = 0;
            while (p < state.cart.length) {
                if (action.data.product.id === state.cart[p].product.id) {
                    checker++;
                }
                p++;
            }
            if (checker < 1) {
                newCart = state.cart.concat(tempArray);
            } else {
                newCart = state.cart;
            }

            let newItems = newCart.length.toString();
            let i = 0;
            let sum = 0;
            let daynumber = 0;
            let k = 0;
            while (i < newCart.length) {
                sum += parseFloat(newCart[i].product.price);
                i++;
            }
            while (k < newCart.length) {
                if (daynumber <= parseInt(newCart[k].product.days)) {
                    daynumber = newCart[k].product.days;
                }
                k++;
            }

            return {
                ...state,
                cart: newCart,
                numberItems: newItems,
                totalCost: sum,
                days: daynumber
            };
        case REMOVE_ITEM:
            let reducedCart = state.cart.filter(
                remove => remove.product.id !== action.data
            );
            let j = 0;
            let newsum = 0;
            while (j < reducedCart.length) {
                newsum += parseFloat(reducedCart[j].product.price);
                j++;
            }
            return {
                ...state,
                cart: reducedCart,
                numberItems: reducedCart.length.toString(),
                totalCost: newsum
            };

        case ADD_USER_DETAILS:
            let tempUser = action.data;
            let newCost;
            let deliveryCost;
            if (tempUser.delivery_type === '0') {
                newCost = state.totalCost + 0;
                deliveryCost = 0;
            }
            if (tempUser.delivery_type === '1') {
                newCost = state.totalCost + GHCA;
                deliveryCost = GHCA;
            }
            if (tempUser.delivery_type === '2') {
                newCost = state.totalCost + GHCO;
                deliveryCost = GHCO;
            }
            if (tempUser.delivery_type === '3') {
                newCost = state.totalCost + UK;
                deliveryCost = UK;
            }
            if (tempUser.delivery_type === '4') {
                newCost = state.totalCost + US;
                deliveryCost = US;
            }
            return {
                ...state,
                userDetails: tempUser,
                mainCost: newCost,
                deliveryCost: deliveryCost
            };

        case CHANGE_CURRENCY:
            let tempCurrency = action.data;
            let temp_value;
            let temp_symbol;

            if (tempCurrency === 0) {
                temp_value = GHCV;
                temp_symbol = GHCS;
            }

            if (tempCurrency === 1) {
                temp_value = USDV;
                temp_symbol = USDS;
            }

            if (tempCurrency === 2) {
                temp_value = GBRV;
                temp_symbol = GBRS;
            }
            return {
                ...state,
                currency: temp_symbol,
                currency_value: temp_value
            };

        case ORDER:
            let pdf = action.data;
            return {
                ...state,
                pdf_data: pdf,
                numberItems: '0',
                numberLikedItems: '0',
                cart: [],

                userDetails: {}
            };
        case ORDER_FAILED:
            let pdf2 = action.data;
            return {
                ...state,
                pdf_data: pdf2,
                numberItems: '0',
                numberLikedItems: '0',
                cart: [],

                userDetails: {}
            };
        case BOOKING:
            let tempBooking = action.data;
            console.log('BOOKING CODE IS ' + tempBooking);
            return { ...state, booking_id: tempBooking };

        default:
            return state;
    }
}
