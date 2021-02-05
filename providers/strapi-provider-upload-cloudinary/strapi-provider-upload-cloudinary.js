module.exports = {
    init(providerOptions) {
        const cloudinary = require('cloudinary').v2;
        cloudinary.config(providerOptions);
        return {
            upload(file) {
                cloudinary.uploader.upload(`remote_backend_ecommerce/${file}`, {
                    cloud_name: process.env.CLOUD_NAME,
                    api_key: process.env.API_KEY,
                    api_secret: process.env.API_SECRET,
                    public_id: `remote_backend_ecommerce/${file.name}`,
                    tags: ['auto_upload', 'remote_backend_ecommerce'],
                    upload_preset: 'remote_backend_ecommerce',
                    folder: 'remote_backend_ecommerce',
                    type: 'upload'
                }, function(error, result) {
                    console.log(result);
                });
            }
        };
    }
};