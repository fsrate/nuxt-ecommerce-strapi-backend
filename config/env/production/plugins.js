module.exports = ({ env }) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUD_NAME', 'dc6apsdtu'),
            api_key: env('API_KEY', '137939413133749'),
            api_secret: env('API_SECRET', '8hFdOpghWmm208SxHFubOX8ZcfE'),
        },
    },
});