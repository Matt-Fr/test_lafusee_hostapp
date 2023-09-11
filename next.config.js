const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["fakestoreapi.com"],
  },

  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: "main-app",
        remotes: {
          remote_component: `remotecomponent@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/primaryEntry.js",
        exposes: {},
      })
    );
    return config;
  },
};

module.exports = nextConfig;
