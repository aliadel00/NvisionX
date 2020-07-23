const env = process.env.NODE_ENV || 'development';

//CONFIGURATION FOR DEV ENVIRONMENT
const development = {
    DATABASE_CONFIG: {
        url: 'mongodb+srv://ali:Hashish20@cluster0.bwgia.mongodb.net/RegistrationData?retryWrites=true&w=majority',
        database: 'RegstirationData'
    },
    PORT: 8000
};

//PLEASE FILL THE VALUES FOR PRODUCTION ENVIRONMENT
const production = {
    PORT: 8000
};

//PLEASE FILL THE VALUES FOR TEST ENVIRONMENT
const test = {
    PORT: 8000
};

const config = {
    development,
    production,
    test
};

module.exports = config[env];