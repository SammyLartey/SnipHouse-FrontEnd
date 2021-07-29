const Route = require('express').Router();
const Order = require('../../models/order');
const { check, validationResult } = require('express-validator');

const moment = require('moment');
const spawn = require('spawn-password');
const authentication = require('../../middlewares/jwt');

Route.post('/', async function (req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const {
            order,
            reference,
            buyer_info,
            cost,
            delivery_date,
            delivery_type,
            delivery_cost
        } = req.body;
        let temp_delivery;
        if (delivery_type === '0') {
            temp_delivery = 'Pickup';
        }
        if (delivery_type === '1') {
            temp_delivery = 'Deliver within Accra';
        }
        if (delivery_type === '2') {
            temp_delivery = 'Deliver outside Accra';
        }
        if (delivery_type === '3') {
            temp_delivery = 'Deliver within UK';
        }
        if (delivery_type === '4') {
            temp_delivery = 'Deliver within US';
        }

        console.log(delivery_type);
        let order_id = `ORDER${spawn.spawnAlphaNumericLength(10)}${Date.now()}`;
        let buyer = JSON.parse(buyer_info);
        const newOrder = new Order({
            order_id: order_id,

            payment_reference: reference,
            buyer_first_name: buyer.first_name,
            buyer_last_name: buyer.last_name,
            buyer_address: buyer.address,
            buyer_town: buyer.town,
            buyer_country: buyer.country,
            buyer_zip: buyer.zip,
            buyer_email: buyer.email,
            buyer_number: buyer.number,
            delivery_date: delivery_date,
            order_items: JSON.parse(order),
            payment_amount: cost,
            completed: false,
            delivery_type: temp_delivery,
            delivery_cost,
            date_created: moment().format('MMM Do YYYY')
        });

        await newOrder.save().then(success => {
            res.status(200).send(order_id);
        });
    } catch (err) {
        console.log(err);
        res.status(400).send('Internal Server errror');
    }
});

module.exports = Route;
