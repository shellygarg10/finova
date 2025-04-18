/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["randomuser.me"], // Allow images from this domain
    },
    webpack: (config, { isServer }) => {
        // Add transpilation for @bufbuild/protobuf and @connectrpc/connect
        config.module.rules.push({
            test: /\.m?js$/,
            include: [
                /node_modules\/@bufbuild\/protobuf/,
                /node_modules\/@connectrpc\/connect/,
            ],
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        });
        return config;
    },
};

export default nextConfig;
