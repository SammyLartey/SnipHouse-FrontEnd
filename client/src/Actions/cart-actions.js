import React from 'react';
import {
    ADD_TO_CART,
    REMOVE_ITEM,
    ADD_USER_DETAILS,
    ORDER_FAILED,
    ORDER,
    BOOKING,
    CHANGE_CURRENCY
} from './types';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import axios from 'axios';
import setAuthorization from '../config/setAuthorization';
import 'moment/locale/en-gb';
const moment = require('moment');

let url = 'api/order/make-order';
let url2 = 'api/booking/create-booking';
let notyf = new Notyf({
    position: {
        x: 'right',
        y: 'top'
    }
});

export function addToCart(data) {
    return function (dispatch) {
        dispatch({ type: ADD_TO_CART, data: data });
    };
}
export function renderPDF() {
    return function (dispatch) {};
}
export function removeItem(data) {
    return function (dispatch) {
        dispatch({ type: REMOVE_ITEM, data: data });
    };
}
export function changeCurrency(data) {
    return function (dispatch) {
        console.log(data);
        dispatch({ type: CHANGE_CURRENCY, data: data });
    };
}
export function addUserDetails(data) {
    return function (dispatch) {
        dispatch({ type: ADD_USER_DETAILS, data: data });
    };
}
export function makeBooking(data) {
    console.log(data);
    return function (dispatch) {
        axios
            .post(
                url2,
                {
                    email: data.email,
                    country: data.country,
                    town: data.town,
                    address: data.address,
                    date: data.date,
                    reason: data.reason,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    phone_number: data.phone_number,
                    booking_type: data.booking_type
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(response => {
                let bookingID = response.data;
                dispatch({ type: BOOKING, data: bookingID });
                alert(
                    'Your Booking ID is ' +
                        bookingID +
                        ' Kindly save it for future reference'
                );
                notyf.success('Booking was Successful');
            })
            .catch(error => {
                console.log('Internet Problems');
            });
    };
}
export function makeOrder(data) {
    console.log(data);
    return function (dispatch) {
        let deliver = '';
        let newDate = moment();
        newDate.locale('en-gb');
        if (data.type === 1) {
            deliver = newDate.add(parseInt(data.delivery), 'days').calendar();
            console.log(deliver);
        }
        // if (data.type === 'sunday') {
        //     console.log(data.delivery);
        //     deliver = newDate
        //         .add(parseInt(data.delivery), 'days')
        //         .endOf('isoWeek')
        //         .add(1, 'week')
        //         .calendar();
        //     console.log(deliver);
        // }

        axios
            .post(
                url,
                {
                    order: JSON.stringify(data.order),
                    reference: data.reference,
                    buyer_info: JSON.stringify(data.buyer),
                    cost: data.cost,
                    delivery_date: deliver,
                    delivery_type: data.buyer.delivery_type,
                    delivery_cost: data.delivery_cost
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(response => {
                let order_id = response.data;
                let order_items = [];
                let counter = 0;

                while (counter < data.order.length) {
                    order_items.push(data.order[counter]);
                    counter++;
                }
                let pdf_data = {
                    date: deliver,
                    delivery_type: data.buyer.delivery_type,
                    order_id: order_id,
                    payment_reference: data.reference,
                    order_cost: data.cost,
                    items: order_items,
                    number: data.buyer.number
                };
                dispatch({ type: ORDER, data: pdf_data });
                data.history.push('/success');
            })
            .catch(error => {
                let pdf_data = {
                    payment_reference: data.reference,
                    number: data.buyer.number
                };
                dispatch({ type: ORDER_FAILED, data: pdf_data });
                data.history.push('/failure');
            });
    };
}
