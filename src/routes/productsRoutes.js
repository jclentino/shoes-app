const express = require('express')
const router = express.Router()
const productService = require('../services/productService')

router.get('/products', async (req,res)=> {
    try {
        const products = await productService.getProducts()
        res.json(products)

    } catch(e){
        res.json({
            message: e
        })
    }
})

router.get('/price/:user_id/:nombre_producto', async (req,res)=> {
    const { user_id, nombre_producto } = req.params
    try {
        const product = await productService.getProductGivenUser(user_id, nombre_producto)
        res.json(product)
    } catch(e){
        res.json({
               message: e
        })
    }
})

module.exports = router  