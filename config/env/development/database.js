module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'mongoose',
            settings: {
                host: env('DATABASE_HOST', 'cluster0.cyfes.mongodb.net'),
                port: env.int('DATABASE_PORT', 27017),
                database: env('DATABASE_NAME', 'backend_ecommerce'),
                username: env('DATABASE_USERNAME', 'superAdmin'),
                password: env('DATABASE_PASSWORD', 'Cyaver123'),
            },
            options: {},
        },
    },
});