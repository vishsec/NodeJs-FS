const express = require('express')

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:"successful get",
        metadata:{
            hostname:req.hostname,
            method: req.method,
        },
    });
})

router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: "succesful get by ID",
        metadata:{
        hostname:req.hostname,
        userid:req.params.id,
        method: req.method,
        }
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message:"successful post",
        metadata:{
            name: req.body.name,
            hostname:req.hostname,
            method: req.method,
        },
    });
})

router.put('/:id', (req, res, next) => {
    res.status(201).json({
        message: "succeful put by Id",
        metadata:{
        
            hostname:req.hostname,
            userid:req.params.id,
            method: req.method,
        }
    })
})

router.delete('/:id', (req, res, next) => {
    res.status(201).json({
        message: "successful delete by Id",
        metadata:{  
            hostname:req.hostname,
            userid:req.params.id,
            method: req.method,
        }
    })
})

module.exports = router;