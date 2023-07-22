const { getConnectionDb } = require('../database/index')

class ProductService {
    async getProductGivenUser(user_id, nombre_producto){
        const db = await getConnectionDb()
        const user = await db.collection('users').findOne({ id: parseInt(user_id) })
        const product = await db.collection('products').findOne({ nombre: nombre_producto })

        return new Promise((res,rej)=> {
            if (user === null){
                rej('Usuario no encontrado')
            }
            
            if (user.metadata){
                const find = user.metadata.precios_especiales.find(product => product.nombre_producto === nombre_producto)
                if (find){
                    res(find) 
                } 
            }
            if (product === null){
                rej('Producto no encontrado')
            }

            res(product)
        })


    }

    async getProducts (){
        const db = await getConnectionDb()
        const products = await db.collection('products').find({ existencia: { $gte: 1 }}).toArray()
        return new Promise((res, rej)=> {
            res(products)
        })
    }
} 

const productService = new ProductService()

module.exports = productService 