const Route = require('express').Router();
const Booking = require('../../models/booking');
const { check, validationResult } = require('express-validator');

const moment = require('moment');
const spawn = require('spawn-password');

Route.post('/', async function (req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        let tempID = `BO${spawn.spawnAlphaNumericLength(15)}`;
        const {
            email,
            country,
            town,
            address,
            date,
            reason,
            first_name,
            last_name,
            phone_number,
            booking_type
        } = req.body;

        const newBooking = new Booking({
            email: email.toLowerCase(),
            country,
            town,
            address,
            date,
            reason,
            first_name,
            last_name,
            phone_number,
            booking_type,
            booking_id: tempID,
            date_created: moment().format('MMM Do YYYY')
        });

        await newBooking.save().then(success => {
            res.status(200).send(tempID);
        });
    } catch (err) {
        console.log(err);
        res.status(400).send('Internal Server errror');
    }
});

module.exports = Route;
