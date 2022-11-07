const CracoLessPlugin = require ("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              "@primary-color": "#1DA57A",
              "@border-radius-base": "15px",
              "@border-radius-sm": "15px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
