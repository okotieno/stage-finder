const config = {

  development: { dialect: process.env['SF_DATABASE_DIALECT'],
    host: process.env['SF_DATABASE_HOST'],
    port: Number(process.env['SF_DATABASE_PORT']),
    username: process.env['SF_DATABASE_USERNAME'],
    password: process.env['SF_DATABASE_PASSWORD'],
    database: process.env['SF_DATABASE_DATABASE'],
    paranoid: true
  },
  production: {
    // Production database configuration
  },
};

module.exports = config;
