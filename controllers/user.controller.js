const User = require('../models/user.model.js');
const https = require('https');
const fetch = require('node-fetch');
let Request = require("request");

// Create and Save a new order 
exports.login = (req, res) => {
    // //Validate request
    // if (!req.body.userName) {
    //     return res.status(400).send({
    //         message: "User name content can not be empty"
    //     });
    // } else if (!req.body.password) {
    //     return res.status(400).send({
    //         message: "Password content can not be empty"
    //     });
    // }

    Request.post({
        "headers": { "content-type": "application/json" },
        "url": "https://test-api.smart-fertilizer.com/user/login",
        "body": JSON.stringify({
            "userName": 'sagi4422@gmail.com',
            "userIp": '123.12.1.0',
            "password": 'abcd1234'
        })
    }, (error, response, body) => {
        if (error) {
            return res.status(400).send(error);
        }
        return res.status(200).send(JSON.parse(body));
    });

};

// Find a single reservation with a Id
exports.validate = (req, res) => {
    if (!req.body.token) {
        return res.status(400).send({
            message: "Token content can not be empty"
        });
    } else if (!req.body.userId) {
        return res.status(400).send({
            message: "Password content can not be empty"
        });
    }

    Request.get("https://test-api.smart-fertilizer.com/user/" + req.body.userId + "/validatetoken?token=" + req.body.token, (error, response, body) => {
        if (error) {
            return res.status(400).send(error);
        }
        res.status(200).send(JSON.parse(body));
    });
};
