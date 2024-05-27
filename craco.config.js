// craco.config.js
const path = require(`path`);

module.exports = {
  // ...
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  jest: {
    babel: {
      addPresets: true /* (default value) */,
      addPlugins: true /* (default value) */,
    },
    configure: {
      /* ... */
    },
    configure: (jestConfig, { env, paths, resolve, rootDir }) => {
      /* ... */
      return jestConfig;
    },
  },
  style: {
    modules: {
      localIdentName: '',
    },
    css: {
      loaderOptions: {
        /* ... */
      },
      loaderOptions: (cssLoaderOptions, { env, paths }) => {
        /* ... */
        return cssLoaderOptions;
      },
    },
    sass: {
      loaderOptions: {
        /* ... */
      },
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        /* ... */
        return sassLoaderOptions;
      },
    },
    postcss: {
      mode: 'extends' /* (default value) */ || 'file',
      plugins: [require('tailwindcss'), require('autoprefixer')],
      env: {
        autoprefixer: {
          /* ... */
        },
        stage: 3,
        features: {
          /* ... */
        },
      },
      loaderOptions: {
        /* ... */
      },
      loaderOptions: (postcssLoaderOptions, { env, paths }) => {
        /* ... */
        return postcssLoaderOptions;
      },
    },
  },
};
