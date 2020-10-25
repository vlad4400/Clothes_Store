const express = require('express');
const fs = require('fs');
const basket = require('./services/basket-service.js');
const write = require('./utils/write.js')
const server = express();
server.use(express.json())

server.use('/', express.static('./public'))

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err){
            res.json(JSON.parse(data))
        }
    })
})
server.get('/basket', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err){
            res.json(JSON.parse(data))
        }
    })
})

server.post('/basket', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'));
    let newBasket = basket.add(data, req.body)
    write('./server/db/basket.json', newBasket)
        .then(status => {
            if(status) {
                res.json({ status })
            } else {
                res.sendStatus(500)
            }
        })
} )

server.put('/basket/:id', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'));
    let newBasket = basket.change(data, req.params.id, req.body.amount)
    write('./server/db/basket.json', newBasket)
        .then(status => {
            if(status) {
                res.json({ status })
            } else {
                res.sendStatus(500)
                
            }
        })
} )

server.delete('/basket/:id', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'));
    let newBasket = basket.delete(data)
    write('./server/db/basket.json', newBasket)
        .then(status => {
            if(status) {
                res.json({ status })
            } else {
                res.sendStatus(500)
            }
        })
} )

server.patch('/basket', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./server/db/basket.json', 'utf-8'));
    let newBasket = basket.clear(data)
    write('./server/db/basket.json', newBasket)
        .then(status => {
            if(status) {
                res.json({ status })
            } else {
                res.sendStatus(500)
            }
        })
} )
server.listen(3000)