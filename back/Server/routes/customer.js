const express = require('express');
const _ = require('underscore');
const Customer = require('../models/customer');
const app = express();


app.get('/getCustomer',(req, res)=>{
    Customer.find({ status:'Active' })
    .exec((err, customers)=>{
       if (err) {
           return res.status(400).json({
               ok: false,
               err
           });
       } 
       return res.status(200).json({
           ok: true,
           count: customers.length,
           customers
       });
    });
});

app.get('/search/customer/:id',(req, res)=>{
    let id= req.params.id;
    Customer.find({ _id:id })
    .exec((err, customers)=>{
       if (err) {
           return res.status(400).json({
               ok: false,
               err
           });
       } 
       return res.status(200).json({
           ok: true,
           count: customers.length,
           customers
       });
    });
});


app.get('/search/customer/:id',(req, res)=>{
    let id=req.params.id;
    Usuario.find({ _id: id })
    .exec((err, customers)=>{
       if (err) {
           return res.status(400).json({
               ok: false,
               err
           });
       } 
       return res.status(200).json({
           ok: true,
           count: customers.length,
           customers
       });
    })
})

app.post('/addCustomer',(req,res) =>{

    let body = req.body;

    let customer = new Customer({
        address: body.nombre,
        city: body.email,
        country: body.password,
        district: body.district,
        firstName: body.nombre,
        lastName: body.apeido
    });  
    customer.save((err, UsrDB) =>{
        if (err) {
           return res.status(400).json({
                ok:false,
                err
            });
            
        }
        return res.status(200).json({
            ok: true,
            UsrDB
        });
    });

});

app.put('/upCustomer/:id',(req,res)=>{
    let id = req.params.id;
    let body = _.pick(req.body, ['address','city','country','district','firstName','lastName']);

    Customer.findByIdAndUpdate(id, body,{new:true, runValidators:true , context:'query'},(err, UsrDB)=>{
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            UsrDB
        });
    });
});

app.delete('/delCustomer/:id',(req, res)=>{
    let id = req.params.id;
    let body = {status:'Inactive'}

    Customer.findByIdAndUpdate(id, body,{new:true, runValidators:true , context:'query'},(err, UsrDB)=>{
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            UsrDB
        });
    });
    
});



module.exports = app;
