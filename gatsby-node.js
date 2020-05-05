const webpack = require('webpack');
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    actions.setWebpackConfig({
        plugins: [new webpack.IgnorePlugin(/^electron$/)]
    });

    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /portis\.js|authereum\.js|fortmatic\.js|qrcode-modal|walletconnect/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }
};
