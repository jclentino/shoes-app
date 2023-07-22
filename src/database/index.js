const { MongoClient } = require('mongodb');
const { config } = require('../../config')

const getConnectionDb = async ()=> {
  try {
    const client = await MongoClient.connect(config.databaseUrl, { useUnifiedTopology: true });
    console.log('¡Conexion exitosa!')
    return client.db('challenge')
  } catch(e){
    console.error('¡Conexion con base de datos ha fallado!',e)
  }
}

module.exports = { getConnectionDb }