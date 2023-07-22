require('dotenv').config()

const config = {
    databaseUrl: process.env.DATABASE_URL
}

module.exports = {
    config
}