require('dotenv').config();

const config = {
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    port: process.env.PORT,
    host: process.env.HOST,
    environment: process.env.ENVIRONMENT,
    db_url: process.env.DATABASE_URL,
}

module.exports = config;