module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'mongoose',
            settings: {
                uri: env('DATABASE_URI', 'mongodb+srv://superAdmin:Cyaver123@cluster0.cyfes.mongodb.net/backend_ecommerce?retryWrites=true&w=majority'),
            },
            options: {
                ssl: true,
            },
        },
    },
});