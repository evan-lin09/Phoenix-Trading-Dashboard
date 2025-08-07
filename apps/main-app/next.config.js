/** @type {import('next').NextConfig} */
// const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  // 暂时禁用 Module Federation 以使用 App Router
  // Module Federation 目前不支持 Next.js App Router
  // 等待官方支持后再启用微前端功能
  
  // webpack(config, options) {
  //   const { isServer } = options;
  //   
  //   if (!isServer) {
  //     config.plugins.push(
  //       new NextFederationPlugin({
  //         name: 'main_app',
  //         filename: 'static/chunks/remoteEntry.js',
  //         remotes: {
  //           spot_trading: 'spot_trading@http://localhost:3001/_next/static/chunks/remoteEntry.js',
  //           futures_trading: 'futures_trading@http://localhost:3002/_next/static/chunks/remoteEntry.js',
  //           earn: 'earn@http://localhost:3003/_next/static/chunks/remoteEntry.js',
  //           dashboard: 'dashboard@http://localhost:3004/_next/static/chunks/remoteEntry.js',
  //         },
  //         shared: {
  //           react: {
  //             singleton: true,
  //             eager: true,
  //             requiredVersion: '^18.3.1',
  //           },
  //           'react-dom': {
  //             singleton: true,
  //             eager: true,
  //             requiredVersion: '^18.3.1',
  //           },
  //           '@heroui/react': {
  //             singleton: true,
  //             eager: false,
  //           },
  //           'framer-motion': {
  //             singleton: true,
  //             eager: false,
  //           },
  //         },
  //       })
  //     );
  //   }
  //   return config;
  // },
};

module.exports = nextConfig; 