const express = require('express');
//const _ = require('underscore');
const Customer = require('../models/Customers');
const app = express();

app.get('/customers', (req, res) => {
    Customer.find()
        .exec((err, customer) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            return res.status(200).json({
                ok: true,
                count: customer.length,
                customer
            });
        });
});

app.post('/customer', (req, res) => {
    let body = req.body;

    let customer = new Customer({
        Address: body.Address,
        City: body.City,
        Country: body.Country,
        District: body.District,
        FisrtName: body.FisrtName,
        LastName: body.LastName
    });

    customer.save((err, customerDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        return res.status(200).json({
            ok: true,
            customerDB
        });
    });
});

module.exports = app;