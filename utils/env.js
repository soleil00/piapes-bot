const dotenv = require('dotenv')

dotenv.config()

 const env = {
    BOT_API: `${process.env.BOT_API}`,
    WELCOME_IMAGE_URL: `${process.env.WELCOME_IMAGE_URL}`,
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    WELCOME_MESSAGE1: `${process.env.WELCOME_MESSAGE1}`,
    WELCOME_MESSAGE2: `${process.env.WELCOME_MESSAGE2}`,
    WELCOME_MESSAGE3: `${process.env.WELCOME_MESSAGE3}`,
 }

 module.exports = { env }