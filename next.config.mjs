/**
 *  @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next).NextConfig}}
 */

// const nextConfig = {};

// export default nextConfig;

function defineNextConfig(config){
    return config
}

export default defineNextConfig({
    reactStrictMode: true,
    swcMinify: true,

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true} }],
        })

        return config
    },
})
