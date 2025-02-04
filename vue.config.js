module.exports = {
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimize(true);
        }
    },
    publicPath: '/',
};
